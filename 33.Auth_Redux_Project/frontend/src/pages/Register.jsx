import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/auth/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          name="name"
          placeholder="Enter your Name"
          onChange={handleChange}
        ></input>
        <input
          name="email"
          placeholder="Enter your EmailID"
          onChange={handleChange}
        ></input>
        <input
          name="password"
          placeholder="Password"
          onChange={handleChange}
        ></input>
        <button type="submit">
          {isLoading ? "Loading..." : "Register"}Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
