import express from "express";
import { getMe, addPost, delPost } from "../services/UserService.mjs";
import logger from "../logs/pino.mjs";

const router = express.Router();

router.get("/me", async (req, res) => {
  try {
    const data = await getMe(req.user.id);
    res.status(200).json(data);
  } catch (error) {
    logger.error(error);
    res.status(500).send(error.message);
  }
});

router.put("/addPost", async (req, res) => {
  try {
    await addPost(req.body, req.user.id);
    res.sendStatus(201);
  } catch (error) {
    logger.error(error);
    res.status(500).send(error.message);
  }
});

router.delete("/delPost", async (req, res) => {
  try {
    console.log(1);
    await delPost(req.body.id, req.user.id);
    console.log(2);
    res.sendStatus(201);
  } catch (error) {
    logger.error(error);
    res.status(500).send(error.message);
  }
});

export default router;
