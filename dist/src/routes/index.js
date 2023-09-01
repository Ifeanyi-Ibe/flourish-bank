"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accounts = __importStar(require("../controllers"));
const router = (0, express_1.Router)();
/**
 * @openapi
 * components:
 *  schemas:
 *    AccountResponse:
 *      type: object
 *      properties:
 *          success:
 *              type: string
 *              description: This indicates the outcome of the request.
 *              default: true
 *          message:
 *              type: string
 *              description: This indicates whether the request executed successfully.
 *              default: Account created successfully
 *          account:
 *              type: object
 *              properties:
 *                accountName:
 *                  type: string
 *                  decription: Full name of the account holder
 *                  default: Jane Doe
 *                accountNumber:
 *                  type: string
 *                  description: The account type, which could be "Savings Account", "Domiciliary Account", "Fixed Deposit Account", etc.
 *                  default: 1021354321
 *                type:
 *                    type: string
 *                    description: The account type, which could be "Savings Account", "Domiciliary Account", "Fixed Deposit Account", etc.
 *                    default: Salary Account
 *                initialBalance:
 *                   type: string
 *                   description: The starting balance as at the time of creating the account
 *                   default: 75000
 *    GetAccountResponse:
 *      type: object
 *      properties:
 *          success:
 *              type: string
 *              description: This indicates the outcome of the request.
 *              default: true
 *          message:
 *              type: string
 *              description: This indicates whether the request executed successfully.
 *              default: Account details retrieved successfully
 *          account:
 *              type: object
 *              properties:
 *                accountName:
 *                  type: string
 *                  decription: Full name of the account holder
 *                  default: Jane Doe
 *                accountNumber:
 *                  type: string
 *                  description: The account type, which could be "Savings Account", "Domiciliary Account", "Fixed Deposit Account", etc.
 *                  default: 1021354321
 *                type:
 *                    type: string
 *                    description: The account type, which could be "Savings Account", "Domiciliary Account", "Fixed Deposit Account", etc.
 *                    default: Salary Account
 *                initialBalance:
 *                   type: string
 *                   description: The starting balance as at the time of creating the account
 *                   default: 75000
 *    AccountRequest:
 *      type: object
 *      properties:
 *          accountName:
 *            type: string
 *            decription: Full name of the account holder
 *            default: Jane Doe
 *          type:
 *            type: string
 *            description: The account type, which could be "Savings Account", "Domiciliary Account", "Fixed Deposit Account", etc.
 *            default: Salary Account
 *          dob:
 *            type: string
 *            description: date of birth of the account holder in mm/dd/yyyy format
 *            default: 04/23/1997
 *          initialBalance:
 *            type: string
 *            description: The starting balance as at the time of creating the account
 *            default: 75000
 *    Account:
 *      type: object
 *      properties:
 *          accountName:
 *            type: string
 *            decription: Full name of the account holder
 *            default: Jane Doe
 *          accountNumber:
 *            description: Unique account number automatically generated when account is created successfully.
 *            type: string
 *            default: 0987545321
 *          dob:
 *            type: string
 *            default: mm/dd/yyyy
 *            description: date of birth of the account holder in mm/dd/yyyy format
 *          type:
 *            type: string
 *            default: Savings Account
 *            description: The account type, which could be "Savings Account", "Domiciliary Account", "Fixed Deposit Account", etc.
 *          initialBalance:
 *            type: string
 *            default: 0.00
 *            description: The starting balance as at the time of creating the account
 *    NotFound:
 *      type: object
 *      properties:
 *          success:
 *              type: boolean
 *              default: false
 *          message:
 *              type: string
 *              default: No record found for account number 5475200000
 *    BadRequest:
 *      type: object
 *      properties:
 *          success:
 *              type: boolean
 *              default: false
 *          message:
 *              type: string
 *              default: Invalid account error. Please check account number and try again
 *    ServerError:
 *      type: object
 *      properties:
 *          success:
 *              type: boolean
 *              default: false
 *          message:
 *              type: string
 *              default: Internal server error.
 */
/**
 * @openapi
 * '/api/accounts':
 *  post:
 *     tags:
 *     - AccountResponse
 *     summary: Create an account
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/AccountRequest'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AccountResponse'
 *      500:
 *        description: Internal Server Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ServerError'
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/BadRequest'
 */
router.post("/", accounts.createAccount);
/**
 * @openapi
 * '/api/accounts':
 *  get:
 *     tags:
 *      - AccountResponse
 *     summary: Get all the accounts in the database
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              $ref: '#/components/schemas/AccountResponse'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/NotFound'
 *      500:
 *        description: Internal Server Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ServerError'
 */
router.get("/", accounts.getAccounts);
/**
 * @openapi
 * '/api/accounts/{accountNumber}':
 *  get:
 *     summary: Retrieve account details using an account number
 *     tags:
 *     - AccountResponse
 *     parameters:
 *       - in: path
 *         name: accountNumber
 *         schema:
 *           type: string
 *         required: true
 *         description: Bank account number
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GetAccountResponse'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/NotFound'
 *      400:
 *        description: Bad request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/BadRequest'
 *      500:
 *        description: Internal Server Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ServerError'
 */
router.get("/:accountNumber", accounts.getByAccountNumber);
exports.default = router;
//# sourceMappingURL=index.js.map