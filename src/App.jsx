import React, { useState } from 'react';
import Tabs from './components/Tabs';
import TechForm from './components/TechForm';
import RoleSelector from './components/RoleSelector';
import CreativeForm from './components/creativeForm';
import StepIndicator from './components/StapIndicator';
import Tips from './components/tips';

const App = () => {
  const [activeTab, setActiveTab] = useState('Marketing');

  console.log(activeTab)
  return (
    <div className="container">
      <StepIndicator activeStep={0}/>
      <div className='stap'>stap 1</div>
      <h2 className="step-label">
        What <span>Role</span> Are You Hiring For?
      </h2>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'Marketing' && <RoleSelector />}
      {activeTab === 'Creative' && <CreativeForm />}
      {activeTab === 'Tech And Analytics' && <TechForm />}

      <button className="continue-btn">Continue</button>
      <Tips>{
        "Starter Tip: Select one for now, but you can hire as many roles as you'd like, fully included in your membership"
      }</Tips>
    </div>
  );
};

export default App;

