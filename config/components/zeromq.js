const joi = require('joi');

let envVarsSchema = joi.object({
  ZEROMQ_URI: joi.string()
    .uri({ scheme: 'tcp' })
    .required()
}).unknown().required();

let {
  error,
  value: envVars
} = joi.validate(process.env, envVarsSchema);

if (error)
  throw new Error(`Config validation error: ${error.message}`);

let config = {
  zeromq: {
    uri: envVars.ZEROMQ_URI
  }
}

module.exports = config;
