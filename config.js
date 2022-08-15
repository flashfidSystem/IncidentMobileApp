const dotenv = require("dotenv");
// const assert = require("assert"); 

dotenv.config();

const {
  PORT, 
  SQL_USER,
  SQL_PASSWORD,
  SQL_DATABASE,
  SQL_SERVER,
} = process.env;

const sql_encrypt = process.env.ENCRYPT === "true";
 
module.exports = {
  port: PORT, 
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
