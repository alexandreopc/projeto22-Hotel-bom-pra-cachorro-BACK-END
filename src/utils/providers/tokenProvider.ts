import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET = process.env.JWT_SECRET;
const EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";

interface ITokenPayload {
  id: number;
  email: string;
  name: string;
}

export function encode(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: EXPIRES_IN });
}

export function decode(token: string): ITokenPayload {
  try {
    return jwt.verify(token, SECRET) as ITokenPayload;
  } catch (error) {
    throw {
      status: 401,
      message: `invalid token`,
    };
  }
}
