const { mongoose } = require("mongoose");
const Doctor = require("../models/doctorModel");
const User = require("../models/userModel");

const applyDoctor = async (req, res) => {
  try {
    const { specialist, fees } = req.body;

    if (!specialist || !fees) {
      return res.status(400).json({
        success: false,
        msg: "Specialist and fees are required",
      });
    }

    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        msg: "Unauthorized",
      });
    }

    // prevent duplicate application
    const existing = await Doctor.findOne({ userID: req.user.id });
    if (existing) {
      return res.status(400).json({
        success: false,
        msg: "You have already applied for doctor",
      });
    }

    const newDoc = await Doctor.create({
      userID: req.user.id,
      specialist,
      fees,
      status: "Pending", // ⭐ THIS WAS MISSING
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      msg: "Doctor application submitted",
      data: newDoc,
    });
  } catch (error) {
    console.error("Doctor apply error:", error);
    res.status(500).json({
      success: false,
      msg: "Server error",
    });
  }
};


const docStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["Accept", "Reject"].includes(status)) {
      return res.status(400).json({
        success: false,
        msg: "Invalid status value",
      });
    }

    const doctor = await Doctor.findById(id);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        msg: "Doctor application not found",
      });
    }

    doctor.status = status;
    doctor.updatedBy = req.user.id;
    await doctor.save();

    // 🔥 If accepted → promote user to Doctor
    if (status === "Accept") {
      await User.findByIdAndUpdate(doctor.userID, {
        role: "Doctor",
      });
    }

    res.json({
      success: true,
      msg: `Doctor application ${status}`,
    });
  } catch (error) {
    console.error("DOC STATUS ERROR:", error);
    res.status(500).json({
      success: false,
      msg: "Server error",
    });
  }
};


async function docApplyList(req, res) {
try {
    if (req.user.role !== "Admin") {
      return res.status(403).json({ success: false, msg: "Unauthorized" });
    }

    const doctors = await Doctor.find({ status: "Pending" });

    const userIds = doctors.map(d => d.userID);

    const users = await User.find(
      { _id: { $in: userIds } },
      "name email"
    );

    const userMap = {};
    users.forEach(u => {
      userMap[u._id.toString()] = u;
    });

    const finalData = doctors.map(doc => ({
      _id: doc._id,
      specialist: doc.specialist,
      fees: doc.fees,
      status: doc.status,
      user: userMap[doc.userID.toString()] || null,
    }));

    res.json({ success: true, data: finalData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, msg: "Server error" });
  }
}


const getApprovedDoctorList = async (req, res) => {
  try {
    if (req.user.role !== "Admin") {
      return res.status(403).json({
        success: false,
        msg: "Unauthorized",
      });
    }

    // 1️⃣ Get approved doctors
    const doctors = await Doctor.find({ status: "Accept" });

    if (!doctors.length) {
      return res.json({
        success: true,
        data: [],
      });
    }

    // 2️⃣ Extract user IDs
    const userIds = doctors.map(doc => doc.userID);

    // 3️⃣ Fetch users manually (NO populate)
    const users = await User.find(
      { _id: { $in: userIds } },
      "name email"
    );

    // 4️⃣ Create lookup map
    const userMap = {};
    users.forEach(user => {
      userMap[user._id.toString()] = user;
    });

    // 5️⃣ Merge doctor + user data
    const finalData = doctors.map(doc => ({
      _id: doc._id,
      specialist: doc.specialist,
      fees: doc.fees,
      status: doc.status,
      createdAt: doc.createdAt,
      user: userMap[doc.userID.toString()] || null,
    }));

    res.json({
      success: true,
      data: finalData,
    });
  } catch (error) {
    console.error("GET APPROVED DOCTORS ERROR:", error);
    res.status(500).json({
      success: false,
      msg: "Server error",
    });
  }
};



module.exports = { applyDoctor, docStatus, docApplyList,getApprovedDoctorList };
