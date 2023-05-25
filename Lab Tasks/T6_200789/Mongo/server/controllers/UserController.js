exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, details } = req.body;

    // Validate user input
    if (!(name && details)) {
      return res.status(400).send({ message: "All input is required" });
    }

    // Find the user by ID and update the fields
    const user = await User.findByIdAndUpdate(userId, { name, details }, { new: true });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    // Find the user by ID and delete it
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};
