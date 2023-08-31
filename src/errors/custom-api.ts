import HttpStatusCode from "../types/statusCodes";

export default class CustomApiError extends Error {
  public readonly statusCode: HttpStatusCode;

  constructor(message: string, statusCode = HttpStatusCode.INTERNAL_SERVER) {
    super(<string>message);
    Object.setPrototypeOf(this, new.target.prototype);

    this.statusCode = statusCode;

    Error.captureStackTrace(this);
  }
}
