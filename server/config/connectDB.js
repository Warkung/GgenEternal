const mongoose = require("mongoose");

const connectDB = async (URI) => {
  try {
    await mongoose.connect(URI);
    console.log(`Connected to ${mongoose.connection.name}}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
