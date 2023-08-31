"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const statusCodes_1 = __importDefault(require("../types/statusCodes"));
class CustomApiError extends Error {
    statusCode;
    constructor(message, statusCode = statusCodes_1.default.INTERNAL_SERVER) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.statusCode = statusCode;
        Error.captureStackTrace(this);
    }
}
exports.default = CustomApiError;
//# sourceMappingURL=custom-api.js.map