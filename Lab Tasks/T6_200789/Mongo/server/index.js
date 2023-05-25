const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");

const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/task6db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to the database");
  } catch (error) {
    console.log("Failed to connect to the database. Exiting now...");
    console.error(error);
    process.exit(1);
  }
};

app.use(express.json());
app.use(cors());

app.use("/user", userRoute);

const startServer = async () => {
  await connectToDatabase();
  app.listen(8080, () => {
    console.log("Server is listening on port 8080");
  });
};

startServer();
