const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dob: { type: String, required: true },
  gender: { type: String, enum: ['M', 'F'], required: true },
  sumAssured: { type: Number, required: true },
  modalPremium: { type: Number, required: true },
  premiumFrequency: { type: String, enum: ['Yearly', 'Half-Yearly', 'Monthly'], required: true },
  policyTerm: { type: Number, required: true },
  premiumPaymentTerm: { type: Number, required: true },
  benefits: [{
    year: Number,
    projectedBenefit: Number,
  }],
}, { timestamps: true });

// Index for scalability
policySchema.index({ userId: 1 });

module.exports = mongoose.model('Policy', policySchema);