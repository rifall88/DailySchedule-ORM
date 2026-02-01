import express from "express";
import { register, login, getUserById } from "../controllers/userController.js";
import {
  validateRegister,
  validateLogin,
} from "../validators/uservalidator.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);
router.get("/by-id", authenticate, getUserById);

export default router;
