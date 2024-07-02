const fs = require('fs');
const path = require('path');

const logRequests = (req, res, next) => {
  res.on('finish', () => {
    const log = `${new Date().toISOString()} - ${req.method} ${req.url} - ${res.statusCode}\n`;
    fs.appendFile(path.join(__dirname, '../request.txt'), log, (err) => {
      if (err) {
        console.error('Failed to write to log file:', err);
      }
    });
  });

  next();
};

module.exports = logRequests;
