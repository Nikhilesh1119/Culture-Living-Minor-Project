import mongoose from "mongoose";
// const ATLAS_URL = 'mongodb+srv://kuldeeppanwar460:F4MjNXrHr4AhsHcf@cluster0.zlwvwxo.mongodb.net/?retryWrites=true&w=majority';
export async function configDB(){
    try {
        mongoose.set('strictQuery',true);
        await mongoose.connect('mongodb://127.0.0.1:27017/homestay');
        // await mongoose.connect(ATLAS_URL);
        console.log("Database Connected!"); 
    } catch (error) {
        console.log(error);
    }
}