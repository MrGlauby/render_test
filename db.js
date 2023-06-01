const mongoose = require("mongoose");

const db = async (req, res) => {
  try {
    const URI = process.env.MONGODB_URI;
    mongoose.set("strictQuery", true);
    mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Could not connect to MongoDB");
  }
};
module.exports = db;
