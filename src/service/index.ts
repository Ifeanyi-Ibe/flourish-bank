import generateAccountNumber from "../utils/accountNumberGenerator";
import validateAccountRequest from "../utils/joiValidator";
import validateAccountNumber from "../utils/validateAccountNumber";
import { BadRequestError, NotFoundError } from "../errors";
import { AccountResponse, AccountRequest } from "../dto";
import Account from "../model";
import _ from "lodash";

export async function createAccount(request: AccountRequest) {
  const randomAccountNumber = generateAccountNumber();

  try {
    await validateAccountRequest(request);

    const { accountName, dob, type, initialBalance }: AccountRequest = request;

    const newAccount = await Account.create({
      accountName,
      accountNumber: randomAccountNumber.toString(),
      dob,
      type,
      initialBalance,
    });

    const response: AccountResponse = _.pick(newAccount, [
      "accountName",
      "accountNumber",
      "type",
      "initialBalance",
    ]);

    return response;
  } catch (error) {
    throw error;
  }
}

export async function getAccounts() {
  try {
    const accounts = await Account.find({}).select(
      "accountName accountNumber type initialBalance"
    );
    return accounts;
  } catch (error) {
    throw error;
  }
}

export async function getByAccountNumber(accountNumber: string) {
  const isAccountNumberValid = validateAccountNumber(accountNumber);

  if (!isAccountNumberValid)
    throw new BadRequestError(
      "Invalid account error. Please check account number and try again"
    );

  try {
    const retrievedAccount = await Account.find({ accountNumber }).select(
      "accountName accountNumber type initialBalance"
    );

    if (retrievedAccount.length < 1) {
      throw new NotFoundError(
        `No record found for account number: ${accountNumber}`
      );
    }

    return retrievedAccount;
  } catch (error) {
    throw error;
  }
}
