const validatePolicyInputs = (data) => {
  const errors = [];
  const { dob, sumAssured, modalPremium, premiumFrequency, policyTerm, premiumPaymentTerm } = data;

  // 1. Range validations
  if (premiumPaymentTerm < 5 || premiumPaymentTerm > 10) {
    errors.push('Premium Payment Term must be between 5 and 10 years');
  }
  if (policyTerm < 10 || policyTerm > 20) {
    errors.push('Policy Term must be between 10 and 20 years');
  }
  if (modalPremium < 10000 || modalPremium > 50000) {
    errors.push('Modal Premium must be between ₹10,000 and ₹50,000');
  }

  // 2. PT > PPT
  if (policyTerm <= premiumPaymentTerm) {
    errors.push('Policy Term must be greater than Premium Payment Term');
  }

  // 3. Premium Frequency
  if (!['Yearly', 'Half-Yearly', 'Monthly'].includes(premiumFrequency)) {
    errors.push('Premium Frequency must be Yearly, Half-Yearly, or Monthly');
  }

  // 4. Sum Assured (changed to Math.min)
  const minSumAssured = Math.min(10 * modalPremium, 5000000);
  if (sumAssured < minSumAssured) {
    errors.push(`Sum Assured must be at least ₹${minSumAssured}`);
  }

  // 5. Age validation (last birthday)
  const today = new Date('2025-05-26');
  const birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  if (age < 23 || age > 56) {
    errors.push('Age must be between 23 and 56 years');
  }

  return { isValid: errors.length === 0, errors, age };
};

module.exports = { validatePolicyInputs };