"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = exports.NotFoundError = exports.CustomAPIError = void 0;
var custom_api_1 = require("./custom-api");
Object.defineProperty(exports, "CustomAPIError", { enumerable: true, get: function () { return __importDefault(custom_api_1).default; } });
var not_found_1 = require("./not-found");
Object.defineProperty(exports, "NotFoundError", { enumerable: true, get: function () { return __importDefault(not_found_1).default; } });
var bad_request_1 = require("./bad-request");
Object.defineProperty(exports, "BadRequestError", { enumerable: true, get: function () { return __importDefault(bad_request_1).default; } });
//# sourceMappingURL=index.js.map