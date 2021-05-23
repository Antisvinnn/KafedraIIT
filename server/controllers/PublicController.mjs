import express from "express";
import {
  getPublicInfo,
  getAll,
  getPostsById,
} from "../services/UserService.mjs";
import logger from "../logs/pino.mjs";

const router = express.Router();

router.get("/getAll", async (req, res) => {
  try {
    const data = await getAll();
    res.status(200).json(data);
  } catch (error) {
    logger.error(error);
    res.status(400).json(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await getPublicInfo(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    logger.error(error);
    res.status(500).send(error.message);
  }
});

router.get("/posts/:id", async (req, res) => {
  try {
    const data = await getPostsById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    logger.error(error);
    res.status(500).send(error.message);
  }
});

export default router;
