"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = __importDefault(require("./routes"));
const errors_1 = __importDefault(require("../src/middleware/errors"));
const app = express();
app.use(express.json());
app.use("/api/accounts", routes_1.default);
app.get("/", function (_req, res) {
    return res.send("This is the backend of Flourish Bank Account Management API");
});
process.on("unhandledRejection", (ex) => {
    throw ex;
});
process.on("unhandledException", (ex) => {
    throw ex;
});
app.use(errors_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map