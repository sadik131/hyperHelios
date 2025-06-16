import React, { useState } from 'react';
import RoleCard from './RoleCard';

const roles = [
  'Affiliate Marketer', 'Amazon Marketer', 'Brand Marketer', 'CRM Marketer',
  'CX Director', 'Content Creator', 'Content Marketers', 'Growth Marketer',
  'SEO Marketer', 'Social Media Manager', 'PR Director'
];

const RoleSelector = () => {
  const [selectedRole, setSelectedRole] = useState('Brand Marketer');

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

export default RoleSelector;
