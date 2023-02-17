import express from "express";
import { PatientController } from "../controller";
const router = express.Router();
const patientController = new PatientController();

router.route("/register").post(patientController.registerNewPatient);
router.route("/login").post(patientController.loginPatient);
router.route("report/share-with-doctor").post(patientController.shareReportWithDoctor);
router.route("/report/new").post(patientController.createNewReport);

router.route("/report/all").get(patientController.getAllReports);
router.route("/report/doctor-remarks").get(patientController.getDoctorRemarksOnReports);

export { router as patientRouter }
