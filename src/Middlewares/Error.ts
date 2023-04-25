import { NextFunction, Request, Response } from 'express';
import Handler from '../Utils/Handler';

class Errors {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { status, message } = error as Handler;
    res.status(status || 500).json({ message });
    next();
  }
}

export default Errors;
