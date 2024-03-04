const express = require("express");
require('dotenv').config();
const app = express();
PORT = process.env.PORT || 8000;

app.use("/", (req, res) => {
  res.status(200).json({ msg: "Hello Express app" });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
