import guestModel from '../models/guestModel.js';
import HostSignupModel from '../models/hostModel.js';
import {StatusCodes} from 'http-status-codes';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
const secretkey = process.env.JWTSECRETKEY;

export async function HostSignup(req,res){
    try {
        console.log(req.body);
        const checkEmail = await HostSignupModel.findOne({email:req.body.email});
        if(checkEmail){
            res.status(StatusCodes.BAD_REQUEST).json({error:"Enter unique email"});
            return;
        }
        const checkPhone = await HostSignupModel.findOne({phone:req.body.phone});
        if(checkPhone){
            res.status(StatusCodes.BAD_REQUEST).json({error:"Enter unique phone"});
            return;
        }
        const hashedPassword = bcrypt.hashSync(req.body.password , 12);
        req.body['password'] = hashedPassword;
        const hostdata = new HostSignupModel(req.body);
        const savedHost = await hostdata.save();
        res.status(StatusCodes.CREATED).json(savedHost);  
    } catch (error) {
        console.log(error);
    }
}

export async function getHomestays(req,res){
    try {
       const homestays = await HostSignupModel.find();
       res.status(StatusCodes.OK).json(homestays);
    } catch (error) {
        
    }
}

export async function GuestSignup(req ,res){
    try {
        const{email , password} = req.body;
        const checkMail =await guestModel.findOne({email});
        if(checkMail){
            console.log(checkMail);
            res.status(StatusCodes.BAD_REQUEST).json({error:"Email alrady exists"});
            return;
        }
        const hashedPassword = bcrypt.hashSync(password,12);
        req.body['password'] = hashedPassword;
        const guestdata = new guestModel(req.body);
        const saveGuest = await guestdata.save();
        console.log(saveGuest);
        res.status(StatusCodes.CREATED).json(saveGuest);
    } catch (error) {
        console.log(error);
    }
}

export async function guestLogin(req,res){
    try {
        const {email ,password} = req.body;
        const checkGuest = await guestModel.findOne({email});
        if(checkGuest){
            if(password){
                if(bcrypt.compareSync(password, checkGuest.password)){
                    jwt.sign({firstname:checkGuest.firstname , lastname:checkGuest.lastname,email:checkGuest.email,phone:checkGuest.phone},secretkey, {expiresIn:'300s'},(error,token)=>{
                        if(error){
                            res.json({error:"token couldn't be created"});
                        }
                        else{
                            res.json({message:"guest loginned successfully" ,token,name:checkGuest.firstname});
                        }
                    })
                }
                else{
                    res.status(StatusCodes.UNAUTHORIZED).json({error:"wrong password"});
                }
            }
            else{
                res.status(StatusCodes.BAD_REQUEST).json({error:"password is needed"});
            }
        }
        else{
            res.status(StatusCodes.BAD_REQUEST).json({error:"Wrong Email."})
        }
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
    }
}