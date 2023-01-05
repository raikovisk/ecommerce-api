const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, callback) => callback(null, __dirname + '/../public/images'),
    filename: (reg, file, callback) => callback(null, file, fildname + '-' + Date.now() + '.jpg')
});

const upload = multer({ storage });

module.exports = upload;