const mongoose = require("mongoose");
require("dotenv").config();

export default function startDatabase() {
  mongoose.set("strictQuery", false);

  mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("Connected to the database..."));
}
