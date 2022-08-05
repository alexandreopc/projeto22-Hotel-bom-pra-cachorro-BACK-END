import { Router } from "express";
import * as userController from "../controllers/userController.js";
import isAuthenticated from "../middlewares/authenticationMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import * as userSchema from "../schemas/userSchemas.js";

const userRouter = Router();

userRouter.post(
  "/login",
  validateSchemaMiddleware(userSchema.loginUser),
  userController.login
);
userRouter.post(
  "/sign-up",
  validateSchemaMiddleware(userSchema.createUser),
  userController.create
);
userRouter.get("/test", isAuthenticated, (req, res) => {
  res.sendStatus(200);
});

export { userRouter };
