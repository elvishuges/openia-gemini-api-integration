import multer from "multer";
import fs from "fs";
import path from "path";

const uploadFile = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      const dir = path.resolve("upload/file");

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      cb(null, `${process.env.UPLOAD_DIRECTORY}/${file.fieldname}`);
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

export default uploadFile;
