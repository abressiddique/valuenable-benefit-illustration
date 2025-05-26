import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

const Illustration = () => {
  const { policyId } = useParams();
  const [policy, setPolicy] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPolicy = async () => {
      try {
        const response = await api.get(`/policy/illustration/${policyId}`);
        setPolicy(response.data);
        setError('');
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load policy');
        if (err.response?.status === 401 || err.response?.status === 403) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      }
    };
    fetchPolicy();
  }, [policyId, navigate]);

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  if (!policy) {
    return <div className="container mt-5 text-center">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card p-4">
            <h2 className="text-primary text-center mb-4">Policy Illustration</h2>
            <h4 className="mb-3">Policy Details</h4>
            <div className="row mb-4">
              <div className="col-md-6">
                <p><strong>DOB:</strong> {policy.dob}</p>
                <p><strong>Gender:</strong> {policy.gender === 'M' ? 'Male' : 'Female'}</p>
                <p><strong>Sum Assured:</strong> ₹{policy.sumAssured.toLocaleString()}</p>
                <p><strong>Modal Premium:</strong> ₹{policy.modalPremium.toLocaleString()}</p>
              </div>
              <div className="col-md-6">
                <p><strong>Premium Frequency:</strong> {policy.premiumFrequency}</p>
                <p><strong>Policy Term:</strong> {policy.policyTerm} years</p>
                <p><strong>Premium Payment Term:</strong> {policy.premiumPaymentTerm} years</p>
              </div>
            </div>
            <h4 className="mb-3">Projected Benefits</h4>
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead className="table-primary">
                  <tr>
                    <th>Year</th>
                    <th>Projected Benefit (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {policy.benefits.map((benefit) => (
                    <tr key={benefit._id}>
                      <td>{benefit.year}</td>
                      <td>{benefit.projectedBenefit.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              onClick={() => navigate('/policy')}
              className="btn btn-primary mt-3"
            >
              Calculate Another Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Illustration;