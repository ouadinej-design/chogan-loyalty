use client";
import React, { useState } from 'react';
import { User, Gift, ShoppingBag, Star, ChevronRight, Bell, Search, Plus, Calendar, Ticket, X } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChoganPremiumApp() {
  // État de personnalisation de la consultante
  const [consultantInfo, setConsultantInfo] = useState({
    name: "Limitless Team",
    logoText: "CHOGAN",
  });

  // État des coupons
  const [coupons, setCoupons] = useState([
    { id: 1, type: "Réduction 10%", code: "CHOGAN10", expiry: "2026-06-30" },
    { id: 2, type: "Livraison Offerte", code: "FREE-SHIP", expiry: "2026-05-15" }
  ]);

  // État pour le formulaire de création de coupon
  const [showAdmin, setShowAdmin] = useState(false);
  const [newCoupon, setNewCoupon] = useState({
    type: "Réduction 10%",
    expiry: ""
  });

  const couponTypes = [
    "Réduction 10%",
    "Réduction 20%",
    "Réduction 5€",
    "Réduction 10€",
    "Livraison Offerte",
    "Cadeau Surprise"
  ];

  const addCoupon = () => {
    if (!newCoupon.expiry) return alert("Veuillez choisir une date d'expiration");
    const id = Date.now();
    const code = "CHOG-" + Math.random().toString(36).substring(7).toUpperCase();
    setCoupons([...coupons, { id, type: newCoupon.type, code, expiry: newCoupon.expiry }]);
    setShowAdmin(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pb-32">
      {/* HEADER PERSONNALISABLE */}
      <header className="p-6 pt-10 flex justify-between items-center bg-white border-b border-gray-50 sticky top-0 z-40">
        <div className="flex items-center space-x-3">
          <div className="bg-black text-white px-3 py-1 text-sm font-black tracking-tighter rounded">
            {consultantInfo.logoText}
          </div>
          <div>
            <p className="text-[10px] tracking-[0.2em] text-gray-400 uppercase font-bold">{consultantInfo.name}</p>
            <h1 className="text-xl font-light italic text-gray-700 underline decoration-gold/30">Espace Privilège</h1>
          </div>
        </div>
        <button onClick={() => setShowAdmin(true)} className="p-2 bg-gray-50 rounded-full text-gray-400">
          <Plus size={20} />
        </button>
      </header>

      <main className="px-6 space-y-8 mt-6">
        
        {/* CARTE DE FIDÉLITÉ DYNAMIQUE */}
        <motion.div 
          whileTap={{ scale: 0.98 }}
          className="relative bg-gradient-to-br from-neutral-900 to-black text-white p-8 rounded-[2.5rem] shadow-2xl overflow-hidden"
        >
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start">
              <span className="text-[10px] tracking-[0.4em] opacity-60 uppercase font-light">Digital Loyalty Card</span>
              <Star fill="#D4AF37" color="#D4AF37" size={22} />
            </div>
            
            <div className="my-8">
              <p className="text-5xl font-extralight tracking-tighter">1,240</p>
              <p className="text-[10px] tracking-[0.3em] mt-2 opacity-50 uppercase">Points Chogan</p>
            </div>

            <div className="flex justify-between items-end border-t border-white/10 pt-6">
                <div className="bg-white p-2 rounded-xl">
                    <QRCodeSVG value="chogan-client-888" size={70} />
                </div>
                <div className="text-right">
                    <p className="text-xs font-semibold tracking-widest uppercase">STATUT GOLD</p>
                    <p className="text-[9px] opacity-40 tracking-widest mt-1 italic">Vérifié par {consultantInfo.name}</p>
                </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        </motion.div>

        {/* SECTION COUPONS GÉNÉRÉS */}
        <section className="space-y-4">
            <div className="flex items-center space-x-2">
                <Ticket size={18} className="text-gold" />
                <h3 className="text-xs font-bold uppercase tracking-[0.2em]">Mes Coupons Actifs</h3>
            </div>
            
            <div className="space-y-3">
                {coupons.map((c) => (
                    <motion.div 
                      key={c.id}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="group relative flex items-center p-4 bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden"
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold"></div>
                        <div className="flex-1">
                            <h4 className="text-sm font-bold text-gray-900">{c.type}</h4>
                            <p className="text-[10px] font-mono text-gray-400 mt-1 uppercase">{c.code}</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center text-[10px] text-gray-500 bg-white px-2 py-1 rounded-full border border-gray-100">
                                <Calendar size={10} className="mr-1" />
                                {c.expiry}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* NAVIGATION VERS LE CATALOGUE */}
        <section className="bg-neutral-900 p-6 rounded-3xl text-white flex justify-between items-center">
            <div>
                <h3 className="text-lg font-light italic">Nouveau Catalogue</h3>
                <p className="text-[10px] opacity-50 uppercase tracking-widest">Senteurs d'été 2026</p>
            </div>
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <ShoppingBag size={24} />
            </div>
        </section>
      </main>

      {/* MODAL ADMIN (CRÉATION DE COUPONS) */}
      <AnimatePresence>
        {showAdmin && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center"
          >
            <motion.div 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              className="bg-white w-full max-w-md p-8 rounded-t-[2rem] sm:rounded-[2rem] shadow-2xl text-black"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Gérer les Offres</h2>
                <button onClick={() => setShowAdmin(false)}><X /></button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Type de réduction</label>
                  <select 
                    className="w-full mt-2 p-4 bg-gray-50 border border-gray-100 rounded-xl appearance-none outline-none"
                    onChange={(e) => setNewCoupon({...newCoupon, type: e.target.value})}
                  >
                    {couponTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-400">Date de limite</label>
                  <input 
                    type="date" 
                    className="w-full mt-2 p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none"
                    onChange={(e) => setNewCoupon({...newCoupon, expiry: e.target.value})}
                  />
                </div>

                <button 
                  onClick={addCoupon}
                  className="w-full py-4 bg-black text-white rounded-2xl font-bold mt-4 shadow-xl active:scale-95 transition-all"
                >
                  Générer le coupon
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAV BAR */}
      <nav className="fixed bottom-8 left-6 right-6 bg-white/90 backdrop-blur-xl border border-gray-100 h-18 rounded-full shadow-2xl flex justify-around items-center px-4 z-40">
        <div className="relative group">
            <Star className="text-black" size={24} />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full"></div>
        </div>
        <Search className="text-gray-300" size={24} />
        <div className="w-14 h-14 bg-black rounded-full -mt-10 flex items-center justify-center border-4 border-white shadow-xl">
            <ShoppingBag className="text-white" size={24} />
        </div>
        <Bell className="text-gray-300" size={24} />
        <User className="text-gray-300" size={24} />
      </nav>
    </div>
  );
}
