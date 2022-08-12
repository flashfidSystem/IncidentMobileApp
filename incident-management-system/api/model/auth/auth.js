const config = require("../../config");

const sql = require("mssql");

const userLogin = async (params) => {
  try {
    const conn = sql.connect(config.sql);
    let pool = await conn;
    let { UserID, Password } = params;
    let result = await pool
      .request()
      .input("UserID", sql.VarChar, UserID)
      .input("Password", sql.VarChar, Password)
      .execute("spUserLogin");
    return result.recordsets;
  } catch (error) {
    return error.message;
  }
};

const userGetById = async (params) => {
  try {
    const conn = sql.connect(config.sql);
    let pool = await conn;
    let { UserID } = params;
    let result = await pool
      .request()
      .input("mUserID", sql.VarChar, UserID)
      .execute("spUsersGet");
    return result.recordsets;
  } catch (error) {
    return error.message;
  }
};

const userReg = async (params) => {
  try {
    const conn = sql.connect(config.sql);
    let pool = await conn;
    let { UserID, Fullname, Email, Password, CreatedBy } = params;
    let result = await pool
      .request()
      .input("UserID", sql.VarChar, UserID)
      .input("Fullname", sql.VarChar, Fullname)
      .input("Email", sql.VarChar, Email)
      .input("Password", sql.VarChar, Password)
      .input("CreatedBy", sql.VarChar, CreatedBy)
      .execute("spUserReg");
    return result.recordsets;
  } catch (error) {
    return error.message;
  }
};

//Update user details
const userUpdate = async (params) => {
  try {
    const conn = sql.connect(config.sql);
    let pool = await conn;
    let { UserID, Fullname, Email, gender } = params;
    let result = await pool
      .request()
      .input("UserID", sql.VarChar, UserID)
      .input("Fullname", sql.VarChar, Fullname)
      .input("Email", sql.VarChar, Email)
      .input("gender", sql.VarChar, gender)
      .execute("spuserUpdate");
    return result.recordsets;
  } catch (error) {
    return error.message;
  }
};

//Update user password only
const userPasswordUpdate = async (params) => {
  try {
    const conn = sql.connect(config.sql);
    let pool = await conn;
    let { UserID, Password, NewPassword } = params;
    let result = await pool
      .request()
      .input("UserID", sql.VarChar, UserID)
      .input("Password", sql.VarChar, Password)
      .input("NewPassword", sql.VarChar, NewPassword)
      .execute("spChangePasswordUpdate");
    return result.recordsets;
  } catch (error) {
    return error.message;
  }
};

//Update user password only
const userProfileImageUpdate = async (params) => {
  try {
    const conn = sql.connect(config.sql);
    let pool = await conn;
    let { UserID, Photo, contentType } = params;

    let result = await pool
      .request()
      .input("UserID", sql.VarChar, UserID)
      .input("Photo", sql.VarChar, Photo)
      .input("contentType", sql.VarChar, contentType)
      .execute("spChangePhotoUpdate");
    return result.recordsets;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  userLogin,
  userGetById,
  userReg,
  userUpdate,
  userPasswordUpdate,
  userProfileImageUpdate,
};
