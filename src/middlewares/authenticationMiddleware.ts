import { Request, Response, NextFunction } from "express";

import * as tokenProvider from "../utils/providers/tokenProvider.js";

export default function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    throw {
      status: 401,
      message: `missing token/ no permission`,
    };
  }

  const [token] = authorization.split(" ");

  const decodedToken = tokenProvider.decode(token);

  res.locals.userId = decodedToken.id;
  res.locals.email = decodedToken.email;
  res.locals.name = decodedToken.name;

  next();
}
