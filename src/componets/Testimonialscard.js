import React from 'react';

const TestimonialCard = ({ name, feedback }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <p className="italic">"{feedback}"</p>
      <p className="mt-4 font-semibold">- {name}</p>
    </div>
  );
};

export default TestimonialCard;
