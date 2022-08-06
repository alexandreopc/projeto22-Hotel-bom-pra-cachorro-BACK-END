import { Request, Response } from "express";
import { Dog } from "@prisma/client";
import * as dogService from "../services/dogService.js";
// import { CreateDog } from "../utils/interfaces/createData.js";

export async function createDog(req: Request, res: Response) {
  const { name, weight } = req.body;
  const userId = res.locals.userId;
  const data = { name, weight, userId } as Dog;

  await dogService.createDog(data);

  res.sendStatus(201);
}

export async function getAllDogsUser(req: Request, res: Response) {
  const userId = +res.locals.userId;

  const dogs = await dogService.getAllDogsUser(userId);

  res.send(dogs).status(200);
}
