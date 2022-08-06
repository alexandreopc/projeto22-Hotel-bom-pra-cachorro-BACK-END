import { Router } from "express";
import { getAllFreeRooms, getAllRooms } from "../controllers/roomController.js";
import isAuthenticated from "../middlewares/authenticationMiddleware.js";

const roomRouter = Router();

roomRouter.get("/rooms", isAuthenticated, getAllRooms);
roomRouter.get("/free-rooms", isAuthenticated, getAllFreeRooms);

export { roomRouter };
