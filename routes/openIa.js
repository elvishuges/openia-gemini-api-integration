import express from "express";
import { getAskOpenIa } from "../controller/openIa.js";

const openia = express.Router();

openia.post("/ask", getAskOpenIa);

export default openia;
