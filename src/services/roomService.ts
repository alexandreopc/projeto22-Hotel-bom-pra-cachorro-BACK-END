import * as roomRepository from "../repositories/roomRepository.js";

export async function getAllRooms() {
  return await roomRepository.getAllRooms();
}

export async function getAllFreeRooms() {
  return await roomRepository.getAllFreeRooms();
}
