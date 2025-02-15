const { model } = require("mongoose");
const { positionSchema } = require("../schema/PositionSchema");

const PositionModel = model("PositionModel", positionSchema);

module.exports = PositionModel;
