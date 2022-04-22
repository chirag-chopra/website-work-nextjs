import connectDB from "../utils/db";
import Blog from "../models/blogModel";
const multer = require("multer");
const path = require("path");

/*
Need to discuss about how to upload "n - no." of images using multer
*/

// storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `pages/api/blogImages/${file.fieldname}`);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.originalname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

var authUpload = upload.fields([
  { name: "profilePics", maxCount: 1 },
  { name: "documentPic", maxCount: 1 },
]);

const handler = async (req, res) => {
  if (req.method == "POST") {
    const { titleTxt, titleImg, bodyObjects } = req.body;

    await Blog.create({ head: { titleTxt, titleImg }, body: bodyObjects });
    res.status(200).json({ success: true, message: "Blog added successfully" });
  } else {
    res.status(200).json({ success: true, message: "Method not allowed" });
  }
};

export default connectDB(handler);
