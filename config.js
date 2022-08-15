const dotenv = require("dotenv");
const assert = require("assert"); 

dotenv.config();

const {
  PORT, 
  HOST_URL,
  SQL_USER,
  SQL_PASSWORD,
  SQL_DATABASE,
  SQL_SERVER,
} = process.env;

const sql_encrypt = process.env.ENCRYPT === "true";

assert(PORT, "PORT is required");
assert(HOST, "HOST is required");

module.exports = {
  port: PORT, 
  url: HOST_URL,
  sql: {
    server: SQL_SERVER,
    database: SQL_DATABASE,
    user: SQL_USER,
    password: SQL_PASSWORD,
    options: {
      encrypt: sql_encrypt,
      enableArithAbort: true,
    },
  },
};
