"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateAccountNumber() {
    const lowerAccountNumberRange = 0;
    const upperAccountNumberRange = 9999999999;
    return Math.floor(lowerAccountNumberRange + Math.random() * upperAccountNumberRange);
}
exports.default = generateAccountNumber;
//# sourceMappingURL=accountNumberGenerator.js.map