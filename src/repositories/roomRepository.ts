import prisma from "../config/database.js";
import { User } from "@prisma/client";

export async function getAllRooms() {
  return await prisma.room.findMany({});
}

export async function getAllFreeRooms() {
  return await prisma.room.findMany({ where: { isReserved: false } });
}
