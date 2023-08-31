import { Response, Request, Express } from "express";
import swaggerJsdoc from "swagger-jsdoc";
const swaggerUi = require("swagger-ui-express");
import { version } from "../../package.json";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Bank Account Management API",
      version,
    },
  },
  apis: ["./src/controllers/*.ts", "./src/routes/*.ts", "./src/model/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express) {
  app.use("/api/accounts/doc", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.use("docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

}

export default swaggerDocs;
