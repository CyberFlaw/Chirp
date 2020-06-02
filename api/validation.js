const Joi = require("joi");

const registerValidation = (body) => {
  const schema = {
    email: Joi.string().min(6).email().required(),
    user: Joi.string().min(6).alphanum().max(50).required(),
    pass: Joi.string().regex(/^[a-zA-Z0-9]{8,1024}$/),
  };

  return Joi.validate(body, schema);
};

module.exports.registerValidation = registerValidation;
