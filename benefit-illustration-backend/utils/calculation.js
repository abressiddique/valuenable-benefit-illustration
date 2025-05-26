const calculateBenefits = (policy) => {
  const { sumAssured, modalPremium, premiumFrequency, policyTerm, premiumPaymentTerm } = policy;
  const benefits = [];
  let totalPremiums = 0;
  const annualInterestRate = 0.05; // 5% interest for projection

  // Payments per year based on frequency
  const paymentsPerYear = {
    Yearly: 1,
    'Half-Yearly': 2,
    Monthly: 12,
  }[premiumFrequency];

  for (let year = 1; year <= policyTerm; year++) {
    if (year <= premiumPaymentTerm) {
      totalPremiums += modalPremium * paymentsPerYear;
    }
    // Simple projection: Sum Assured + compounded premiums
    const projectedBenefit = sumAssured + totalPremiums * (1 + annualInterestRate) ** year;
    benefits.push({ year, projectedBenefit: Math.round(projectedBenefit) });
  }
  return benefits;
};

module.exports = { calculateBenefits };