const router = require("express").Router();

const {
  getAllUnit,
  createUnit,
  updateUnitById,
  deleteUnitById,
  getUnitById,
} = require("../controllers/unit");
const { create } = require("../models/unit");

router.route("/units").get(getAllUnit).post(createUnit);
router
  .route("/units/:id")
  .get(getUnitById)
  .patch(updateUnitById)
  .put(updateUnitById)
  .delete(deleteUnitById);

module.exports = router;
