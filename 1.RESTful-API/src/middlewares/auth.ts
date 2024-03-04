import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { errorResponse } from './../utils/responseApi';

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let access_token = req.headers.authorization;
    if (access_token && access_token.startsWith('Bearer')) {
      access_token = access_token.split(' ')[1];
    } else {
      return res
        .status(401)
        .send(errorResponse('Unauthorized', res.statusCode));
    }
    jwt.verify(access_token, 'faketoken_user1');
    next();
  } catch (err: any) {
    return res
        .status(401)
        .send(errorResponse('Unauthorized', res.statusCode));
  }
};
