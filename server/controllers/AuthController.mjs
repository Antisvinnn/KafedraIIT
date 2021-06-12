import express from "express";
import logger from "../logs/pino.mjs";
import { get, create, update, find } from "../services/UserService.mjs";
import { generate, getInfo, validate } from "../services/jwtService.mjs";

const router = express.Router();

async function login(req, res) {
  try {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const user = await find(req.body.login);
    if (!user) throw new Error("User not found");
    if (!user.validPassword(req.body.password))
      throw new Error("Password is incorrect");
    const JWT = generate({ id: user.id, role: user.role });
    let tokens;
    user.tokens.length < 5
      ? (tokens = [...user.tokens, { token: JWT.refreshToken, ip }])
      : (tokens = [...user.tokens.slice(-4), { token: JWT.refreshToken, ip }]);
    const data = await Promise.all([update({ tokens }, user.id), JWT]);
    if (data[0][0] == 0) throw new Error("Tokens not updated");
    res.status(200).json(data[1]);
  } catch (error) {
    logger.error(error);
    res.status(405).json(error.message);
  }
}

router.post("/login", (req, res) => login(req, res));

router.post("/refresh", async (req, res) => {
  try {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const decoded = getInfo(req.body.token);
    const user = await get(decoded.id);
    if (!user) throw new Error("User not found");
    let founded = false;
    let tokens = user.tokens
      .map((item) => {
        if (item.token === req.body.token) {
          founded = true;
          return null;
        }
        return item;
      })
      .filter((item) => item !== null);
    if (!founded) throw new Error("JWT not founded");
    if (!validate(req.body.token)) return update({ tokens }, user.id);
    const JWT = generate({ id: user.id, role: user.role });
    tokens = [...tokens, { token: JWT.refreshToken, ip }];
    const data = await Promise.all([update({ tokens }, user.id), JWT]);
    if (data.length !== 2)
      if (data[0] === 0) throw new Error("JWT not updated: Token is invalid");
      else throw new Error("Token is invalid");
    if (data[0][0] === 0) throw new Error("JWT not updated");
    res.status(201).json(data[1]);
  } catch (error) {
    logger.error(error);
    res.status(400).json(error.message);
  }
});

router.post("/register", async (req, res) => {
  try {
    const data = await create(req.body);
    if (data[1]) login(req, res);
    else res.sendStatus(400);
  } catch (error) {
    logger.error(error);
    res.status(400).json(error.message);
  }
});

router.post("/logout", async (req, res) => {
  try {
    const { id } = await getInfo(req.body.token);
    const user = await get(id);
    if (!user) throw new Error("User not found");
    user.tokens = user.tokens.filter((item) => item.token != req.body.token);
    const data = await update({ tokens: user.tokens }, user.id);
    if (data[0] === 0) throw new Error("Token not removed");
    res.sendStatus(200);
  } catch (error) {
    logger.error(error);
    res.status(400).json(error.message);
  }
});

export default router;
