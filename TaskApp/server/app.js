const express = require("express");
const cors = require("cors");
require("dotenv").config();
const adminRoutes= require('./routes/adminRoutes')

const app = express();

/* 🔥 CORS MUST COME FIRST */
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);


app.use("/api/admin", adminRoutes);



app.listen(5001, () => {
  console.log("Server running on port 5001");
});
