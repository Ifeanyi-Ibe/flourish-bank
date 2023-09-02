import { Router } from "express";

import * as accounts from "../controllers";

const router = Router();

/**
 * @openapi
 * tags:
 *    name: Accounts
 *    description: API for managing bank accounts
 */

/**
 * @openapi
 * '/api/accounts':
 *  post:
 *     tags:
 *     - Accounts
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
 *      - Accounts
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
 *     - Accounts
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

export default router;
