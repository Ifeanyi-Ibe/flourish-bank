"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateAccountNumber(accountNumber) {
    const convertedAccountNumber = parseInt(accountNumber);
    return (typeof convertedAccountNumber === "number" && accountNumber.length === 10);
}
exports.default = validateAccountNumber;
//# sourceMappingURL=validateAccountNumber.js.map