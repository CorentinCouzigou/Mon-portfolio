const Joi = require('joi');
export const schema = Joi.object({
    nom: Joi.string().pattern(new RegExp('^[^(<(\w)>(.*)</(\w)>)]+$')).min(1).max(30).required().required(),
    email: Joi.string().pattern(new RegExp('^[A-Z0-9a-z._%+-]+@[a-z0-9.-]+\\.[a-z]{1,4}}*$')).email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'fr'] } }).required(),
    message: Joi.string().pattern(new RegExp('^[A-Za-zéè ,;!:-?@^.\\n]*$')).min(1).max(200).required(),
});
