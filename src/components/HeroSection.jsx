import React from 'react';
import { Star, ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-orange-100 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-white/30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Studio Figura Wrocław
              <span className="block text-orange-500">Stabłowice</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Odkryj swoje piękno i zdrowie w nowoczesnym studio kosmetycznym. 
              Profesjonalne zabiegi, najnowsze technologie i indywidualne podejście.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                Rozpocznij transformację
                <ArrowRight className="inline ml-2" size={20} />
              </button>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center">
                <Play className="mr-2" size={20} />
                Zobacz film
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-200 to-orange-300 rounded-3xl p-8 transform rotate-3 hover:rotate-1 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Studio Figura Wrocław Stabłowice" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-gray-800">5.0</span>
                <span className="text-gray-600">(120+ opinii)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 