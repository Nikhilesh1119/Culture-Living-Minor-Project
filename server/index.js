import express from "express";
import { PORT } from "./src/constants/constants.js";
import { dbConfig } from "./src/config/DBConfig.js";
import cors from 'cors';


const app=express();

app.use(cors());
app.use(express.json());

app.listen(PORT,(req,res)=>{
    dbConfig();
    console.log(`Server is running at port ${PORT}`);
})
