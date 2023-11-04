const User = require("../models/User");

// Calculate and set userDiseases for a user
async function calculateUserDiseases(userId) {
  // Implement the logic to calculate userDiseases based on user responses and other data
  // You may use the user's registerResponses to make these calculations
  return [];
}

// Calculate and set userProgress for a user
async function calculateUserProgress(userId) {
  // Implement the logic to calculate userProgress based on user responses and other data
  return {};
}

async function createUser(req, res) {
  try {
    const userData = req.body;
    userData.userDiseases = calculateUserDiseases();//pass
    console.log("req :",req.body);
    const newUser = new User(userData);
    await newUser.save();

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the user" });
  }
}

async function getUserDetailsByEmail(req, res) {
    try {
      const userEmail = req.params.email; // Assuming you receive the user's email from the request
      const user = await User.findOne({ email: userEmail });
  
      if (!user) {
        res.status(404).json({ message: "User not found" });
      } else {
        res.status(200).json({ user });
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      res.status(500).json({ error: "An error occurred while fetching user details" });
    }
  }
  

module.exports = {
  createUser,
  getUserDetailsByEmail,
};
