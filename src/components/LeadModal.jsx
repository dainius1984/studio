import React, { useState, useEffect } from "react";
import { CheckCircle, X } from "lucide-react";

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
    if (!name.trim()) errs.name = "Podaj imię";
    if (!phone.match(/^[0-9]{9}$/)) errs.phone = "Podaj poprawny numer telefonu (9 cyfr)";
    if (!policy) errs.policy = "Musisz zaakceptować politykę prywatności";
    return errs;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    // EmailJS integration here
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full relative animate-fade-in">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-orange-500 text-2xl transition"
          onClick={onClose}
          aria-label="Zamknij"
        >
          <X size={28} />
        </button>
        {!submitted ? (
          <>
            <h2 className="text-3xl font-extrabold mb-2 text-center text-orange-500">Przejdź z nami metamorfozę</h2>
            <p className="text-center mb-6 text-gray-600 text-lg">60% rabatu na wszystko</p>
            <form onSubmit={sendEmail} className="space-y-5">
              <div>
                <label className="block font-semibold mb-1">Imię*</label>
                <input
                  type="text"
                  className={`w-full border-2 rounded-xl px-4 py-2 focus:outline-none focus:border-orange-500 transition ${errors.name ? "border-red-400" : "border-gray-200"}`}
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
                {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
              </div>
              <div>
                <label className="block font-semibold mb-1">Numer telefonu*</label>
                <input
                  type="tel"
                  className={`w-full border-2 rounded-xl px-4 py-2 focus:outline-none focus:border-orange-500 transition ${errors.phone ? "border-red-400" : "border-gray-200"}`}
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  required
                  maxLength={9}
                  pattern="[0-9]{9}"
                  placeholder="np. 503537701"
                />
                {errors.phone && <div className="text-red-500 text-xs mt-1">{errors.phone}</div>}
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="policy"
                  checked={policy}
                  onChange={e => setPolicy(e.target.checked)}
                  required
                  className="mr-2 accent-orange-500"
                />
                <label htmlFor="policy" className="text-sm">
                  Akceptuję <a href="/polityka-prywatnosci" className="underline text-orange-500" target="_blank" rel="noopener noreferrer">Politykę Prywatności</a> i zgadzam się na kontakt
                </label>
              </div>
              {errors.policy && <div className="text-red-500 text-xs mt-1">{errors.policy}</div>}
              <button
                type="submit"
                className={`w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-bold text-lg transition disabled:opacity-50`}
                disabled={!name || !phone || !policy}
              >
                Wyślij
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8 animate-fade-in">
            <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-2 text-orange-500">Dziękujemy!</h3>
            <p className="text-lg">Twoje zgłoszenie zostało wysłane.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadModal;