const mongoose = require('mongoose');
const { validatePolicyInputs } = require('../utils/validation');
const { calculateBenefits } = require('../utils/calculation');
const Policy = require('../models/Policy');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = require('../server');
const supertest = require('supertest');

const request = supertest(app);

describe('Policy Validation', () => {
  test('should validate correct inputs', () => {
    const input = {
      dob: '1999/12/12',
      gender: 'M',
      sumAssured: 5000000,
      modalPremium: 40000,
      premiumFrequency: 'Yearly',
      policyTerm: 18,
      premiumPaymentTerm: 10,
    };
    const result = validatePolicyInputs(input);
    expect(result.isValid).toBe(true);
    expect(result.age).toBe(25);
  });

  test('should fail if Modal Premium exceeds max', () => {
    const input = {
      dob: '1999/12/12',
      gender: 'M',
      sumAssured: 5000000,
      modalPremium: 80000,
      premiumFrequency: 'Yearly',
      policyTerm: 18,
      premiumPaymentTerm: 10,
    };
    const result = validatePolicyInputs(input);
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Modal Premium must be between ₹10,000 and ₹50,000');
  });

  test('should fail if PT <= PPT', () => {
    const input = {
      dob: '1999/12/12',
      gender: 'M',
      sumAssured: 5000000,
      modalPremium: 40000,
      premiumFrequency: 'Yearly',
      policyTerm: 10,
      premiumPaymentTerm: 10,
    };
    const result = validatePolicyInputs(input);
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Policy Term must be greater than Premium Payment Term');
  });

  test('should fail if Sum Assured is too low', () => {
    const input = {
      dob: '1999/12/12',
      gender: 'M',
      sumAssured: 1200000,
      modalPremium: 40000,
      premiumFrequency: 'Yearly',
      policyTerm: 18,
      premiumPaymentTerm: 10,
    };
    const result = validatePolicyInputs(input);
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Sum Assured must be at least ₹5000000');
  });
});

describe('Benefit Calculation', () => {
  test('should calculate benefits correctly', () => {
    const policy = {
      sumAssured: 5000000,
      modalPremium: 40000,
      premiumFrequency: 'Yearly',
      policyTerm: 18,
      premiumPaymentTerm: 10,
    };
    const benefits = calculateBenefits(policy);
    expect(benefits.length).toBe(18);
    expect(benefits[0].year).toBe(1);
    expect(benefits[0].projectedBenefit).toBeGreaterThan(5000000);
  });
});

describe('Policy Illustration Endpoint', () => {
  let token;
  let policyId;
  let userId;

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Create a user
    const hashedPassword = await bcrypt.hash('password123', 10);
    const user = new User({
      username: 'testuser2',
      password: hashedPassword,
      dob: '****/**/**',
      mobile: '**********',
    });
    const savedUser = await user.save();
    userId = savedUser._id;

    // Generate JWT
    token = jwt.sign({ userId: userId.toString() }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Create a policy
    const policyData = {
      userId,
      dob: '1999/12/12',
      gender: 'M',
      sumAssured: 5000000,
      modalPremium: 40000,
      premiumFrequency: 'Yearly',
      policyTerm: 18,
      premiumPaymentTerm: 10,
      benefits: calculateBenefits({
        sumAssured: 5000000,
        modalPremium: 40000,
        premiumFrequency: 'Yearly',
        policyTerm: 18,
        premiumPaymentTerm: 10,
      }),
    };
    const policy = new Policy(policyData);
    const savedPolicy = await policy.save();
    policyId = savedPolicy._id;
  });

  afterAll(async () => {
    await User.deleteMany({});
    await Policy.deleteMany({});
    await mongoose.connection.close();
  });

  test('should retrieve policy with valid ID and token', async () => {
    const response = await request
      .get(`/api/policy/illustration/${policyId}`)
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
    expect(response.body._id).toBe(policyId.toString());
    expect(response.body.sumAssured).toBe(5000000);
    expect(response.body.benefits.length).toBe(18);
  });

  test('should return 404 for invalid policy ID', async () => {
    const response = await request
      .get('/api/policy/illustration/123456789012')
      .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Policy not found');
  });

  test('should return 403 for invalid token', async () => {
    const response = await request
      .get(`/api/policy/illustration/${policyId}`)
      .set('Authorization', 'Bearer invalid-token');
    expect(response.status).toBe(403);
    expect(response.body.message).toBe('Invalid token');
  });

  test('should return 401 for missing token', async () => {
    const response = await request.get(`/api/policy/illustration/${policyId}`);
    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Access token required');
  });
});