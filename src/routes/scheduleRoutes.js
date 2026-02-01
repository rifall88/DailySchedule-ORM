import express from "express";
import {
  createSchedule,
  getAllSchedules,
  getScheduleById,
  updateSchedule,
  deleteSchedule,
} from "../controllers/scheduleController.js";
import {
  validateCreateSchedule,
  validateUpdateSchedule,
} from "../validators/scheduleValidator.js";
import { authenticate } from "../middleware/authMiddleware.js"; // Untuk melindungi rute

const router = express.Router();

// Rute yang mungkin memerlukan autentikasi
router.post("/", authenticate, validateCreateSchedule, createSchedule);
router.get("/all", authenticate, getAllSchedules);
router.get("/by-id/:id", authenticate, getScheduleById);
router.put("/by-id/:id", authenticate, validateUpdateSchedule, updateSchedule);
router.delete("/by-id/:id", authenticate, deleteSchedule);

export default router;
