import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true)

    mongoose.connect(url)
        .then(() => console.log('MongoDb Connected'))
        .catch((error) => console.log(error))
}

export default connectDB;