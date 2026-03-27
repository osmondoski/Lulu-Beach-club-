import { motion } from 'framer-motion';
import { Calendar, Users, Clock, Send } from 'lucide-react';
import content from '../data/content.json';

export default function ReservationForm() {
  return (
    <section id="reservations" className="py-32 bg-lulu-dark text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lulu-brass/10 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lulu-terracotta/10 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-white font-bold mb-8">Reservations</h2>
            <h3 className="text-6xl md:text-8xl font-serif leading-tight mb-10 text-brass">Secure Your <span className="italic">Paradise</span></h3>
            <p className="text-white/50 text-xl font-light leading-relaxed mb-12 max-w-md">
              Experience the finest Mediterranean hospitality in Lagos. From intimate dinners to grand cabana celebrations.
            </p>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl dramatic-shadow">
              <p className="text-lulu-brass text-[10px] uppercase tracking-[0.4em] font-bold mb-4">Important Note</p>
              <p className="text-white/70 text-base font-light italic leading-relaxed">
                {content.reservations.disclaimer}
              </p>
            </div>
          </div>

          <div className="bg-lulu-terracotta p-10 md:p-16 rounded-[2.5rem] shadow-2xl border border-white/5">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-lulu-dark/50">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-lulu-dark/5 border-none rounded-2xl px-6 py-4 text-lulu-dark focus:ring-2 focus:ring-lulu-brass transition-all outline-none placeholder:text-lulu-dark/20"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-lulu-dark/50">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-lulu-dark/5 border-none rounded-2xl px-6 py-4 text-lulu-dark focus:ring-2 focus:ring-lulu-brass transition-all outline-none placeholder:text-lulu-dark/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-lulu-dark/50 flex items-center gap-2">
                    <Calendar size={14} /> Date
                  </label>
                  <input 
                    type="date" 
                    className="w-full bg-lulu-dark/5 border-none rounded-2xl px-6 py-4 text-lulu-dark focus:ring-2 focus:ring-lulu-brass transition-all outline-none"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-lulu-dark/50 flex items-center gap-2">
                    <Clock size={14} /> Time
                  </label>
                  <select className="w-full bg-lulu-dark/5 border-none rounded-2xl px-6 py-4 text-lulu-dark focus:ring-2 focus:ring-lulu-brass transition-all outline-none appearance-none">
                    {content.reservations.options.times.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-lulu-dark/50 flex items-center gap-2">
                    <Users size={14} /> Guests
                  </label>
                  <select className="w-full bg-lulu-dark/5 border-none rounded-2xl px-6 py-4 text-lulu-dark focus:ring-2 focus:ring-lulu-brass transition-all outline-none appearance-none">
                    {content.reservations.options.guests.map(g => <option key={g}>{g} Guests</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Special Requests</label>
                <textarea 
                  rows={3}
                  placeholder="Birthday celebration, dietary requirements, etc."
                  className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-lulu-dark focus:ring-2 focus:ring-lulu-gold transition-all outline-none resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-lulu-dark text-white py-4 rounded-xl text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-3 ripple-hover group transition-all hover:bg-lulu-gold"
              >
                Request Booking <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
