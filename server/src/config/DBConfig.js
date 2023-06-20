import mongoose from "mongoose"

export async function configDB(){
    try {
        mongoose.set('strictQuery',true);
        await mongoose.connect('mongodb+srv://nikhilesh1119:Nikhilesh%402405@myprojects.ej0eprz.mongodb.net/?retryWrites=true&w=majority');
        console.log("Database Connected!"); 
    } catch (error) {
        console.log(error);
    }
}