import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const PolicyForm = () => {
  const [formData, setFormData] = useState({
    dob: '',
    gender: 'M',
    sumAssured: '',
    modalPremium: '',
    premiumFrequency: 'Yearly',
    policyTerm: '',
    premiumPaymentTerm: '',
  });
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await api.post('/policy/calculate', formData);
      setErrors([]);
      navigate(`/illustration/${response.data.policy._id}`);
    } catch (err) {
      setErrors(err.response?.data?.errors || ['Calculation failed']);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4">
            <h2 className="text-primary text-center mb-4">Calculate Policy</h2>
            {errors.length > 0 && (
              <div className="alert alert-danger">
                {errors.map((error, index) => (
                  <div key={index}>{error}</div>
                ))}
              </div>
            )}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Date of Birth (YYYY/MM/DD)</label>
                <input
                  type="text"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="e.g., 1999/12/12"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Sum Assured (₹)</label>
                <input
                  type="number"
                  name="sumAssured"
                  value={formData.sumAssured}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="e.g., 5000000"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Modal Premium (₹)</label>
                <input
                  type="number"
                  name="modalPremium"
                  value={formData.modalPremium}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="e.g., 40000"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Premium Frequency</label>
                <select
                  name="premiumFrequency"
                  value={formData.premiumFrequency}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="Yearly">Yearly</option>
                  <option value="Half-Yearly">Half-Yearly</option>
                  <option value="Monthly">Monthly</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Policy Term (years)</label>
                <input
                  type="number"
                  name="policyTerm"
                  value={formData.policyTerm}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="e.g., 18"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Premium Payment Term (years)</label>
              <input
                type="number"
                name="premiumPaymentTerm"
                value={formData.premiumPaymentTerm}
                onChange={handleChange}
                className="form-control"
                placeholder="e.g., 10"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="btn btn-primary w-100"
            >
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyForm;