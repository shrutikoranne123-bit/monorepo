const express = require('express');
const app = express();

app.get('/api2', (req, res) => {
  res.json({ message: 'Hello from API 2' });
});

app.listen(3000, () => {
  console.log('API2 running on port 3000');
});
