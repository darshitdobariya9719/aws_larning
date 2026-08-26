const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello from AWS EC2!",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
