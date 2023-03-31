import mongoose from "mongoose";
const HostSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "please provide username"]
    },
    lastname: {
        type: String,
        required: [true, "please provide username"]
    },
    email: {
        type: String,
        required: [true, "please enter a email"],
        unique: [true, "email already exist!"]
    },
    phone: {
        type: Number,
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
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    hosttime: {
        type: Number,
        required: true
    },
    ishosted: {
        type: Boolean,
        required: true
    },
    rooms: {
        type: Number,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    termandcondition: {
        type: String,
        required: true
    },
    price: {
        single: {
            type: Number,
            required: true
        },
        double: {
            type: Number,
            required: true
        },
        extra: {
            type: Number,
            required: true
        }
    },
    images: [{
        data: Buffer,
        contentType: String
    }]
})

const HostSignupModel = mongoose.model('loginUser', HostSchema);

export default HostSignupModel;