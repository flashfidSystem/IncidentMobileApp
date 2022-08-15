const express = require("express");
const warningController = require("../controllers/warningController");
const router = express.Router();

const { addWarning, changeWarning, removeWarning, carRemoveWarning } =
  warningController;

router.post("/warnings", addWarning);
router.put("/warnings", changeWarning);
router.delete("/warnings/:Warning_Id", removeWarning);

router.delete("/warnings/car-remove", carRemoveWarning);

module.exports = {
  routes: router,
};
