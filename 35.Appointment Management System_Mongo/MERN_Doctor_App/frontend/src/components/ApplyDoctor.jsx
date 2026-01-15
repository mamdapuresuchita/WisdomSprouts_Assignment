import { useState } from "react";
import { toast } from "react-toastify";
import { applyDoctor } from "../api/doctorAPI";

const ApplyDoctor = () => {
  const [formData, setFormData] = useState({
    specialist: "",
    fees: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.specialist || !formData.fees) {
      return toast.error("All fields are required");
    }

    try {
      const res = await applyDoctor(formData);

      if (res.data.success) {
        toast.success("Doctor application submitted");
        setFormData({ specialist: "", fees: "" });
      } else {
        toast.error(res.data.msg);
      }
    } catch {
      toast.error("Server error");
    }
  };

  return (
    <div className="apply-doctor-wrapper">
      <div className="apply-doctor-card">
        <h4 className="title">🧑‍⚕️ Apply for Doctor</h4>

        <form onSubmit={handleSubmit}>
          {/* Specialist */}
          <div className="form-group">
            <label>Specialization</label>
            <input
              type="text"
              name="specialist"
              className="form-control"
              placeholder="e.g. Cardiologist"
              value={formData.specialist}
              onChange={handleChange}
            />
          </div>

          {/* Fees */}
          <div className="form-group">
            <label>Consultation Fees (₹)</label>
            <input
              type="number"
              name="fees"
              className="form-control"
              placeholder="Enter fees"
              value={formData.fees}
              onChange={handleChange}
            />
          </div>

          <button className="btn-apply">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default ApplyDoctor;
