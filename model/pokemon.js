const mongoose = require("mongoose");
const { Schema } = mongoose;

const Pokemon = new Schema();

module.exports = mongoose.model("Pokemon", Pokemon);
