const config = require("../../config");

const sql = require("mssql");

const vehicleMake = async (params) => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  let result = await pool
    .request()
    .input("categoryCode", sql.VarChar, params)
    .execute("spGenericList");
  return result.recordsets;
};
const vehicleColor = async (params) => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  let result = await pool
    .request()
    .input("categoryCode", sql.VarChar, params)
    .execute("spGenericList");
  return result.recordsets;
};
const getIncidentById = async (params) => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  let result = await pool
    .request()
    .input("IID", sql.VarChar, params)
    .execute("spIncidentIDGet");
  return result.recordsets;
};
const getPaymentPaid = async (params) => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  let result = await pool
    .request()
    .input("Role", sql.VarChar, params)
    .execute("spPaidList");
  return result.recordsets;
};
const getPaymentUnpaid = async (params) => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  let result = await pool
    .request()
    .input("Role", sql.VarChar, params)
    .execute("spUnpaidList");
  return result.recordsets;
};
const getIncidentCount = async () => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  let result = await pool.request().execute("spIncidentNo");
  return result.recordsets;
};
const getNotification = async () => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  let result = await pool.request().execute("spIncidentNotification");
  return result.recordsets;
};
const getSetupOffence = async () => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  let result = await pool.request().execute("spOffenceTypeList2");
  return result.recordsets;
};

const addSetupOffence = async (params) => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  const { setupName, penalties, CreatedBy } = params;
  let result = await pool
    .request()
    .input("setupName", sql.VarChar, setupName)
    .input("penalties", sql.Decimal, penalties)
    .input("CreatedBy", sql.VarChar, CreatedBy)
    .execute("spSetUpOffenceAdd");
  return result.recordsets;
};

const addIncident = async (params) => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  const {
    Incidence_Type,
    Date_Time,
    Location,
    Investigating_Officer,
    Action_Taken,
    Investigation,
    Observation,
    Incidence_Remark,
    CreatedBy,
    Cause,
  } = params;
  let result = await pool
    .request()
    .input("Incidence_Type", sql.VarChar, Incidence_Type)
    .input("Date_Time", sql.DateTime, Date_Time)
    .input("Location", sql.VarChar, Location)
    .input("Investigating_Officer", sql.VarChar, Investigating_Officer)
    .input("Action_Taken", sql.VarChar, Action_Taken)
    .input("Investigation", sql.VarChar, Investigation)
    .input("Observation", sql.VarChar, Observation)
    .input("Incidence_Remark", sql.VarChar, Incidence_Remark)
    .input("CreatedBy", sql.VarChar, CreatedBy)
    .input("Cause", sql.VarChar, Cause)
    .execute("spIncidentAdd");
  return result.recordsets;
};

const addAttachment = async (params) => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  const { Attachment_Category, Name, ContentType, IID } = params;
  let result = await pool
    .request()
    .input("Attachment_Category", sql.VarChar, Attachment_Category)
    .input("Name", sql.VarChar, Name)
    .input("ContentType", sql.NVarChar, ContentType)
    .input("IID", sql.VarChar, IID)
    .execute("spAttachmentAdd");
  return result.recordsets;
};

const addDamage = async (params) => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  const { Damages_Category, Damages_Cost, Damages_Details, IID } = params;
  let result = await pool
    .request()
    .input("Damages_Category", sql.VarChar, Damages_Category)
    .input("Damages_Cost", sql.Decimal, Damages_Cost)
    .input("Damages_Details", sql.VarChar, Damages_Details)
    .input("IID", sql.VarChar, IID)
    .execute("spDamagesAdd");
  return result.recordsets;
};

const addOffence = async (params) => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  const { Offence_Type, Damages_Cost, Damages_Details, IID } = params;
  let result = await pool
    .request()
    .input("Offence_Type", sql.VarChar, Offence_Type)
    .input("Offence_Details", sql.VarChar, Offence_Details)
    .input("Offence_Cost", sql.Decimal, Offence_Cost)
    .input("IID", sql.VarChar, IID)
    .execute("spOffenceAdd");
  return result.recordsets;
};

const addPerson = async (params) => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  const {
    FullName,
    Gender,
    Religion,
    Phone_Number,
    Age,
    Role,
    Nationality,
    Occupation,
    State_Tribe,
    Matric_No,
    Dept_Faculty,
    Dept_Unit,
    Address,
    Description,
    IID,
    Vehicle_Make,
    Vehicle_Color,
    Vehicle_No,
  } = params;
  let result = await pool
    .request()
    .input("FullName", sql.VarChar, FullName)
    .input("Gender", sql.VarChar, Gender)
    .input("Religion", sql.VarChar, Religion)
    .input("Phone_Number", sql.VarChar, Phone_Number)
    .input("Age", sql.Int, Age)
    .input("Role", sql.VarChar, Role)
    .input("Nationality", sql.VarChar, Nationality)
    .input("Occupation", sql.VarChar, Occupation)
    .input("State_Tribe", sql.VarChar, State_Tribe)
    .input("Matric_No", sql.VarChar, Matric_No)
    .input("Dept_Faculty", sql.VarChar, Dept_Faculty)
    .input("Dept_Unit", sql.VarChar, Dept_Unit)
    .input("Address", sql.VarChar, Address)
    .input("Description", sql.VarChar, Description)
    .input("IID", sql.VarChar, IID)
    .input("Vehicle_Make", sql.VarChar, Vehicle_Make)
    .input("Vehicle_Color", sql.VarChar, Vehicle_Color)
    .input("Vehicle_No", sql.VarChar, Vehicle_No)
    .execute("sppersonAdd");
  return result.recordsets;
};

