import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import ExecJWT from "./middlewares/ExecJWT.mjs";
import isAuth from "./middlewares/isAuth.mjs";
import isAdmin from "./middlewares/isAdmin.mjs";
import Auth from "./controllers/AuthController.mjs";

import UserController from "./controllers/UserController.mjs";
import PublicController from "./controllers/PublicController.mjs";
import AdminController from "./controllers/AdminController.mjs";

const app = express();

app.use(bodyParser.json({ limit: "10mb" }));
app.use(cors());

app.use("/stuff", PublicController);
app.use(ExecJWT);
app.use("/auth", Auth);
app.use("/users", isAuth, UserController);
app.use("/admin", isAdmin, AdminController);

export default app;
