const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dob: { type: String, required: true }, // Masked in database
  mobile: { type: String, required: true }, // Masked in database
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);