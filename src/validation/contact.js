const Joi = require('joi');
export const schema = Joi.object({
    nom: Joi.string().min(1).max(30).required().required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'fr'] } }).required(),
    message: Joi.string().regex(/^[a-zA-Z0-9,. ]*$/).min(1).max(200).required(),
});
