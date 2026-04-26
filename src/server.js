const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");

const errorHandler = require("./middlewares/errorHandler");

const connectDB = require("./config/db");
const app = express();
app.use(cors());

connectDB();

app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/events",eventRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("StaySync API is working...");
});

app.listen(PORT, () => {
  console.log(`StaySync API running at http://localhost:${PORT}`);

});