import HttpStatusCode from "../types/statusCodes";
import { CustomAPIError } from "../errors";

export default class BadRequestError extends CustomAPIError {
  public readonly statusCode: HttpStatusCode = HttpStatusCode.BAD_REQUEST;

  constructor(message: string) {
    super(message);
  }
}

module.exports = BadRequestError;
