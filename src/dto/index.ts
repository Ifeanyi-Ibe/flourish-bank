export interface Account {
  accountName: string;
  accountNumber: string;
  dob: string;
  type:
    | "Savings Account"
    | "Current Account"
    | "Salary Account"
    | "Domiciliary Account"
    | "Diaspora Account"
    | "Fixed Deposit Account";
  initialBalance: number;
}

/**
 * @openapi
 * components:
 *  schemas:
 *    AccountRequest:
 *      type: object
 *      required:
 *         - accountName
 *         - type
 *         - dob
 *         - initialBalance
 *      properties:
 *          accountName:
 *            type: string
 *            decription: Full name of the account holder
 *          type:
 *            type: string
 *            description: The account type, which could be "Savings Account", "Domiciliary Account", "Fixed Deposit Account", etc.
 *          dob:
 *            type: string
 *            description: date of birth of the account holder in mm/dd/yyyy format
 *          initialBalance:
 *            type: string
 *            description: The starting balance as at the time of creating the account
 *      example:
 *         accountName: Jane Doe
 *         type: Fixed Deposit Account
 *         dob: 08/11/2003
 *         initialBalance: 450
 */
export interface AccountRequest {
  accountName: string;
  dob: string;
  type:
    | "Savings Account"
    | "Current Account"
    | "Salary Account"
    | "Domiciliary Account"
    | "Diaspora Account"
    | "Fixed Deposit Account";
  initialBalance: number;
}

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
 *          message:
 *              type: string
 *              description: This indicates whether the request executed successfully.
 *          account:
 *              type: object
 *              properties:
 *                accountName:
 *                  type: string
 *                  decription: Full name of the account holder
 *                accountNumber:
 *                  type: string
 *                  description: The account type, which could be "Savings Account", "Domiciliary Account", "Fixed Deposit Account", etc.
 *                type:
 *                    type: string
 *                    description: The account type, which could be "Savings Account", "Domiciliary Account", "Fixed Deposit Account", etc.
 *                initialBalance:
 *                   type: string
 *                   description: The starting balance as at the time of creating the account
 *      example:
 *          success: true
 *          message: Account created successfully
 *          account:
 *              accountName: Jane Doe
 *              accountNumber: 1021354321
 *              type: Fixed Deposit Account
 *              InitialBalance: 450
 */
export interface AccountResponse {
  accountName: string;
  type: string;
  initialBalance: number;
  accountNumber: string;
}

/**
 * @openapi
 * components:
 *  schemas:
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
 *      example:
 *          success: true
 *          message: Account created successfully
 *          account:
 *              accountName: Jane Doe
 *              accountNumber: 1021354321
 *              type: Account details retrieved successfully
 *              InitialBalance: 450
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
