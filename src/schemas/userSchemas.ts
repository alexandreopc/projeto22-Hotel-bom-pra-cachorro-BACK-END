import Joi from "joi";
import { CreateUser } from "../utils/interfaces/createData";

export const createUser = Joi.object<CreateUser>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
  phoneNumber: Joi.string().required(),
});

export const loginUser = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
// TODO:  objeto de loginUser
