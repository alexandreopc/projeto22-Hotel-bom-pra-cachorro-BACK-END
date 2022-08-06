import { Dog } from "@prisma/client";
import * as dogRepository from "../repositories/dogRepository.js";

export async function createDog(dogData: Dog) {
  return await dogRepository.createDog(dogData);
}

export async function getAllDogsUser(userId: number) {
  return await dogRepository.getAllDogsUser(userId);
}
