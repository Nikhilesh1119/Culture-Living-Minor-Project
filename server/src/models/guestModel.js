import mongoose from "mongoose";

const guestSchema = mongoose.Schema({
   firstname:{type:String , required:true},
   lastname:{type:String, required:true},
   email:{type:String, required:true, unique:true},
   password:{type:String, required:true},
   phone:{type:String ,required:true,unique:true},
   guestCount:{type:Number,required:true},
   address:{type:String,required:true},
   checkin:{type:Date,required:true},
   checkout:{type:Date,required:true}
})

const guestModel = mongoose.model('guestsignup',guestSchema);
export default guestModel;