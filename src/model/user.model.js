import bcrypt from "bcryptjs";
import mongoose from "mongoose"
import jwt from 'jsonwebtoken'



const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })



userSchema.pre('save', async function (next) {

    if (!this.isModified('password')) {
        return next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(this.password, saltRound);

        this.password = hash_password;

        next();
    } catch (error) {
        next(error);
    }

})

userSchema.methods.generateAccessToken = function () {
    return jwt.sign({
        _id: this._id.toString(),
        email: this.email,
        username: this.username,
        fullName: this.fullName
    },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: '30d'
        })

}


export const User = mongoose.model('User', userSchema);