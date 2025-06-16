import React, { useState } from 'react';

const roles = [
  'Affiliate Marketer', 'Amazon Marketer', 'Brand Marketer', 'CRM Marketer',
  'Content Creator', 'Content Marketers', 'Growth Marketer'
];

const Step1Role = ({ onNext }) => {
  const [selectedRole, setSelectedRole] = useState('');

  return (
    <div className="step-container">
      <h4 className="step-label">STEP 1</h4>
      <h1 className="step-title">What <strong>Role</strong> Are You Hiring For?</h1>

      <div className="options-grid">
        {roles.map((role, idx) => (
          <button
            key={idx}
            className={`option-btn ${selectedRole === role ? 'active' : ''}`}
            onClick={() => setSelectedRole(role)}
          >
            {role}
          </button>
        ))}
      </div>

      <button className="continue-btn" onClick={onNext}>Continue</button>
    </div>
  );
};

export default Step1Role;