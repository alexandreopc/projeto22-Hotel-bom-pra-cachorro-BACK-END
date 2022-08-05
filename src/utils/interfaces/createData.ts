import { User, Dog, Reservation, Room, Image } from "@prisma/client";

export type CreateUser = Omit<User, "id" | "createdAt">;
export type CreateTests = Omit<Dog, "id" | "createdAt">;
