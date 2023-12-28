// db.js
const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    const connectionString = process.env.MONGODB_URI;
    await mongoose.connect(connectionString)
  } catch (error) {
    process.exit(1); 
  }
};

module.exports = connectToDatabase;
