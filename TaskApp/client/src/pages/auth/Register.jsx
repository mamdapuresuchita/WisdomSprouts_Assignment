import { useState } from "react";
import { register } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await register(form);
      alert("Registered successfully");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="container d-flex justify-content-center vh-100 align-items-center">
      <div className="card p-4" style={{ width: "350px" }}>
        <h4>Register</h4>

        <input
          className="form-control mb-2"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="form-control mb-2"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <input
          className="form-control mb-2"
          placeholder="Phone"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <button className="btn btn-success w-100" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
