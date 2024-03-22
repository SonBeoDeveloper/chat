import mongoose from "mongoose";
let isconnected = false
export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if (isconnected) {
        console.log('MongoDB is already connected');
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'Chat',
            useNewUrlParser: true
        })
        isconnected = true
        console.log('MongoDB is connected successfully');
    } catch (error) {
        console.log(error);
    }
}
