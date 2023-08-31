"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
require("dotenv").config();
function startDatabase() {
    mongoose.set("strictQuery", false);
    mongoose
        .connect(process.env.DB_URL)
        .then(() => console.log("Connected to the database..."));
}
exports.default = startDatabase;
//# sourceMappingURL=index.js.map