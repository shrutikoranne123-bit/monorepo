const express = require('express');
const app = express();

app.get('/api1', (req, res) => {
  res.json({ message: 'Hello from API 1' });
});

app.listen(3000, () => {
  console.log('API1 running on port 3000');
});
