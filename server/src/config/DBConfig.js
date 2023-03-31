import mongoose from "mongoose";
import { DBURL } from "../constants/constants";

export async function dbConfig() {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(DBURL);
        console.log("Database connected!");
    } catch (error) {
        console.log(error);
    }
}