"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerUi = require("swagger-ui-express");
const package_json_1 = require("../../package.json");
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Bank Account Management API",
            version: package_json_1.version,
        },
    },
    apis: ["./src/controllers/*.ts", "./src/routes/*.ts", "./src/model/*.ts"],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
function swaggerDocs(app) {
    app.use("/accounts/doc", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.use("docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
}
exports.default = swaggerDocs;
//# sourceMappingURL=swagger.js.map