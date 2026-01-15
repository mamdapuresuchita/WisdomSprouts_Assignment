import { useEffect, useState } from "react";
import {
  getUserAppointments,
  getDoctorAppointments,
  deleteAppointment,
  updateAppointmentStatus,
  getAllAppointments,
} from "../api/appointmentAPI";
import { toast } from "react-toastify";

const Appointments = ({ user }) => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      let res;

      if (user.role === "Doctor") {
        res = await getDoctorAppointments();
      } else if (user.role === "Admin") {
        res = await getAllAppointments(); // Admin fetches all
      } else {
        res = await getUserAppointments();
      }

      if (res.data.success) {
        setAppointments(res.data.data || res.data.appointments);
      }
    } catch {
      toast.error("Failed to load appointments");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this appointment?")) return;

    const res = await deleteAppointment(id);
    if (res.data.success) {
      toast.success("Appointment deleted");
      fetchAppointments();
    }
  };

  const handleStatusChange = async (id, status) => {
    const res = await updateAppointmentStatus(id, status);
    if (res.data.success) {
      toast.success("Status updated");
      fetchAppointments();
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="appointments-page">
      <h3 className="page-title">📋 Appointments</h3>

      {appointments.length === 0 ? (
        <p>No appointments found</p>
      ) : (
        <table className="appointments-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Doctor</th>
              <th>Date & Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((appt) => (
              <tr key={appt._id}>
                <td>{appt.userId?.name || "N/A"}</td>
                <td>{appt.doctorId?.name || "N/A"}</td>
                <td>{new Date(appt.dateTime).toLocaleString()}</td>

                <td>
                  <span className={`status ${appt.status.toLowerCase()}`}>
                    {appt.status}
                  </span>
                </td>

                <td>
                  {/* USER ACTION */}
                  {user.role === "User" && (
                    <button
                      className="btn danger"
                      onClick={() => handleDelete(appt._id)}
                    >
                      Delete
                    </button>
                  )}

                  {/* ADMIN ACTION */}

                  {user.role === "Admin" && (
                    <span className="text-muted">View Only</span>
                  )}

                  {/* DOCTOR ACTION */}
                  {user.role === "Doctor" && appt.status === "Pending" && (
                    <>
                      <button
                        className="btn success"
                        onClick={() => handleStatusChange(appt._id, "Accepted")}
                      >
                        Accept
                      </button>

                      <button
                        className="btn danger"
                        onClick={() => handleStatusChange(appt._id, "Reject")}
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Appointments;
