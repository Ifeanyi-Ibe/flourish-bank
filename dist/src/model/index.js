"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
require("dotenv").config();
const AccountSchema = new mongoose.Schema({
    accountName: {
        type: String,
        trim: true,
        required: [true, "Account Name is required"],
        minlength: 5,
        maxlength: 100,
    },
    accountNumber: {
        type: String,
        trim: true,
        required: [true, "Account Number is required"],
        minlength: [
            10,
            "Invalid account number. Account Number must be exactly 10 digits",
        ],
        maxlength: [
            10,
            "Invalid account number. Account Number must be exactly 10 digits",
        ],
    },
    dob: {
        type: String,
        trim: true,
        required: [true, "Date of birth is required."],
        minlength: 10,
        maxlength: 10,
    },
    type: {
        type: String,
        enum: [
            "Savings Account",
            "Current Account",
            "Salary Account",
            "Domiciliary Account",
            "Diaspora Account",
            "Fixed Deposit Account",
        ],
        default: "Savings Account",
    },
    initialBalance: {
        type: Number,
        required: [true, "Initial balance is required"],
        min: 0,
    },
});
exports.default = mongoose.model("Account", AccountSchema);
//# sourceMappingURL=index.js.map