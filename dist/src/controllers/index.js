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
exports.getByAccountNumber = exports.getAccounts = exports.createAccount = void 0;
const accountService = __importStar(require("../service"));
async function createAccount(req, res, next) {
    try {
        const request = req.body;
        const response = await accountService.createAccount(request);
        return res.status(201).json({
            success: true,
            message: "Account created successfully",
            account: response,
        });
    }
    catch (error) {
        return next(error);
    }
}
exports.createAccount = createAccount;
async function getAccounts(req, res, next) {
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
    }
    catch (error) {
        return next(error);
    }
}
exports.getAccounts = getAccounts;
async function getByAccountNumber(req, res, next) {
    const { accountNumber } = req.params;
    try {
        const retrievedAccount = await accountService.getByAccountNumber(accountNumber);
        return res.status(200).json({
            success: true,
            message: "Account retrieved successfully",
            account: retrievedAccount,
        });
    }
    catch (error) {
        return next(error);
    }
}
exports.getByAccountNumber = getByAccountNumber;
//# sourceMappingURL=index.js.map