import mongoose from "mongoose";

const connectdb = async() => {
    try {
        await mongoose.connect(process.env.MONGODB)
        .then(()=>{
            console.log("MONGO DB Connected Successfully");
        })
    } catch (error) {
        console.log("Error with connecting to DB", error.message);
        process.exit(1);
    }
}

export default connectdb;