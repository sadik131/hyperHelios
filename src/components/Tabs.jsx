import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['Marketing', 'Creative', 'Tech And Analytics'];

  return (
    <div className="tab-container">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`tab ${activeTab === tab ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
