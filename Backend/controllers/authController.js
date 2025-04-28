const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register a new user
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input fields
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await User.create({ name, email, password: hashedPassword });

    // Send success response
    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    console.error("Error in register:", err); // Log the error for debugging
    res.status(500).json({
      msg: "Internal server error",
      error: err.message, // Include the error message for debugging
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// profile controller
// Profile controller to fetch user details
exports.getProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Extract user ID from the token (middleware should set this)
    const user = await User.findById(userId).select("-password"); // Exclude password from the response

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json({
      name: user.name,
      email: user.email,
      token: req.token, // Include the token from the request
    });
  } catch (err) {
    console.error("Error fetching profile:", err);
    res.status(500).json({ msg: "Internal server error" });
  }
};
