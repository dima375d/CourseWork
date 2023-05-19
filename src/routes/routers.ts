/** @format */

import { Router } from "express";
import UserController from "../controllers/userController";
import FinesCreate from "../controllers/finesController";
import VehiclesCreate from "../controllers/vehiclesController";
import AllmessageCreate from "../controllers/allmessageController";

const router = Router();

router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.put("/userupdate", UserController.update);
router.get("/check", UserController.check);

router.post("/createFines", FinesCreate.create);
router.get("/getAllFines", FinesCreate.getAll);
router.get("/geOneFines", FinesCreate.getOne);
router.put("/paymentFines", FinesCreate.payment);
router.delete("/deleteFines", FinesCreate.delete);

router.post("/createVehicles", VehiclesCreate.create);
router.get("/getAllVehicles", VehiclesCreate.getAll);
router.get("/geOneVehicles", VehiclesCreate.getOne);
router.delete("/deleteVehicles", VehiclesCreate.delete);

router.post("/createmessage", AllmessageCreate.create);
router.get("/getAllmessage", AllmessageCreate.getAll);
router.get("/geOnemessage", AllmessageCreate.getOne);
router.delete("/deletemessage", AllmessageCreate.delete);

export default router;
