import express from "express";
import { reportController } from "../controller";
import { userAuthMiddleware } from "../middleware/userAuthMiddleware";
import upload from "../storage";
const router = express.Router();

router.post("/accident", upload.single("image"), reportController.submitAccidentReport);

export { router as reportRouter }
