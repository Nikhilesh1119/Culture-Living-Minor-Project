import guestModel from "../models/guestModel.js";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import "dotenv/config.js";

export async function verifyUser(req, res, next) {
  try {
    const { email } = req.method == "GET" ? req.query : req.body;
    console.log(email);
    const isExist = await guestModel.findOne({ email });
    if (!isExist) {
      console.log("user not exist");
      res.status(StatusCodes.NOT_FOUND).json({ error: "User does not exist" });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "authentication error" });
  }
}

export async function checkAuthorize(req, res, next) {
  try {
    const secretkey = process.env.JWTSECRETKEY;
    const bearertoken = req.headers.authorization;
    const token = bearertoken.split(" ")[1];
    // console.log(token);
    if (token == "null") {
      return res.status(StatusCodes.UNAUTHORIZED).json({ error: "token is needed" });
    } 
    else {
      jwt.verify(token, secretkey, (error, authdata) => {
        if (error) {
          return res.status(StatusCodes.UNAUTHORIZED).json("invalid Token");
        } else {
          next();
        }
      });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
}
