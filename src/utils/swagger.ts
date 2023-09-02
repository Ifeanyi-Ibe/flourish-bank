import { Response, Request, Express } from "express";
import swaggerJsdoc from "swagger-jsdoc";
const swaggerUi = require("swagger-ui-express");
import { version } from "../../package.json";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Flourish Bank Account Management API",
      description: `This documentation provides details about the Flourish Bank Account Management API. 
        Sample requests and responses for different scenarios for each endpoint are provided to enable easy comprehension and testing of the API.`,
      version: "1.0.0",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Flourish Bank",
        email: "phenomenonif@gmail.com",
      },
    },
  },
  apis: [
    "./src/controllers/*.ts",
    "./src/routes/*.ts",
    "./src/model/*.ts",
    "./src/dto/*.ts",
  ],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express) {
  app.use("/accounts/doc", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.use("docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
}

export default swaggerDocs;
