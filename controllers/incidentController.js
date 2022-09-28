const incidentData = require("../model/incident/incident.js");

const vehicleMake = async (req, res, next) => {
  try {
    const categoryCode = req.body.categoryCode;
    const results = await incidentData.vehicleMake(categoryCode);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
  }
};
const vehicleColor = async (req, res, next) => {
  try {
    const categoryCode = req.body.categoryCode;
    const results = await incidentData.vehicleColor(categoryCode);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
  }
};
const getIncidentById = async (req, res, next) => {
  try {
    const IID = req.params.IID;
    const results = await incidentData.getIncidentById(IID);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
  }
};
const getPaymentPaid = async (req, res, next) => {
  try {
    const Role = req.body.Role;
    const results = await incidentData.getPaymentPaid(Role);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
  }
};
const getPaymentUnpaid = async (req, res, next) => {
  try {
    const Role = req.body.Role;
    const results = await incidentData.getPaymentUnpaid(Role);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
  }
};
const getIncidentCount = async (req, res, next) => {
  try {
    const results = await incidentData.getIncidentCount();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
  }
};
const getNotification = async (req, res, next) => {
  try {
    const results = await incidentData.getNotification();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
  }
};
const getSetupOffence = async (req, res, next) => {
  try {
    const results = await incidentData.getSetupOffence();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
  }
};

const addIncident = async (req, res, next) => {
  try {
    const params = { ...req.body };
    const results = await incidentData.addIncident(params);
    res.status(201).json(results);
    console.log(results);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
    console.log(error);
  }
};
const addSetupOffence = async (req, res, next) => {
  try {
    const params = { ...req.body };
    console.log({ parata: params });
    const results = await incidentData.addSetupOffence(params);
    res.status(201).json(results);
    console.log(results);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
    console.log(error);
  }
};

const addAttachment = async (req, res, next) => {
  try {
    const params = { ...req.body };
    const results = await incidentData.addAttachment(params);
    res.status(201).json(results);
    console.log(results);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
    console.log(error);
  }
};

const addDamage = async (req, res, next) => {
  try {
    const params = { ...req.body };
    const results = await incidentData.addDamage(params);
    res.status(201).json(results);
    console.log(results);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
    console.log(error);
  }
};

const addOffence = async (req, res, next) => {
  try {
    const params = { ...req.body };
    const results = await incidentData.addOffence(params);
    res.status(201).json(results);
    console.log(results);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
    console.log(error);
  }
};
const addPerson = async (req, res, next) => {
  try {
    const params = { ...req.body };
    console.log(params);
    const results = await incidentData.addPerson(params);
    res.status(201).json(results);
    console.log(results);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
    console.log(error);
  }
};

const changeIncident = async (req, res, next) => {
  try {
    const params = { ...req.body };
    console.log(params);
    const results = await incidentData.changeIncident(params);
    res.status(200).json(results);
    console.log(results);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
    console.log(error);
  }
};
const changeOffence = async (req, res, next) => {
  try {
    const params = { ...req.body };
    console.log(params);
    const results = await incidentData.changeOffence(params);
    res.status(200).json(results);
    console.log(results);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
    console.log(error);
  }
};
const changeDamage = async (req, res, next) => {
  try {
    const params = { ...req.body };
    const results = await incidentData.changeDamage(params);
    res.status(200).json(results);
    console.log(results);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
    console.log(error);
  }
};
const changePerson = async (req, res, next) => {
  try {
    const params = { ...req.body };
    const results = await incidentData.changePerson(params);
    res.status(200).json(results);
    console.log(results);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
    console.log(error);
  }
};
const changeAttachment = async (req, res, next) => {
  try {
    const params = { ...req.body };
    const results = await incidentData.changeAttachment(params);
    res.status(200).json(results);
    console.log(results);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
    console.log(error);
  }
};
const removeIncident = async (req, res, next) => {
  try {
    const params = { ...req.params };
    const results = await incidentData.removeIncident(params);
    res.status(200).json(results);
    console.log(results);
  } catch (error) {
    if (error.message === "Incident has not been saved Please try again") {
      res.status(404).json({ status: "Failed", message: error.message });
      console.error(error);
    } else {
      res.status(500).json({ status: "Failed", message: error.message });
      console.error(error);
    }
  }
};

module.exports = {
  getIncidentById,
  addIncident,
  addDamage,
  addAttachment,
  addOffence,
  addPerson,
  changeIncident,
  changeAttachment,
  changeDamage,
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
