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
 *          accountName:
 *            type: string
 *            default: Jane Doe
 *          accountNumber:
 *            type: string
 *            default: 0987545321
 *          type:
 *            type: string
 *            default: Savings Account
 *          initialBalance:
 *            type: string
 *            default: 0.00
 */
export interface AccountResponse {
  accountName: string;
  type: string;
  initialBalance: number;
  accountNumber: string;
}
