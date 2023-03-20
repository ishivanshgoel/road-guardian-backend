import express from "express";
import { reportController } from "../controller";
import { userAuthMiddleware } from "../middleware/userAuthMiddleware";
import upload from "../storage";
const router = express.Router();

router.post("/accident", userAuthMiddleware, upload.single("image"), reportController.submitAccidentReport);
router.post("/hazard", userAuthMiddleware,upload.single("image"), reportController.submitHazardReport);
router.post("/rash-driving", userAuthMiddleware,upload.single("image"), reportController.submitRashDrivingReport);

router.post("/accident/find", userAuthMiddleware,reportController.getAccidentReports);
router.post("/hazard/find", userAuthMiddleware,reportController.getHazardReports);
router.post("/rash-driving/find", userAuthMiddleware,reportController.getRashDrivingReports);

export { router as reportRouter }
