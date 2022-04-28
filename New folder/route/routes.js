import express from "express";
const router = express.Router();

import { getData } from "../Controller/dataController.js";

router.post("/bfhl", getData);

export default router;
