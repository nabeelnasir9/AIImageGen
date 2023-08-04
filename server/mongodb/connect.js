import mongoose from "mongoose";

const connectDb = async (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => {
      console.log("mongoose is connected");
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

export default connectDb;
