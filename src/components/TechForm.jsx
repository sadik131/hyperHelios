import React, { useState } from 'react';
import RoleCard from './RoleCard';

const TechForm = () => {
  const roles = [
    "Analytics Director",
    "Data Analyst",
    "E-Commerce Manager",
    "Product Manager",
    "Shopify Developer",
    "Head Of Technology"
  ]
  const [selectedRole, setSelectedRole] = useState('Shopify Developer');


  return (
    <div className="roles-grid">
      {roles.map(role => (
        <RoleCard
          key={role}
          role={role}
          isSelected={selectedRole === role}
          onClick={() => setSelectedRole(role)}
        />
      ))}
    </div>
  );
};

export default TechForm;
