const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ service: "backend-api-2", status: "ok" });
});

app.listen(3000, () => {
  console.log("Backend API 2 running on port 3000");
});
