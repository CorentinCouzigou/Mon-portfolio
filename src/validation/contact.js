const Joi = require('joi');
export const schema = Joi.object({
    nom: Joi.string().pattern(new RegExp('^[A-Za-zéèêÏîïÉç -.]*$')).min(1).max(30).required().required(),
    email: Joi.string().pattern(new RegExp('^[A-Z0-9a-z._%+-]+@[a-z0-9.-]+\\.[a-z]{1,4}}*$')).email({ tlds: { allow: false } }).required(),
    message: Joi.string().pattern(new RegExp('^[A-Za-zéèÏïîêÉç0-9 ,;!:-?@.\\n]*$')).min(1).max(200).required(),
});
