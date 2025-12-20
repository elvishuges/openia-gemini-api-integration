import express from "express";
import { generateAnswer } from "../controller/gemini.js";

const gemini = express.Router();

gemini.post("/gupload-json", generateAnswer);

export default gemini;
