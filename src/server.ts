import app from "./app";
import startDatabase from "./db";
import swaggerDocs from "./utils/swagger";

const port = process.env.PORT ? parseInt(process.env.PORT) : 5000;

startDatabase();

app.listen(port, function () {
  console.log(`Express Server initiated listening on port ${port}`);
});

swaggerDocs(app);

process.on("SIGTERM", function () {
  console.log(`SIGTERM signal received: closing HTTP server.`);
  process.exit();
});

process.on("SIGINT", function () {
  console.log(`SIGINT signal received: closing HTTP server.`);
  process.exit();
});
