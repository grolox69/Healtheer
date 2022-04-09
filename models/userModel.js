import mongoose, { Schema } from "mongoose";

export const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    emailVerified: {
        type: Date || null,
        required: false,
    },
    patients: [{
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    }]
})

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;