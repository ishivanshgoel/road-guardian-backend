import { NextFunction, Request, Response } from "express";
import { INormalUser, NormalUser, AmbulanceUser, IAmbulanceUser, PoliceStationUser, IPoliceStationUser, RoadAgencyUser, IRoadAgencyUser, HospitalUser, IHospitalUser } from "../entity";
import { veriftyJwtToken, generateJwtToken } from "../util";

export class UserController {

  public loginUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { username, password, type } = req.body;
      if (!username || !password || !type) {
        throw new Error("[username/ password/ type] is missing");
      }

      let user;
      if(type === 'citizen') {
        user = await NormalUser.findOne({ aadharId: username });
      } else if (type === 'police') {
        user = await PoliceStationUser.findOne({ username });
      } else if(type === 'ambulance') {
        user = await AmbulanceUser.findOne({ username });
      } else if(type === 'hospital') {
        user = await HospitalUser.findOne({ username });
      } else if(type === 'roadAgency') {
        user = RoadAgencyUser.findOne({ username });
      }

      if (!user) {
        throw new Error("Invalid email/ password/ user type");
      }

      if (user.password !== password.trim()) {
        throw new Error("Invalid email/ password");
      }

      const payload = {
        _id: user["_id"],
        aadharId: user.aadharId,
        name: user.name
      }

      const token = generateJwtToken(payload);

      res.json({
        error: false,
        message: "login success",
        data: user,
        token: token
      });
    } catch (error) {
      next(error);
    }
  };

  public registerUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { aadharId, password, name } = req.body;
      if (!password || !aadharId || !name) {
        throw new Error("[username/ password] is missing");
      }

      const user = await NormalUser.findOne({ aadharId });
      if (user) {
        throw new Error("user already exist");
      }

      const newUser = new NormalUser({
        name,
        aadharId,
        password
      })

      newUser.save();

      res.json({
        error: false,
        message: "user registered"
      });
    } catch (error) {
      next(error);
    }
  };
}
