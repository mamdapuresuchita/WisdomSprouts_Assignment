const Appointment = require("../models/appointmentModel");
const User = require("../models/userModel")


async function createAppointment(req, res) {
  try {
    let { dateTime, doctorId } = req.body;

    if (!dateTime || !doctorId) {
      return res.status(400).json({
        success: false,
        msg: "doctorId and dateTime are required",
      });
    }

    const userId = req.user.id;

    const parsedDate = new Date(dateTime);
    if (isNaN(parsedDate.getTime())) {
      return res.status(400).json({
        success: false,
        msg: "Invalid date format",
      });
    }

    const newAppointment = await Appointment.create({
      userId,
      doctorId,
      dateTime: parsedDate,
      createdBy: userId,
    });

    return res.status(201).json({
      success: true,
      msg: "Appointment created successfully",
      data: newAppointment,
    });
  } catch (error) {
    console.log("Create Appointment error:", error);
    res.status(500).send({ msg: "Server Error" });
  }
}

async function updateAppointment(req, res) {
  const { ID } = req.params;
  const { dateTime, doctorId } = req.body;

  try {
    if (!dateTime || !doctorId) {
      return res.status(400).json({ msg: "DateTime and doctor are required" });
    }

    const appointment = await Appointment.findById(ID);

    if (!appointment) {
      return res.status(404).json({ msg: "Appointment not found", success: false });
    }

    if (appointment.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ msg: "Unauthorized", success: false });
    }

    appointment.dateTime = dateTime;
    appointment.doctorId = doctorId;
    appointment.updatedBy = req.user.id;

    await appointment.save();

    res.status(200).json({
      success: true,
      msg: "Appointment updated successfully",
      data: appointment,
    });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
}

/* =========================
   STATUS UPDATE (DOCTOR)
========================= */
async function statusUpdateByDoctor(req, res) {
  const { ID } = req.params;
  const { status } = req.body;

  try {
    const appointment = await Appointment.findById(ID);

    if (!appointment) {
      return res.status(404).send({ msg: "Appointment not found", success: false });
    }

    if (appointment.doctorId.toString() !== req.user.id) {
      return res.status(403).send({ msg: "Unauthorized", success: false });
    }

    appointment.status = status;
    appointment.updatedBy = req.user.id;

    await appointment.save();

    res.status(200).send({
      success: true,
      msg: "Appointment status updated successfully",
    });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
}

/* =========================
   DELETE APPOINTMENT (USER)
========================= */
async function deleteAppointment(req, res) {
  const { ID } = req.params;

  try {
    const appointment = await Appointment.findById(ID);

    if (!appointment) {
      return res.status(404).json({ msg: "Appointment not found", success: false });
    }

    if (appointment.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ msg: "Unauthorized", success: false });
    }

    await appointment.deleteOne();

    res.status(200).json({
      success: true,
      msg: "Appointment deleted successfully",
    });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
}

/* =========================
   USER APPOINTMENTS
========================= */
async function getAppointmentsByUser(req, res) {
  try {
    const appointments = await Appointment.find({ userId: req.user.id })
      .populate("doctorId", "name email")
      .sort({ createdAt: -1 });

    res.status(200).send({ success: true, appointments });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
}

/* =========================
   DOCTOR APPOINTMENTS
========================= */
async function showAppointmentsOfDoctor(req, res) {
  try {
    const appointments = await Appointment.find({ doctorId: req.user.id })
      .populate("userId", "name email")
      .sort({ createdAt: -1 });

    res.status(200).send({ success: true, appointments });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
}


async function viewAllAppointments(req,res) {
  try {
    if (req.user.role !== "Admin") {
      return res.status(403).json({ success: false, msg: "Unauthorized" });
    }

    // 1️⃣ Fetch all appointments
    const appointments = await Appointment.find().sort({ dateTime: -1 });

    // 2️⃣ Fetch all users (including doctors)
    const users = await User.find({}, "id name email"); // get only necessary fields

    // 3️⃣ Map user and doctor info into appointments
    const appointmentsWithNames = appointments.map((appt) => {
      const user = users.find((u) => u._id.toString() === appt.userId.toString());
      const doctor = users.find((d) => d._id.toString() === appt.doctorId.toString());

      return {
        ...appt._doc, // include all appointment fields
        userId: user ? { name: user.name, email: user.email } : null,
        doctorId: doctor ? { name: doctor.name, email: doctor.email } : null,
      };
    });

    res.json({ success: true, data: appointmentsWithNames });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, msg: "Server error" });
  }
  }


module.exports = {
  createAppointment,
  statusUpdateByDoctor,
  updateAppointment,
  deleteAppointment,
  getAppointmentsByUser,
  showAppointmentsOfDoctor,
  viewAllAppointments
};
