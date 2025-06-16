import React, { useState } from 'react';
import RoleCard from './RoleCard';

const Selector = ({roles ,value}) => {
  const [selectedRole, setSelectedRole] = useState(value);

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

export default Selector;
