import { Router } from "express";
import { createDog, getAllDogsUser } from "../controllers/dogController.js";

import isAuthenticated from "../middlewares/authenticationMiddleware.js";

const dogRouter = Router();

dogRouter.post("/dog", isAuthenticated, createDog);
dogRouter.get("/dogs", isAuthenticated, getAllDogsUser);

export { dogRouter };
