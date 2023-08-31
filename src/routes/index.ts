import { Router } from "express";

import * as accounts from "../controllers";

const router = Router();

/**
 * @openapi
 * '/api/accounts':
 *  post:
 *     tags:
 *     - Account
 *     summary: Create an account
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/Account'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AccountResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.post("/", accounts.createAccount);
router.get("/", accounts.getAccounts);
router.get("/:accountNumber", accounts.getByAccountNumber);

export default router;
