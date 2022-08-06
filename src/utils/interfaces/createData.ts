import { User, Dog, Reservation, Room, Image } from "@prisma/client";

export type CreateUser = Omit<User, "id" | "createdAt">;
export type CreateDog = Omit<Dog, "id" | "createdAt">;
