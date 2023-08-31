import HttpStatusCode from "../types/statusCodes";
import { CustomAPIError } from "../errors";

export default class NotFoundError extends CustomAPIError {
  public readonly statusCode: HttpStatusCode;

  constructor(message: string) {
    super(message);
    this.statusCode = HttpStatusCode.NOT_FOUND;
  }
}

module.exports = NotFoundError;
