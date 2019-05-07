const joi = require('joi');

let envVarsSchema = joi.object({
  NODE_ENV: joi.string().allow(['development', 'production', 'staging', 'test']).required()
}).unknown().required();

let { error, value: envVars } = joi.validate(process.env, envVarsSchema);

if (error)
  throw new Error(`Config validation error: ${error.message}`);

let config = {
  env: envVars.NODE_ENV
}

module.exports = config;
