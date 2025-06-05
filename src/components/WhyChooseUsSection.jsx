import React from 'react';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      title: "Doświadczenie i profesjonalizm",
      description: "Nasz zespół to wykwalifikowani specjaliści z wieloletnim doświadczeniem"
    },
    {
      title: "Nowoczesne technologie",
      description: "Używamy najnowszego sprzętu i sprawdzonych metod"
    },
    {
      title: "Indywidualne podejście",
      description: "Każdy program jest dostosowany do Twoich potrzeb i celów"
    },
    {
      title: "Gwarancja efektów",
      description: "Zobowiązujemy się do osiągnięcia założonych celów"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Dlaczego <span className="text-orange-500">Studio Figura Wrocław Stabłowice?</span>
            </h2>
            <div className="space-y-6">
              {reasons.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
              alt="Studio wnętrze" 
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute -top-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">lat doświadczenia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection; 