const changeIncident = async (params) => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  let {
    IID,
    Incidence_Type,
    Date_Time,
    Location,
    Investigating_Officer,
    Action_Taken,
    Investigation,
    Observation,
    Incidence_Remark,
    ModifiedBy,
    Cause,
  } = params;
  let result = await pool
    .request()
    .input("IID", sql.VarChar, IID)
    .input("Incidence_Type", sql.VarChar, Incidence_Type)
    .input("Date_Time", sql.DateTime, Date_Time)
    .input("Location", sql.VarChar, Location)
    .input("Investigating_Officer", sql.VarChar, Investigating_Officer)
    .input("Action_Taken", sql.VarChar, Action_Taken)
    .input("Investigation", sql.VarChar, Investigation)
    .input("Observation", sql.VarChar, Observation)
    .input("Incidence_Remark", sql.VarChar, Incidence_Remark)
    .input("ModifiedBy", sql.VarChar, ModifiedBy)
    .input("Cause", sql.VarChar, Cause)
    .execute("spIncidentUpdate");
  return result.recordsets;
};
const changeOffence = async (params) => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  let { Offence_Type, Offence_Details, Offence_Cost, IID } = params;
  let result = await pool
    .request()
    .input("Offence_Type", sql.VarChar, Offence_Type)
    .input("Offence_Details", sql.VarChar, Offence_Details)
    .input("Offence_Cost", sql.VarChar, Offence_Cost)
    .input("IID", sql.VarChar, IID)
    .execute("spOffenceUpdate");
  return result.recordsets;
};
const changeDamage = async (params) => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  let { Damages_Category, Damages_Cost, Damages_Details, IID } = params;
  let result = await pool
    .request()
    .input("Damages_Category", sql.VarChar, Damages_Category)
    .input("Damages_Cost", sql.VarChar, Damages_Cost)
    .input("Damages_Details", sql.VarChar, Damages_Details)
    .input("IID", sql.VarChar, IID)
    .execute("spDamagesUpdate");
  return result.recordsets;
};
const changePerson = async (params) => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  const {
    FullName,
    Gender,
    Religion,
    Phone_Number,
    Age,
    Role,
    Nationality,
    Occupation,
    State_Tribe,
    Matric_No,
    Dept_Faculty,
    Dept_Unit,
    Address,
    Description,
    IID,
    Vehicle_Make,
    Vehicle_Color,
    Vehicle_No,
  } = params;
  let result = await pool
    .request()
    .input("FullName", sql.VarChar, FullName)
    .input("Gender", sql.VarChar, Gender)
    .input("Religion", sql.VarChar, Religion)
    .input("Phone_Number", sql.VarChar, Phone_Number)
    .input("Age", sql.Int, Age)
    .input("Role", sql.VarChar, Role)
    .input("Nationality", sql.VarChar, Nationality)
    .input("Occupation", sql.VarChar, Occupation)
    .input("State_Tribe", sql.VarChar, State_Tribe)
    .input("Matric_No", sql.VarChar, Matric_No)
    .input("Dept_Faculty", sql.VarChar, Dept_Faculty)
    .input("Dept_Unit", sql.VarChar, Dept_Unit)
    .input("Address", sql.VarChar, Address)
    .input("Description", sql.VarChar, Description)
    .input("IID", sql.VarChar, IID)
    .input("Vehicle_Make", sql.VarChar, Vehicle_Make)
    .input("Vehicle_Color", sql.VarChar, Vehicle_Color)
    .input("Vehicle_No", sql.VarChar, Vehicle_No)
    .execute("spPersonUpdate");
  return result.recordsets;
};
const changeAttachment = async (params) => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  let { Attachment_Category, Name, ContentType, IID } = params;
  let result = await pool
    .request()
    .input("Attachment_Category", sql.VarChar, Attachment_Category)
    .input("Name", sql.VarChar, Name)
    .input("ContentType", sql.VarChar, ContentType)
    .input("IID", sql.VarChar, IID)
    .execute("spAttachmentUpdate");
  return result.recordsets;
};

const removeIncident = async (params) => {
  const conn = sql.connect(config.sql);
  let pool = await conn;
  let { IID, ModifiedBy } = params;
  let result = await pool
    .request()
    .input("IID", sql.VarChar, IID)
    .input("ModifiedBy", sql.VarChar, ModifiedBy)
    .execute("spIncidentDelete");
  return result.recordsets;
};

module.exports = {
  getIncidentById,
  addIncident,
  addAttachment,
  addDamage,
  addOffence,
  addPerson,
  changeAttachment,
  changeDamage,
  changeIncident,
  changeOffence,
  changePerson,
  removeIncident,
  getIncidentCount,
  getNotification,
  getPaymentPaid,
  getPaymentUnpaid,
  vehicleColor,
  vehicleMake,
  addSetupOffence,
  getSetupOffence,
};
