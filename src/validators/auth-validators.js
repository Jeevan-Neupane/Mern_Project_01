import { z } from "zod";


//*Create a object schema


const signupSchema = z.object({
    username: z
        .string({ required_error: "Name is required" }).trim().min(3, { message: "Name must be at least of 3 character" }),



    email: z.string({ required_error: "Email is required" }).trim().email({ message: "Invalid email address" }).min(3, { message: "Email must be of more than 3 characters" }).max(255, { message: "Email must be of more than 255 chacters" }),


    phone: z.string({ required_error: "Phone is required" }).trim().min(10, { message: "Phone must be of 10 characters" }).max(10, { message: "Phone must be of 10 characters" }),

    password: z.string({ required_error: "Password is required" }).min(7, {
        message: "Password must be at least 6 characters"
    }).max(1024, { message: "Password connot be greater than 1024" })



})

export default signupSchema;