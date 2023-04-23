import mongoose from "mongoose";
const HostSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required:true,
    },
    homestaytitle:{
        type:String,
        required:true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    streetaddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    hosttime: {
        type: String,
        required: true
    },
    ishosted: {
        type: String,
        required: true
    },
    rooms: {
        type: String,
        required: true
    },
    capacity: {
        type: String,
        required: true
    },
    meal:{
        type:String,
        required:true
    },
    abouthomestay:{
        type:String,
        required:true
    },
    termandcondition: {
        type: String,
        required: true
    },
    price: {
        single: {
            type: String,
            required: true
        },
        double: {
            type: String,
            required: true
        },
        extra: {
            type: String,
            required: true
        }
    },
    images: [{type:String}],
    facility:[{type:String}]

})

const HostSignupModel = mongoose.model('hostsignup', HostSchema);

export default HostSignupModel;