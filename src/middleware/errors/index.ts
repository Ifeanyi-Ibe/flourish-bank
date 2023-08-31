import { NextFunction, Response, Request } from "express";
import HttpStatusCode from "../../types/statusCodes";
import { BadRequestError, NotFoundError } from "../../errors";
import { ValidationError } from "joi";

export default function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof BadRequestError) {
    res.status(err.statusCode).json({ success: false, message: err.message });
  } else if (err instanceof ValidationError) {
    res
      .status(HttpStatusCode.BAD_REQUEST)
      .json({ success: false, message: err.message });
  } else if (err instanceof NotFoundError) {
    res
      .status(HttpStatusCode.NOT_FOUND)
      .json({ success: false, message: err.message });
  } else {
    res.status(HttpStatusCode.INTERNAL_SERVER).json({
      success: false,
      message: "Operation failed due to server error.",
    });
  }
}
