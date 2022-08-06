import prisma from "../config/database.js";
import { User } from "@prisma/client";
import { CreateUser } from "../utils/interfaces/createData.js";

export async function getByEmail(email: string) {
  return await prisma.user.findFirst({
    where: {
      email,
    },
  });
}

export async function create({
  name,
  email,
  phoneNumber,
  cpf,
  password,
}: CreateUser) {
  await prisma.user.create({
    data: {
      name,
      email,
      phoneNumber,
      cpf,
      password,
    },
  });
}
