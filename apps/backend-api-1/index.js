const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ service: "backend-api-1", status: "ok" });
});

app.listen(3000, () => {
  console.log("Backend API 1 running on port 3000");
});
