import { Response, Request } from "express";

const express = require("express");

import routes from "./routes";
import errorHandler from "../src/middleware/errors";

const app = express();

app.use(express.json());

app.use("/api/accounts", routes);

app.get("/", function (_req: Request, res: Response) {
  return res.send(
    "This is the backend of Flourish Bank Account Management API"
  );
});

process.on("unhandledRejection", (ex) => {
  throw ex;
});

process.on("unhandledException", (ex) => {
  throw ex;
});

app.use(errorHandler);

export default app;
