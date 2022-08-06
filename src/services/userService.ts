import { User } from "@prisma/client";
import * as usersRepository from "../repositories/userRepository.js";
import * as cryptProvider from "../utils/providers/cryptProvider.js";
import * as tokenProvider from "../utils/providers/tokenProvider.js";

export async function login({ email, password }) {
  const user = await usersRepository.getByEmail(email);

  if (!user) {
    throw {
      status: 401,
      message: `email or password invalid`,
    };
  }

  const isValid = await cryptProvider.verify(password, user.password);

  if (!isValid) {
    throw {
      status: 401,
      message: `email or password invalid`,
    };
  }

  const token = tokenProvider.encode({
    id: user.id,
    email: user.email,
    name: user.name,
    phoneNumber: user.phoneNumber,
  });

  return {
    token,
  };
}

export async function create({
  name,
  email,
  phoneNumber,
  cpf,
  password,
}: User) {
  const user = await usersRepository.getByEmail(email);

  if (user) {
    throw {
      status: 409,
      message: `email already in use`,
    };
  }

  const encryptedPassword = await cryptProvider.encode(password);

  await usersRepository.create({
    name,
    email,
    phoneNumber,
    cpf,
    password: encryptedPassword,
  });
}
