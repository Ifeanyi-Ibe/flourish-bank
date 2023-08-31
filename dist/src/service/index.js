"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByAccountNumber = exports.getAccounts = exports.createAccount = void 0;
const accountNumberGenerator_1 = __importDefault(require("../utils/accountNumberGenerator"));
const joiValidator_1 = __importDefault(require("../utils/joiValidator"));
const validateAccountNumber_1 = __importDefault(require("../utils/validateAccountNumber"));
const errors_1 = require("../errors");
const model_1 = __importDefault(require("../model"));
const lodash_1 = __importDefault(require("lodash"));
async function createAccount(request) {
    const randomAccountNumber = (0, accountNumberGenerator_1.default)();
    try {
        await (0, joiValidator_1.default)(request);
        const { accountName, dob, type, initialBalance } = request;
        const newAccount = await model_1.default.create({
            accountName,
            accountNumber: randomAccountNumber.toString(),
            dob,
            type,
            initialBalance,
        });
        const response = lodash_1.default.pick(newAccount, [
            "accountName",
            "accountNumber",
            "type",
            "initialBalance",
        ]);
        return response;
    }
    catch (error) {
        throw error;
    }
}
exports.createAccount = createAccount;
async function getAccounts() {
    try {
        const accounts = await model_1.default.find({}).select("accountName accountNumber type initialBalance");
        return accounts;
    }
    catch (error) {
        throw error;
    }
}
exports.getAccounts = getAccounts;
async function getByAccountNumber(accountNumber) {
    const isAccountNumberValid = (0, validateAccountNumber_1.default)(accountNumber);
    if (!isAccountNumberValid)
        throw new errors_1.BadRequestError("Invalid account error. Please check account number and try again");
    try {
        const retrievedAccount = await model_1.default.find({ accountNumber }).select("accountName accountNumber type initialBalance");
        if (retrievedAccount.length < 1) {
            throw new errors_1.NotFoundError(`No record found for account number: ${accountNumber}`);
        }
        return retrievedAccount;
    }
    catch (error) {
        throw error;
    }
}
exports.getByAccountNumber = getByAccountNumber;
//# sourceMappingURL=index.js.map