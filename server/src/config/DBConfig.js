import mongoose from "mongoose";
export async function configDB(){
    try {
        mongoose.set('strictQuery',true);
        await mongoose.connect('mongodb://127.0.0.1:27017/CultureLivingDB');
        console.log("Database Connected!"); 
    } catch (error) {
        console.log(error);
    }
}