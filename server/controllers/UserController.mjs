import express from "express";
import { getMe, get, create, update, del } from "../services/UserService.mjs";
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

router.get("/:id", async (req, res) => {
  try {
    const data = await get(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    logger.error(error);
    res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await create(req.body);
    res.status(201).json(data);
  } catch (error) {
    logger.error(error);
    res.status(500).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const data = await update(req.body, req.params.id);
    data[0] === 1
      ? res.status(201).json({ message: "Updated successfully" })
      : res.status(404).json({ message: "record not found" });
  } catch (error) {
    logger.error(error);
    res.status(500).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedRecordCount = await del(req.params.id);
    deletedRecordCount === 1
      ? res.status(200).json({ message: "Deleted successfully" })
      : res.status(404).json({ message: "record not found" });
  } catch (error) {
    logger.error(error);
    res.status(500).send(error.message);
  }
});

export default router;
