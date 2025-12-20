import express from "express";
import uploadFileMid from "../middleware/uploadFile.js";
import { uploadFile } from "../controller/files.js";

const router = express.Router();

// Route to upload a JSON file
router.post("/upload-json", uploadFileMid.single("file"), uploadFile);

export default router;
