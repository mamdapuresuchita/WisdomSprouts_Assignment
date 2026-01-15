const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

BASEURL = "http://localhost:6002/uploads/";

const register = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    const imagePath = req.file ? req.file.filename : null;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(200).send({ msg: "User already exists", success: false });
    }

    if (!existingUser) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        phone,
        address,
        imagePath,
        role: "User",
      });

      await newUser.save();
      res.status(200).send({ msg: "Registered successfully", success: true });
    }
  } catch (error) {
    console.error("Register Error", error);
    res.status(500).send({ msg: "Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const loggedInUser = await User.findOne({ email });
    console.log(loggedInUser, "Logged User");

    if (!loggedInUser) {
      res.status(400).send({ msg: "User not found", success: false });
    }

    if (await bcrypt.compare(password, loggedInUser.password)) {
      const payload = { id: loggedInUser._id, role: loggedInUser.role };

      const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "1d",
      });
      console.log(token, "token in controller");

      return res
        .status(202)
        .send({ msg: "Logged in successfully", success: true, token: token });
    } else {
      res.status(400).send({ msg: "password incorrect!!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Server Error" });
  }
};

const getUserInfo = async (req, res) => {
  try {
    const loggedInUser = await User.findById(req.user.id)
    loggedInUser.imagePath = BASEURL+loggedInUser.imagePath

    res.status(200).send({user:loggedInUser,success:true})
  } catch (error) {
    console.log("Login error",error)
    res.status(500).send({ msg: "Server Error" });
  }
};

const doctorList = async (req, res) => {
  try {

    const listOfDoctors = await User.find({role:"Doctor"})
    res.status(200).send({doc:listOfDoctors,success:true})
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
};


const getAllUsers= async(req,res)=>{
    try {
    const users = await User.find({}, "name email contact role").sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Failed to fetch users",
      error: error.message,
    });
  }
}
module.exports = { register, login, getUserInfo, doctorList ,getAllUsers};
