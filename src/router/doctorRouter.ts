import express from "express";
import { DoctorController } from "../controller";
const router = express.Router();
const doctorController = new DoctorController();

router.route("/register").post(doctorController.registerNewDoctor);
router.route("/login").post(doctorController.loginDoctor);
router.route("report/share-remark").post(doctorController.provideRemarkOnPatientReport);

router.route("/request/approve").post(doctorController.approvePatientRequest);

router.route("/report/all").get(doctorController.getPatientReports);
router.route("/all").get(doctorController.getAllDoctors);
router.route("/registered-patients").get(doctorController.getRegisteredPatients);
router.route("/request/all").get(doctorController.getNewPatientRequests);

export { router as doctorRouter }
