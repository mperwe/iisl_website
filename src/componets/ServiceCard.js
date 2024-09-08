import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <img src={icon} alt={title} className="w-12 h-12 mx-auto"/>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
