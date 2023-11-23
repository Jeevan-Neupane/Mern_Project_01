import mongoose from "mongoose";




const connectDB = async () => {

    try {
        await mongoose.connect(`${process.env.MONGO_DB_URI}/${process.env.DB_NAME}`);
        console.log("Connection to the database is successful");

    } catch (error) {
        console.log("Error while connecting to the database", error);
        process.exit(1);

    }
}

export default connectDB;