import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import ExecJWT from "./middlewares/ExecJWT.mjs";
import isAuth from "./middlewares/isAuth.mjs";
import Auth from "./controllers/AuthController.mjs";

import UserController from "./controllers/UserController.mjs";

const app = express();

app.use(bodyParser.json({ limit: "10mb" }));
app.use(cors());
app.use(ExecJWT);
app.get("/", (req, res) => {
  res.send(req.user);
});

app.use("/auth", Auth);
app.use("/users", isAuth, UserController);

export default app;
