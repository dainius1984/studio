import React from 'react';
import { ChevronRight } from 'lucide-react';

const ServiceCard = ({ title, description, icon, features }) => {
  return (
    <div className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-orange-100">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-gray-700">
            <ChevronRight className="w-4 h-4 text-orange-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold transition-colors">
        Dowiedz się więcej
      </button>
    </div>
  );
};

export default ServiceCard; 