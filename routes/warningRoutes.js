const express = require("express");
const warningController = require("../controllers/warningController");
const router = express.Router();

const {
  addWarning,
  changeWarning,
  removeWarning,
  carRemoveWarning,
  getWarningById,
  getWarnings,
} = warningController;

router.post("/warnings", addWarning);
router.put("/warnings", changeWarning);
router.delete("/warnings/:Warning_Id", removeWarning);
router.get("/warnings/:Warning_Id", getWarningById);
router.get("/warnings", getWarnings);

router.delete("/warnings/car-remove", carRemoveWarning);

module.exports = {
  routes: router,
};
