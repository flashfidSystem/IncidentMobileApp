const warningData = require("../model/incident/warning");

const addWarning = async (req, res, next) => {
  try {
    const params = { ...req.body };
    const results = await warningData.addWarning(params);
    res.status(201).json(results);
    console.log(results);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
    console.log(error);
  }
};

const changeWarning = async (req, res, next) => {
  try {
    const params = { ...req.body };
    const results = await warningData.changeWarning(params);
    res.status(201).json(results);
    console.log(results);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
    console.log(error);
  }
};

const removeWarning = async (req, res, next) => {
  try {
    const params = { ...req.params };
    console.log(params);
    const results = await warningData.removeWarning(params);
    res.status(201).json(results);
    console.log(results);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
    console.log(error);
  }
};

const carRemoveWarning = async (req, res, next) => {
  try {
    const params = { ...req.body };
    console.log(params);
    const results = await warningData.carRemoveWarning(params);
    res.status(201).json(results);
    console.log(results);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: error.message });
    console.log(error);
  }
};
module.exports = {
  addWarning,
  changeWarning,
  removeWarning,
  carRemoveWarning,
};
