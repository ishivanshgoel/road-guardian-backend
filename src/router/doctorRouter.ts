import express from "express";
import { DoctorController } from "../controller";
import { doctorAuthMiddleware } from "../middleware/doctorAuthMiddleware";
const router = express.Router();
const doctorController = new DoctorController();

router.route("/register").post(doctorController.registerNewDoctor);
router.route("/login").post(doctorController.loginDoctor);
router.route("report/share-remark").post(doctorAuthMiddleware, doctorController.provideRemarkOnPatientReport);

router.route("/request/approve").post(doctorAuthMiddleware, doctorController.approvePatientRequest);

router.route("/report/all").get(doctorAuthMiddleware, doctorController.getPatientReports);
router.route("/all").get(doctorAuthMiddleware, doctorController.getAllDoctors);
router.route("/registered-patients").get(doctorAuthMiddleware, doctorController.getRegisteredPatients);
router.route("/request/all").get(doctorAuthMiddleware, doctorController.getNewPatientRequests);

export { router as doctorRouter }
