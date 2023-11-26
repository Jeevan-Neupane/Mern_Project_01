import { User } from "../model/user.model.js";
import bcrypt from 'bcryptjs';

export const getAuth = async (req, res) => {

    res.send("Hello Jeevan you need to work on this first");

}



export const register = async (req, res) => {

    try {
        const { username, email, phone, password } = req.body;

        const isExist = await User.findOne({ email });

        if (isExist) {
            return res.status(400).json({
                message: "Email already exist"
            })
        }





        const user = new User({
            username, email, phone, password
        })

        const token = await user.generateAccessToken();





        const savedUser = await user.save();


        res.status(201).json({
            message: "User Created Successfully",
            token,
            id: savedUser._id.toString()
        })





    } catch (error) {

        res.status(500).json('Internal Server Error');

    }
}


export const login = async (req, res, next) => {
    const { email, password } = req.body;

    try {

        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).json({
                message: 'User does not exist'
            });
        }


        const isPasswordValid = await bcrypt.compare(password, userExist.password);

        if (isPasswordValid) {
            res.status(200).json({
                msg: 'Login Successful',
                token: await userExist.generateAccessToken(),
                userId: userExist._id.toString()
            })
        } else {
            res.status(401).json({ message: "Password Invalid" });
        }



    } catch (error) {
        const message = error;

        next({ message });
    }

}