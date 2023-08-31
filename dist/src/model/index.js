"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
require("dotenv").config();
/**
 * @openapi
 * components:
 *  schemas:
 *    Account:
 *      type: object
 *      required:
 *        - accountName
 *        - dob
 *        - type
 *        - initialBalance
 *      properties:
 *          accountName:
 *            type: string
 *            default: Jane Doe
 *          dob:
 *            type: string
 *            default: mm/dd/yyyy
 *          type:
 *            type: string
 *            default: Savings Account
 *          initialBalance:
 *            type: string
 *            default: 0.00
 *    AccountResponse:
 *      type: object
 *      properties:
 *          success:
 *            type: boolean
 *            default: true
 *          message:
 *            type: string
 *            default: "Account created successfully."
 *          account:
 *            type: object
 *            properties:
 *              accountName:
 *                type: string
 *                default: Jane Doe
 *              accountNumber:
 *                type: string
 *                default: 0987545321
 *              type:
 *                type: string
 *                default: Savings Account
 *              initialBalance:
 *                type: string
 *                default: 0.00
 */
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