const express = require('express');
const app = express();
const logRequests = require('./middlewares/logRequests');
const measureTime = require('./middlewares/measureTime');

app.use(measureTime);
app.use(logRequests);

app.get('/', (req, res) => {
  res.send('Hello World');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
