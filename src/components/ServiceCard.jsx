import React from 'react';
import { ChevronRight } from 'lucide-react';

const ServiceCard = ({ title, description, icon, features, video }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-orange-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-orange-100 group">
      {video && (
        <video
          className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] object-cover z-0 transition-all duration-500 group-hover:blur-sm group-hover:opacity-80 blur-[3px] opacity-60 scale-125 group-hover:scale-[1.35]"
          src={video}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster=""
          style={{ objectFit: 'cover' }}
        />
      )}
      <div className="absolute -inset-4 bg-white/80 dark:bg-black/60 z-0 pointer-events-none rounded-3xl" />
      <div className="relative z-10 text-center">
        <div className="mb-4 flex flex-col items-center">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.12)' }}>{title}</h3>
        <p className="text-gray-700 mb-6 leading-relaxed text-base font-medium" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-700 justify-center" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>
              <ChevronRight className="w-4 h-4 text-orange-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold transition-colors shadow-md" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>
          Dowiedz się więcej
        </button>
      </div>
    </div>
  );
};

export default ServiceCard; 