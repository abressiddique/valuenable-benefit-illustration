const express = require('express');
const jwt = require('jsonwebtoken'); // Added missing import
const Policy = require('../models/Policy');
const { validatePolicyInputs } = require('../utils/validation');
const { calculateBenefits } = require('../utils/calculation');
const router = express.Router();

// Middleware for JWT authentication
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access token required' });
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
};

// Calculate Policy Benefits
router.post('/calculate', authenticateToken, async (req, res) => {
  try {
    const validation = validatePolicyInputs(req.body);
    if (!validation.isValid) {
      return res.status(400).json({ message: 'Validation failed', errors: validation.errors });
    }

    const policyData = {
      userId: req.user.userId,
      ...req.body,
      benefits: calculateBenefits(req.body),
    };
    const policy = new Policy(policyData);
    await policy.save();
    res.json({ message: 'Policy calculated successfully', policy });
  } catch (error) {
    res.status(500).json({ message: 'Error calculating policy', error: error.message });
  }
});

// Get Policy Illustration
router.get('/illustration/:policyId', authenticateToken, async (req, res) => {
  try {
    const policy = await Policy.findOne({ _id: req.params.policyId, userId: req.user.userId });
    if (!policy) return res.status(404).json({ message: 'Policy not found' });
    res.json(policy);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving policy', error: error.message });
  }
});

module.exports = router;