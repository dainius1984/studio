import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Anna K.",
      rating: 5,
      text: "Fantastyczne rezultaty już po pierwszym miesiącu! Polecam każdemu, kto chce zadbać o swoją sylwetkę.",
      image: require("../img/1.jpg")
    },
    {
      name: "Magdalena W.",
      rating: 5,
      text: "Profesjonalna obsługa i nowoczesny sprzęt. Studio Figura to najlepsza inwestycja w siebie!",
      image: require("../img/2.jpg")
    },
    {
      name: "Karolina M.",
      rating: 5,
      text: "Wreszcie znalazłam miejsce, gdzie czuję się komfortowo. Efekty przeszły moje oczekiwania!",
      image: require("../img/3.jpg")
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
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <img 
                src={testimonials[currentTestimonial].image} 
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full border-4 border-white/20"
              />
            </div>
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current text-yellow-300" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            <cite className="text-lg font-semibold">
              - {testimonials[currentTestimonial].name}
            </cite>
          </div>
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 