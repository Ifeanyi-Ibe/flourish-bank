import { NextFunction, Response, Request } from "express";

import { AccountRequest } from "../dto";
import * as accountService from "../service";

export async function createAccount(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const request: AccountRequest = req.body;

    const response = await accountService.createAccount(request);

    return res.status(201).json({
      success: true,
      message: "Account created successfully",
      account: response,
    });
  } catch (error) {
    return next(error);
  }
}

export async function getAccounts(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const accounts = await accountService.getAccounts();

    if (accounts && accounts.length < 1) {
      return res
        .status(200)
        .json({ success: true, message: "No records found in the database" });
    }

    return res.status(200).json({
      success: true,
      message: "Accounts retrieved successfully",
      accounts,
    });
  } catch (error) {
    return next(error);
  }
}

export async function getByAccountNumber(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { accountNumber } = req.params;

  try {
    const retrievedAccount = await accountService.getByAccountNumber(
      accountNumber
    );

    return res.status(200).json({
      success: true,
      message: "Account retrieved successfully",
      account: retrievedAccount,
    });
  } catch (error) {
    return next(error);
  }
}
