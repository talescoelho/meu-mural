const Joi = require('joi');
var validator = require("email-validator");

const schemaUser = Joi.object({
  name: Joi.string()
    .min(2)
    .max(30)
    .required(),
  password: Joi.string()
    .min(6)
    .max(20)
    .required(),
  email: Joi.string().email(),
  image: Joi.allow(''),
})

const schemaLogin = Joi.object({
  password: Joi.string()
    .min(6)
    .max(20)
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
})

const schemaPost = Joi.object({
  content: Joi.string()
    .min(2)
    .max(255)
    .required(),
})

module.exports = {
  schemaUser,
  schemaLogin,
  schemaPost,
}