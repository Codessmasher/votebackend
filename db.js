import mongoose from "mongoose";
const dbconnect = () => {
    mongoose.connect(
        `${process.env.MONGO_URL}/${process.env.DB}`
    ).then(() => {
        console.log("mongoose connected");
    }).catch(err => console.log("error connecting db ", err));
}
export default dbconnect; 