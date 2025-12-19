import express from "express";
import user from "./user.js";
import admin from "./admin.js";
import gemini from "./gemini.js";
import openia from "./openIa.js";

const router = express.Router();

router.use("/users", user);
router.use("/admin", admin);
router.use("/gemini", gemini);
router.use("/openia", openia);

export default router;
