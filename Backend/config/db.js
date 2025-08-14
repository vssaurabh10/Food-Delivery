import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://vssaurabh10:United21220522@cluster0.ujs4yq8.mongodb.net/food-delivery"
    )
    .then(() => {
      console.log("MongoDB connected successfully");
    });
};
