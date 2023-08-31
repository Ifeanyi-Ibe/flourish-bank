import HttpStatusCode from "../types/statusCodes";
import { CustomAPIError } from "../errors";

export default class NotFoundError extends CustomAPIError {
  public readonly statusCode: HttpStatusCode = HttpStatusCode.NOT_FOUND;

  constructor(message: string) {
    super(message);
  }
}

module.exports = NotFoundError;
