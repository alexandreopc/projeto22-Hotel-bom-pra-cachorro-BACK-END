import { User } from "@prisma/client";
import { Request, Response } from "express";
import * as userService from "../services/userService.js";

export async function login(req: Request, res: Response) {
  const login = req.body;

  const authenticatedUser = await userService.login(login);

  res.send(authenticatedUser).status(200);
}

export async function create(req: Request, res: Response) {
  const data = req.body as User;

  await userService.create(data);

  res.sendStatus(201);
}
