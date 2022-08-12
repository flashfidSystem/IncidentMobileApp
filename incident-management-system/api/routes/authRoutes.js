const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

const {
  userLogin,
  userGetById,
  userReg,
  userUpdate,
  userPasswordUpdate,
  userProfileImageUpdate,
} = authController;

router.post("/users/login", userLogin);
router.get("/users/:UserID", userGetById);
router.post("/testing", (req, res) => {
  res.send("working....");
});
router.post("/users", userReg);
router.patch("/users", userUpdate);
router.patch("/users/profile-password", userPasswordUpdate);
router.patch("/users/profile-image", userProfileImageUpdate);

module.exports = {
  routes: router,
};
