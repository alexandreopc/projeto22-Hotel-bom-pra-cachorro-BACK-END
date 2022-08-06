import { Router } from "express";
import { dogRouter } from "./dogRouter.js";
import { roomRouter } from "./roomRouter.js";
import { userRouter } from "./userRouter.js";

const router = Router();

router.use(userRouter);
router.use(roomRouter);
router.use(dogRouter);

export default router;
