import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const dbConnection = () =>
  new Promise((resolve, reject) => {
    mongoose.connect("mongodb+srv://sirine:Bengabsia@cluster0.lcjl3.mongodb.net/sirine?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });



   

    const db = mongoose.connection;
    db.on("error", () => {
      console.error.bind(console, "connection error:");
      reject(
        new Error(
          "Connection error has occurred when trying to connect to the database!"
        )
      );
    });
    db.once("open", () => resolve("🚀 Successful database connection."));
  });

export default dbConnection;
