import React, { useState } from 'react';

const Step2Hours = ({ onNext, onBack }) => {
  const [selected, setSelected] = useState('');
  const options = ['1-10', '11-20', '21-40', '41+', "I Don't Know Yet"]

  return (
    <div className="step-container">
      <h4 className="step-label">STEP 2</h4>
      <h1 className="step-title">
        How <strong>Many Hours Per Week</strong><br />Do You Think You'll Need?
      </h1>

      <div className="options-grid">
        {options.map((opt, i) => (
          <button
            key={i}
            className={`option-btn ${selected === opt ? 'active' : ''}`}
            onClick={() => setSelected(opt)}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="buttons">
        <button className="continue-btn" onClick={onNext}>Continue</button>
        <button className="skip-btn">Skip</button>
      </div>

      <div className="info-box">
        <p>ℹ️ More than half of our freelancers are open to full-time opportunities.</p>
      </div>
    </div>
  );
};

export default Step2Hours;