"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const accountRequestSchema = Joi.object({
    accountName: Joi.string()
        .min(5)
        .max(100)
        .required()
        .messages({
        "string.min": "Account name must be greater than 5 characters.",
        "any.required": "Account name is required.",
    })
        .label("Account Name"),
    dob: Joi.date()
        .required()
        .messages({ "date.valid": "Date must be in the format 'dd/mm/yyyy'." }),
    type: Joi.string()
        .valid("Savings Account", "Current Account", "Salary Account", "Domiciliary Account", "Diaspora Account", "Fixed Deposit Account")
        .required()
        .label("Account Type"),
    initialBalance: Joi.number().min(0).required().messages({
        "number.min": "Initial balance must be equal to, or greater than 0.",
    }),
});
async function validateCreateAccountRequest(accountRequest) {
    try {
        const validationResult = accountRequestSchema.validateAsync(accountRequest, { errors: { label: "key", wrap: { label: false } } });
        return validationResult;
    }
    catch (error) {
        throw error;
    }
}
exports.default = validateCreateAccountRequest;
//# sourceMappingURL=joiValidator.js.map