"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const statusCodes_1 = __importDefault(require("../types/statusCodes"));
const errors_1 = require("../errors");
class BadRequestError extends errors_1.CustomAPIError {
    statusCode = statusCodes_1.default.BAD_REQUEST;
    constructor(message) {
        super(message);
    }
}
exports.default = BadRequestError;
module.exports = BadRequestError;
//# sourceMappingURL=bad-request.js.map