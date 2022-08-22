const express = require("express");
const incidentController = require("../controllers/incidentController");
const router = express.Router();

const {
  getIncidentById,
  addIncident,
  addOffence,
  addDamage,
  addPerson,
  addAttachment,
  changeAttachment,
  changeIncident,
  changePerson,
  changeDamage,
  changeOffence,
  removeIncident,
  getIncidentCount,
  getNotification,
  getPaymentPaid,
  getPaymentUnpaid,
} = incidentController;

// router.get("/incidents", getIncident);
router.get("/incidents/:IID", getIncidentById);
router.post("/incidents/count", getIncidentCount);
router.post("/notifications", getNotification);

router.post("/Payments/paid", getPaymentPaid);
router.post("/Payments/unpaid", getPaymentUnpaid);

router.post("/incidents", addIncident);
router.post("/offences", addOffence);
router.post("/damages", addDamage);
router.post("/persons", addPerson);
router.post("/attachments", addAttachment);

router.put("/incidents", changeIncident);
router.put("/offences", changeOffence);
router.put("/damages", changeDamage);
router.put("/persons", changePerson);
router.put("/attachments", changeAttachment);

router.delete("/incidents/:IID/:ModifiedBy", removeIncident);
// router.put("/offences", changeOffence);
// router.put("/damages", changeDamage);
// router.put("/persons", changePerson);
// router.put("/attachments", changeAttachment);
module.exports = {
  routes: router,
};
