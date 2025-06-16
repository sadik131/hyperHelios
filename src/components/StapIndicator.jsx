import React from 'react';
import icon from '../assets/Vector (1).png'; // Replace with your actual icons

const StepIndicator = ({ activeStep }) => {
  const steps = [
    { title: 'ROLE', subtitle: 'Brand Marketer' },
    { title: 'HOURS PER WEEK', subtitle: "I Don't Know Yet" },
    { title: 'HOURS RATE' },
    { title: 'EXPERIENCE' },
    { title: 'CREATE ACCOUNT' }
  ];

  return (
    <div className="step-progress-container">
      {steps.map((step, index) => (
        <div className="step-wrapper" key={index}>
          <div className="step-inner">
            <div className={`step-circle ${index <= activeStep ? 'active' : ''}`}>
              <img src={icon} alt="step icon" />
              {index < activeStep && <div className="step-check">&#10003;</div>}
            </div>
            <div className={`step-title ${index === activeStep ? 'active' : ''}`}>{step.title}</div>
            {step.subtitle && index === activeStep && (
              <div className="step-subtitle">{step.subtitle}</div>
            )}
          </div>
          {index < steps.length - 1 && (
            <div className={`step-line ${index < activeStep ? 'completed' : ''}`}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
