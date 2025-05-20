const UnitModel = require("../models/unit");
const internalError = require("../utils/internalError");

exports.getAllUnit = async (req, res) => {
  try {
    const unit = await UnitModel.find().exec();
    res.status(200).json(unit);
  } catch (error) {
    internalError(res, error);
  }
};

exports.createUnit = async (req, res) => {
  try {
    const unit = await UnitModel.create(req.body);
    res.status(201).json(unit);
  } catch (error) {
    internalError(res, error);
  }
};

exports.getUnitById = async (req, res) => {
  try {
    const unit = await UnitModel.findById(req.params.id).exec();
    if (!unit) {
      return res.status(404).json({ message: "Unit not found" });
    }
    res.status(200).json(unit);
  } catch (error) {
    internalError(res, error);
  }
};

exports.updateUnitById = async (req, res) => {
  try {
    const unit = await UnitModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).exec();
    res.status(200).json(unit);
  } catch (error) {
    internalError(res, error);
  }
};

exports.deleteUnitById = async (req, res) => {
  try {
    const unit = await UnitModel.findByIdAndDelete(req.params.id).exec();
    res.status(200).json(unit);
  } catch (error) {
    internalError(res, error);
  }
};
