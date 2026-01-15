import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createAppointment } from "../api/appointmentAPI";
import { getDoctorList } from "../api/userAPI";

const CreateAppointment = () => {
  const [doctors, setDoctors] = useState([]);

  const [formData, setFormData] = useState({
    doctorId: "",
    dateTime: "",
  });

  useEffect(() => {
    fetchDoctors();
  }, []);

 const fetchDoctors = async () => {
  const res = await getDoctorList();
  console.log(res.data);

  if (res.data.success) {
    setDoctors(res.data.doc); // 👈 FIX HERE
  }
};


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.doctorId || !formData.dateTime) {
      return toast.error("All fields are required");
    }

    const res = await createAppointment(formData);

    if (res.data.success) {
      toast.success("Appointment booked successfully");
      setFormData({ doctorId: "", dateTime: "" });
    } else {
      toast.error(res.data.msg);
    }
  };

  return (
    <div className="appointment-wrapper">
      <div className="appointment-card">
        <h4 className="title">📅 Book Appointment</h4>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Select Doctor</label>
<select
  className="form-control"
  name="doctorId"
  value={formData.doctorId}
  onChange={handleChange}
>
  <option value="">-- Select Doctor --</option>

  {doctors?.map((doc) => (
    <option key={doc._id} value={doc._id}>
      Dr. {doc.name}
    </option>
  ))}
</select>

          </div>

          <div className="form-group">
            <label>Appointment Date & Time</label>
            <input
              type="datetime-local"
              className="form-control"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
            />
          </div>

          <button className="btn-submit">Book Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAppointment;
