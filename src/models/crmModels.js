const mongoose = require('mongoose');
const Schema = mongoose.Schema;
export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name',
    },
    lastName: {
        type: String,
        required: 'Enter a last name',
    },
    email: {
        type: String,
    },
    company: {
        type: String,
    },
    phone: {
        type: Number,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

export const UserSchema = new Schema({
    studentName: {
        type: String,
    },
    studentEmail: {
        type: String,
    },
    studentAge: {
        type: Number,
    },
    studentAddress: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});
