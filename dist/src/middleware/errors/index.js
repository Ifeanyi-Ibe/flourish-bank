"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const statusCodes_1 = __importDefault(require("../../types/statusCodes"));
const errors_1 = require("../../errors");
const joi_1 = require("joi");
function errorHandler(err, req, res, next) {
    if (err instanceof errors_1.BadRequestError) {
        res.status(err.statusCode).json({ success: false, message: err.message });
    }
    else if (err instanceof joi_1.ValidationError) {
        res
            .status(statusCodes_1.default.BAD_REQUEST)
            .json({ success: false, message: err.message });
    }
    else if (err instanceof errors_1.NotFoundError) {
        res
            .status(statusCodes_1.default.NOT_FOUND)
            .json({ success: false, message: err.message });
    }
    else {
        res.status(statusCodes_1.default.INTERNAL_SERVER).json({
            success: false,
            message: "Operation failed due to server error.",
        });
    }
}
exports.default = errorHandler;
//# sourceMappingURL=index.js.map