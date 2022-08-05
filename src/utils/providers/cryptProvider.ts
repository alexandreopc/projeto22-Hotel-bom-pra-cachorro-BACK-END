import bcrypt from "bcrypt";

const SALT_ROUNDS = +process.env.SALT_ROUNDS || 10;

export async function encode(password: string) {
  return await bcrypt.hash(password, SALT_ROUNDS);
}

export async function verify(password: string, hash: string) {
  return await bcrypt.compare(password, hash);
}
