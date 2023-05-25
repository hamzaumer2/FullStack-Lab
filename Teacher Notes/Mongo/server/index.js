const express = require("express");
const app = express();
const cors = require("cors"); 
//Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism 
//that allows a server to indicate any origins (domain, scheme, or port) 
//other than its own from which a browser should permit loading resources.
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");

const connect = () => {
  mongoose.connect(`mongodb://127.0.0.1:27017/dummy`, {
    useNewUrlParser: true, //allow users to fall back to the old parser if they find a bug in the new parser.
    useUnifiedTopology: true, //removes support for several connection options that are no longer relevant with the new topology engine
  }).then(() => {
    console.log("Successfully connected to database");
  })
  .catch((error) => {
    console.log("database connection failed. exiting now...");
    console.error(error);
    process.exit(1);
  });
};

app.use(express.json());
app.use(cors());

app.use("/user", userRoute);
//The app. use() method mounts or puts the specified middleware functions at the specified path. 
app.listen(8080, async () => {
  await connect();
  console.log(`Server is connected to port 8080`);
});
