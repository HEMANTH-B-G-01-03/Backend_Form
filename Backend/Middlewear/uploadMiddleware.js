const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname);
//     }

// });
// Configure storage for uploaded images
const storage = multer.memoryStorage(); // Or use diskStorage if you prefer

const upload = multer({ storage });

//const upload = multer({ storage: storage });

module.exports = upload;
