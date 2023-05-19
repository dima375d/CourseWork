/** @format */

import { Router } from "express";
import UserController from "../controllers/userController";

const router = Router();

router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.put("/userupdate", UserController.update);
router.get("/check", UserController.check);

export default router;
