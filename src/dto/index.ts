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

export interface AccountResponse {
  accountName: string;
  type: string;
  initialBalance: number;
  accountNumber: string;
}
