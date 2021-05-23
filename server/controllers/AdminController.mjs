import express from "express";
import { create, del, update, change } from "../services/UserService.mjs";
import logger from "../logs/pino.mjs";

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const data = await create(req.body);
    res.status(201).json(data);
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
      : res.status(404).json({ message: "Record not found" });
  } catch (error) {
    logger.error(error);
    res.status(500).send(error.message);
  }
});

router.post("/change", async (req, res) => {
  try {
    await change(req.body.data, req.body.id);
    res.status(200).json({ message: "Changed successfully" });
  } catch (error) {
    logger.error(error);
    res.status(500).send(error.message);
  }
});

export default router;
