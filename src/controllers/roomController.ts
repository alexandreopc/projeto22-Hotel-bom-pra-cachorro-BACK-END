import { Request, Response } from "express";
import * as roomService from "../services/roomService.js";

export async function getAllRooms(req: Request, res: Response) {
  const rooms = await roomService.getAllRooms();

  res.send(rooms).status(201);
}

export async function getAllFreeRooms(req: Request, res: Response) {
  const rooms = await roomService.getAllFreeRooms();

  res.send(rooms).status(201);
}
