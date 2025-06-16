import React from 'react';
import check from "../assets/Frame (8).png"

const RoleCard = ({ role, isSelected, onClick }) => {
  return (
    <div
      className={`shadow role-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
        {isSelected && <img className='checkIcon' src={check} alt='check'/>}
      {role}
    </div>
  );
};

export default RoleCard;
