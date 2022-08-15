const authData = require("../model/auth/auth");

// User login
const userLogin = async (req, res, next) => {
  try {
    const params = req.body;
    const results = await authData.userLogin(params);
    const Mystatus = results[0][0].Status;

    const InvalidUser = 0;
    const Success = 1;
    const AccountDisabled = 2;
    const MaxLogonReached = 3;
    const AccountExpiry = 4;

    if (Mystatus === Success) {
      res.status(200).send(results);
      console.log(Mystatus);
    } else {
      res.status(201).send(Mystatus);
      console.log(Mystatus);
    }
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error);
  }
};

// User login
const userGetById = async (req, res, next) => {
  try {
    const params = { ...req.params };
    const results = await authData.userGetById(params);
    res.status(200).send(results);
    console.log(results);
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error);
  }
};

// User Register
const userReg = async (req, res, next) => {
  try {
    const params = { ...req.body };
    console.log(params);
    const results = await authData.userReg(params);
    res.status(200).send(results);
    console.log(results);
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error);
  }
};

// User Update
const userUpdate = async (req, res, next) => {
  try {
    const params = { ...req.body };
    console.log(params);
    const results = await authData.userUpdate(params);
    res.status(200).send(results);
    console.log(results);
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error);
  }
};

//  Update User Password only
const userPasswordUpdate = async (req, res, next) => {
  try {
    const params = { ...req.body };
    console.log(params);
    const results = await authData.userPasswordUpdate(params);
    res.status(200).send(results);
    console.log(results);
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error);
  }
};

//  Update User Password only
const userProfileImageUpdate = async (req, res, next) => {
  try {
    const params = { ...req.body };
    const { UserID, Photo, contentType } = params;
    if (Photo && contentType && UserID) {
      const results = await authData.userProfileImageUpdate(params);
      res.status(200).send(results);
      console.log(results);
    } else {
      const msg = "All field required.";
      res.status(401).send(msg);
      console.log(msg);
    }
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error);
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
