const mongoose = require("mongoose");
//Object Data Modeling (ODM) library for MongoDB and Node.js. 
//It manages relationships between data, provides schema validation, 
//and is used to translate between objects in code and the representation 
//of those objects in MongoDB.

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;