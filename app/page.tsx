"use client";

import React from 'react';
import { ShoppingBag, Star, User, Plus } from 'lucide-react';

export default function Page() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center p-4">
      {/* En-tête */}
      <div className="w-full max-w-md bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl p-6 text-white shadow-lg mb-6">
        <h1 className="text-2xl font-bold italic">LIMITLESS TEAM</h1>
        <p className="opacity-90">Partenaire Chogan</p>
      </div>

      {/* Carte de Fidélité */}
      <div className="w-full max-w-md bg-slate-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        <div className="flex justify-between items-start mb-8">
          <Star className="w-10 h-10 text-orange-500 fill-orange-500" />
          <div className="text-right text-white">
            <p className="text-xs opacity-50 uppercase tracking-widest">Membre Premium</p>
            <p className="font-bold">Carte Fidélité</p>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-3 mb-8">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="aspect-square bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-orange-500 opacity-40" />
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-4 flex justify-between items-center border border-white/5">
          <span className="text-slate-400 font-medium">Progression</span>
          <span className="text-orange-500 font-bold text-xl">0 / 10</span>
        </div>
      </div>

      {/* Menu du bas avec le bouton Shop fonctionnel */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-slate-900/95 backdrop-blur-xl rounded-full px-8 py-4 flex items-center gap-12 shadow-2xl border border-white/10 w-[90%] max-w-sm">
        <button className="flex flex-col items-center gap-1">
          <Star className="w-6 h-6 text-orange-500" />
          <span className="text-[10px] text-orange-500 font-bold uppercase">Points</span>
        </button>
        
        <button className="bg-orange-500 p-4 rounded-full -mt-14 shadow-lg shadow-orange-500/40 border-4 border-white transition-transform active:scale-95">
          <Plus className="w-6 h-6 text-white" />
        </button>

        <a 
          href="https://www.chogangroup.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex flex-col items-center gap-1 group"
        >
          <ShoppingBag className="w-6 h-6 text-slate-400 group-hover:text-orange-500 transition-colors" />
          <span className="text-[10px] text-slate-400 font-bold uppercase">Shop</span>
        </a>
      </div>
    </main>
  );
}
