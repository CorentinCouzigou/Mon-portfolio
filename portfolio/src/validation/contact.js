const Joi = require('joi');
const schema = Joi.object({
    name: Joi.string().alphanum().min(1).max(30).required().required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    text: Joi.string().alphanum.min(1).max(200).required(),
})
export default schema;