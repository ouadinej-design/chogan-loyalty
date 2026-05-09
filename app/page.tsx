"use client";

import React, { useState } from 'react';
import { User, Gift, ShoppingBag, Star, QrCode, PlusCircle } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

export default function LoyaltyApp() {
  const [coupons, setCoupons] = useState(3);
  const totalRequired = 10;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pb-20">
      {/* Header avec dégradé Or */}
      <div className="bg-gradient-to-r from-amber-400 to-amber-600 p-6 text-white shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">LIMITLESS TEAM</h1>
            <p className="text-amber-100 text-sm">Partenaire Chogan</p>
          </div>
          <div className="bg-white/20 p-2 rounded-full">
            <User size={24} />
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Carte de Fidélité */}
        <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <Star className="text-amber-400 fill-amber-400" size={32} />
              <div className="text-right">
                <p className="text-slate-400 text-xs uppercase tracking-widest">Membre Premium</p>
                <p className="text-white font-semibold">Carte Fidélité</p>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-3 mb-6">
              {[...Array(totalRequired)].map((_, i) => (
                <div key={i} className={`aspect-square rounded-xl border-2 flex items-center justify-center transition-all duration-500 ${
                  i < coupons 
                  ? 'bg-amber-500 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.5)]' 
                  : 'border-slate-700 bg-slate-800'
                }`}>
                  {i < coupons && <ShoppingBag size={18} className="text-white" />}
                </div>
              ))}
            </div>

            <div className="bg-white/5 rounded-2xl p-4 flex justify-between items-center border border-white/10">
              <span className="text-slate-300 text-sm">Progression</span>
              <span className="text-amber-400 font-bold text-lg">{coupons} / {totalRequired}</span>
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center">
          <p className="text-slate-600 mb-4 text-sm font-medium">Présentez votre code lors de l'achat</p>
          <div className="bg-white p-4 rounded-xl shadow-sm inline-block border-2 border-slate-100">
            <QRCodeSVG value="CHOGAN-USER-123" size={160} fgColor="#0f172a" />
          </div>
        </div>

        {/* Info Bonus */}
        <div className="flex gap-3 bg-amber-50 p-4 rounded-2xl border border-amber-100">
          <div className="bg-amber-500 p-2 rounded-lg text-white h-fit">
            <Gift size={20} />
          </div>
          <div>
            <p className="font-bold text-amber-900 text-sm">Cadeau à 10 tampons !</p>
            <p className="text-amber-700 text-xs">-20% sur votre prochain parfum Chogan.</p>
          </div>
        </div>
      </div>

      {/* Barre de navigation fixe */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-slate-900/90 backdrop-blur-lg rounded-2xl p-4 shadow-2xl flex justify-around items-center border border-white/10">
        <button className="text-white flex flex-col items-center gap-1">
          <Star size={20} className="text-amber-400" />
          <span className="text-[10px]">Points</span>
        </button>
        <button 
          onClick={() => setCoupons(prev => (prev < 10 ? prev + 1 : 0))}
          className="bg-amber-500 text-white p-3 rounded-full shadow-lg transform active:scale-90 transition-transform -translate-y-4 border-4 border-white"
        >
          <PlusCircle size={28} />
        </button>
        <button className="text-slate-400 flex flex-col items-center gap-1">
          <ShoppingBag size={20} />
          <span className="text-[10px]">Shop</span>
        </button>
      </div>
    </div>
  );
}
