import React from 'react';

const ContactInfoCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="text-center">
      <Icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
      <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
      <div className="text-gray-600">{description}</div>
    </div>
  );
};

export default ContactInfoCard; 