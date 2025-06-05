import React, { useState, useEffect } from "react";
import { X, ArrowRight, AlertCircle } from "lucide-react";

const LeadModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [policy, setPolicy] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = "Podaj swoje imię";
    if (!phone.match(/^[0-9]{9}$/)) errs.phone = "Podaj swój numer telefonu (9 cyfr)";
    if (!policy) errs.policy = "Zaakceptuj politykę prywatności, abyśmy mogli się z Tobą skontaktować";
    return errs;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        className="bg-white rounded-3xl shadow-2xl p-4 sm:p-8 max-w-full sm:max-w-md w-full relative animate-fade-in"
        style={{
          boxShadow: '0 8px 40px 0 rgba(255,98,0,0.25), 0 1.5px 8px 0 rgba(0,0,0,0.10)',
          border: '2px solid #FF6200',
          paddingTop: 40, // more space for the heading
        }}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-orange-500 text-2xl transition"
          onClick={onClose}
          aria-label="Zamknij"
          style={{ zIndex: 10 }}
        >
          <X size={28} />
        </button>
        {!submitted ? (
          <>
            <h2 className="text-center mb-2" style={{ fontFamily: 'Raleway, Arial, sans-serif', fontWeight: 800, color: '#FF6200', fontSize: 28, letterSpacing: '-0.5px', lineHeight: 1.1 }}>
              Przejdź z nami metamorfozę
            </h2>
            <p className="text-center mb-6" style={{ fontFamily: 'Raleway, Arial, sans-serif', fontWeight: 700, color: '#333', fontSize: 18 }}>
              60% rabatu na wszystko
            </p>
            <form onSubmit={sendEmail} className="space-y-4">
              <div className="mb-4">
                <label className="block font-semibold mb-1">Imię*</label>
                <input
                  type="text"
                  className={`w-full border-2 rounded-2xl px-5 py-3 bg-orange-50/60 shadow-sm focus:shadow-lg focus:outline-none focus:border-orange-500 focus:bg-white transition placeholder-gray-400 text-lg ${errors.name ? "border-red-400" : "border-gray-200"}`}
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="np. Ania"
                />
                {errors.name && (
                  <div className="flex items-center gap-2 mt-2 bg-red-100 text-red-700 rounded-xl px-3 py-2 text-sm shadow-sm animate-fade-in-tooltip-smooth">
                    <AlertCircle size={18} className="text-red-500" />
                    <span>{errors.name}</span>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Numer telefonu*</label>
                <input
                  type="tel"
                  className={`w-full border-2 rounded-2xl px-5 py-3 bg-orange-50/60 shadow-sm focus:shadow-lg focus:outline-none focus:border-orange-500 focus:bg-white transition placeholder-gray-400 text-lg ${errors.phone ? "border-red-400" : "border-gray-200"}`}
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  maxLength={9}
                  pattern="[0-9]{9}"
                  placeholder="np. 503537701"
                />
                {errors.phone && (
                  <div className="flex items-center gap-2 mt-2 bg-red-100 text-red-700 rounded-xl px-3 py-2 text-sm shadow-sm animate-fade-in-tooltip-smooth">
                    <AlertCircle size={18} className="text-red-500" />
                    <span>{errors.phone}</span>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="policy"
                    checked={policy}
                    onChange={e => setPolicy(e.target.checked)}
                    className="mr-2 accent-orange-500"
                  />
                  <label htmlFor="policy" className="text-sm">
                    Akceptuję <a href="/polityka-prywatnosci" className="underline text-orange-500" target="_blank" rel="noopener noreferrer">Politykę Prywatności</a> i zgadzam się na kontakt
                  </label>
                </div>
                {errors.policy && (
                  <div className="flex items-center gap-2 mt-2 bg-red-100 text-red-700 rounded-xl px-3 py-2 text-sm shadow-sm animate-fade-in-tooltip-smooth">
                    <AlertCircle size={18} className="text-red-500" />
                    <span>{errors.policy}</span>
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-full transition flex items-center justify-center gap-2 group
                  bg-gradient-to-r from-[#FF6200] to-[#FF8C00] text-white text-lg font-semibold shadow-lg
                  hover:from-[#FF8C00] hover:to-[#FF6200] focus:from-[#FF8C00] focus:to-[#FF6200] cursor-pointer"
                style={{
                  fontFamily: 'Inter, Arial, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  textShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}
              >
                Wyślij
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight size={22} />
                </span>
              </button>
            </form>
          </>
        ) : (
          null
        )}
      </div>
    </div>
  );
};

export default LeadModal;