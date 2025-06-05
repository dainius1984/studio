import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactInfoCard from './ContactInfoCard';

const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Gotowa na <span className="text-orange-500">zmianę?</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Umów się na bezpłatną konsultację i rozpocznij swoją transformację już dziś!
        </p>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <ContactInfoCard 
              icon={Phone}
              title="Zadzwoń"
              description="503 537 701"
            />
            <ContactInfoCard 
              icon={Mail}
              title="Napisz"
              description="kontakt@studiofigura-wroclaw-stablowice.pl"
            />
            <ContactInfoCard 
              icon={MapPin}
              title="Odwiedź"
              description={
                <div>
                  Brodzka 193<br />54-067 Wrocław
                </div>
              }
            />
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
            Umów bezpłatną konsultację
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 