const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("StaySync API is working 🚀");
});

app.listen(PORT, () => {
  console.log(`StaySync API running at http://localhost:${PORT}`);
});