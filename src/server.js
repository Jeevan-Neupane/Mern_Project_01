import dotenv from "dotenv"

dotenv.config({
    path: './env'
})


import { app } from "./app.js"
import connectDB from "./db/db.js"
import errorMiddleWare from "./middleware/error-middleware.js";




app.use(errorMiddleWare);
connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server Started At Port ${process.env.PORT}`);

    })
}).catch((error) => {
    console.log('Error while connecting to the severer', error);

})