import React, { useState, useEffect } from "react";

const LeadModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [policy, setPolicy] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // EmailJS integration (see below for setup)
  const sendEmail = async (e) => {
    e.preventDefault();
    if (!policy) return;
    // You need to set up EmailJS and replace these values:
    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const userID = "YOUR_USER_ID";
    const templateParams = {
      name,
      phone,
    };
    try {
      await window.emailjs.send(serviceID, templateID, templateParams, userID);
      setSubmitted(true);
    } catch (err) {
      alert("Błąd wysyłania. Spróbuj ponownie.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold mb-2 text-center">Przejdź z nami metamorfozę</h2>
            <p className="text-center mb-4 text-gray-600">60% rabatu na wszystko</p>
            <form onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block font-semibold mb-1">Imię*</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-2"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Numer telefonu*</label>
                <input
                  type="tel"
                  className="w-full border rounded-lg px-4 py-2"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="policy"
                  checked={policy}
                  onChange={e => setPolicy(e.target.checked)}
                  required
                  className="mr-2"
                />
                <label htmlFor="policy" className="text-sm">
                  Akceptuję <a href="/polityka-prywatnosci" className="underline text-orange-500" target="_blank" rel="noopener noreferrer">Politykę Prywatności</a> i zgadzam się na kontakt
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full font-semibold transition"
                disabled={!policy}
              >
                Wyślij
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <h3 className="text-xl font-bold mb-2">Dziękujemy!</h3>
            <p>Twoje zgłoszenie zostało wysłane.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadModal;