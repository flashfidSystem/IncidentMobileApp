const config = require("../../config");
const sql = require("mssql");

const addWarning = async (params) => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  const {
    Vehicle_Make,
    Vehicle_Color,
    Vehicle_No,
    Location,
    Start_Warning,
    End_Warning,
    Warning_Details,
  } = params;
  let result = await pool
    .request()
    .input("Vehicle_Make", sql.VarChar, Vehicle_Make)
    .input("Vehicle_Color", sql.VarChar, Vehicle_Color)
    .input("Vehicle_No", sql.VarChar, Vehicle_No)
    .input("Location", sql.VarChar, Location)
    .input("Start_Warning", sql.Date, Start_Warning)
    .input("End_Warning", sql.Date, End_Warning)
    .input("Warning_Details", sql.VarChar, Warning_Details)
    .execute("spWarningAdd");
  return result.recordsets;
};
const getWarnings = async (params) => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  let result = await pool.request().execute("spWarningList");
  return result.recordsets;
};
const getWarningById = async (params) => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  let result = await pool
    .request()
    .input("IID", sql.VarChar, params)
    .execute("spWarningList");
  return result.recordsets;
};
const changeWarning = async (params) => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  const {
    Vehicle_Make,
    Vehicle_Color,
    Vehicle_No,
    Location,
    Start_Warning,
    End_Warning,
    Warning_Details,
    ModifiedBy,
  } = params;
  let result = await pool
    .request()
    .input("Warning_Id", sql.VarChar, Vehicle_Make)
    .input("Vehicle_Make", sql.VarChar, Vehicle_Make)
    .input("Vehicle_Color", sql.VarChar, Vehicle_Color)
    .input("Vehicle_No", sql.VarChar, Vehicle_No)
    .input("Location", sql.VarChar, Location)
    .input("Start_Warning", sql.Date, Start_Warning)
    .input("End_Warning", sql.Date, End_Warning)
    .input("Warning_Details", sql.VarChar, Warning_Details)
    .input("ModifiedBy", sql.VarChar, ModifiedBy)
    .execute("spWarningUpdate");
  return result.recordsets;
};
const removeWarning = async (params) => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  const { Warning_Id } = params;
  let result = await pool
    .request()
    .input("Warning_Id", sql.VarChar, Warning_Id)
    .execute("spWarningDelete");
  return result.recordsets;
};
const carRemoveWarning = async (params) => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  const { Warning_Id } = params;
  let result = await pool
    .request()
    .input("Warning_Id", sql.VarChar, Warning_Id)
    .execute("spWarningCarRemoved");
  return result.recordsets;
};
module.exports = {
  addWarning,
  changeWarning,
  removeWarning,
  carRemoveWarning,
  getWarningById,
  getWarnings,
};
