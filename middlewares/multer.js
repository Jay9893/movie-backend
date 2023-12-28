const multer = require("multer")
const path = require("path")
// Set up multer storage
const storage = multer.diskStorage({
  destination: path.join(process.cwd(), 'uploads'), // Adjust the destination folder as needed
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
