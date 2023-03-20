import { UserController } from "./userController";
import { ReportController } from "./ReportController";

const userController = new UserController();
const reportController = new ReportController();

export {
    userController,
    reportController
}