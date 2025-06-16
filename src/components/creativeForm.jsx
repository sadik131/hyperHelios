import React, { useState } from 'react';
import RoleCard from './RoleCard';

const CreativeForm = () => {
    const [selectedRole, setSelectedRole] = useState('UI/UX Designer');
const roles = [
  "Copywriter",
  "Creative Director",
  "Graphic Designer", 
  "Performance Creative Lead",
  "Producer",
  "UI/UX Designer", 
  "Video Editor"
];

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

export default CreativeForm;
