const joi = require('joi');

let envVarsSchema = joi.object({
  PORT: joi.number()
    .required()
}).unknown().required();

let {
  error,
  value: envVars
} = joi.validate(process.env, envVarsSchema);

if (error)
  throw new Error(`Config validation error: ${error.message}`);

let config = {
  server: {
    port: envVars.PORT
  }
}

module.exports = config;
