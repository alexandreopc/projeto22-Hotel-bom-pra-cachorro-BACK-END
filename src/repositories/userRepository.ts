import prisma from "../config/database.js";
import { User } from "@prisma/client";

export async function getByEmail(email: string) {
  return await prisma.user.findFirst({
    where: {
      email,
    },
  });
}

export async function create({ name, email, phoneNumber, password }) {
  await prisma.user.create({
    data: {
      name,
      email,
      phoneNumber,
      password,
    },
  });
}
