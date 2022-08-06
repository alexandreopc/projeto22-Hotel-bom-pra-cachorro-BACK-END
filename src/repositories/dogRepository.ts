import prisma from "../config/database.js";
import { Dog } from "@prisma/client";
// import { CreateDog } from "../utils/interfaces/createData.js";

export async function createDog({ name, weight, userId }: Dog) {
  return await prisma.dog.create({ data: { name, weight, userId } });
}

export async function getAllDogsUser(userId: number) {
  return await prisma.dog.findMany({ where: { userId } });
}
