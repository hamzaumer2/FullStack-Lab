const User = require("../model/UserModel");

exports.newUser = async (req, res) => {
  try {
    // Get user input
    const { name, details } = req.body;

    const params = {};
    if (name) {
      params.name = name;
    }
    if (details) {
      params.details = details;
    }

    // Validate user input
    if (!(params?.name && params?.details)) {
      res.status(400).send({ message: "All input is required" });
    }

    // Create user in our database
    const user = await User.create({
      name: params?.name,
      details: params?.details
    });

    user.save();

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    // Validate if user exist in our database
    const user = await User.find({ });

    if (user) {
      res.status(200).json({
        code: 2001,
        data: user,
      });
    }
  } catch (err) {
    return res.status(500).json({
      code: 2002,
      message: "Something went wrong",
    });
  }
};
