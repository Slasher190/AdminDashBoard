import express from "express";
import { getUser } from "../controllers/general.js";
const router = express.Router();

router.get("user/:id",getUser) // :id worked as params
export default router;
