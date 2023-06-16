const multer = require('multer');
const path = require('path');
const sanitized = require('../utils/decodedUri');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    console.log('multer.js:', file);
    const sanitizedFilename = sanitized(file.originalname);
    const decodedFilename = decodeURIComponent(sanitizedFilename);
    console.log(decodedFilename);
    cb(null, `${Date.now()}${path.extname(decodedFilename)}`);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
