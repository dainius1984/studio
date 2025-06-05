import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Anna K.",
      rating: 5,
      text: "Po kilku zabiegach widzę realną poprawę sylwetki. Atmosfera w Studio Figura Wrocław Stabłowice jest bardzo przyjazna, a personel naprawdę się stara.",
      image: process.env.PUBLIC_URL + "/img/1.jpg"
    },
    {
      name: "Magdalena W.",
      rating: 5,
      text: "Nie spodziewałam się takich efektów! Zabiegi są komfortowe, a każda wizyta przebiega w miłej atmosferze.",
      image: process.env.PUBLIC_URL + "/img/2.jpg"
    },
    {
      name: "Karolina M.",
      rating: 5,
      text: "Polecam każdemu, kto chce zadbać o siebie. Indywidualne podejście i profesjonalizm na najwyższym poziomie.",
      image: process.env.PUBLIC_URL + "/img/3.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Co mówią nasze klientki?
        </h2>
        <div className="relative flex justify-center items-center min-h-[350px]">
          <div className="transition-all duration-500 ease-in-out bg-white/20 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl w-full max-w-xl mx-auto flex flex-col items-center animate-fade-in">
            <img 
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              className="w-24 h-24 rounded-full border-4 border-white/40 object-cover mb-4 shadow-lg"
              onLoad={() => console.log('Loaded:', testimonials[currentTestimonial].image)}
            />
            <div className="flex justify-center mb-2">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current text-yellow-300" />
              ))}
            </div>
            <blockquote className="text-lg md:text-xl font-medium mb-4 leading-relaxed text-gray-900">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            <cite className="text-base font-semibold text-orange-700">
              - {testimonials[currentTestimonial].name}
            </cite>
          </div>
          <div className="flex justify-center mt-8 gap-2 absolute bottom-0 left-1/2 -translate-x-1/2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all border border-white/50 ${
                  index === currentTestimonial ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Pokaż opinię ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 