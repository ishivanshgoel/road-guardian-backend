import express from "express";
import { userController } from "../controller";
import { userAuthMiddleware } from "../middleware/userAuthMiddleware";
const router = express.Router();

router.route("/login").post(userController.loginUser);

export { router as userRouter }
