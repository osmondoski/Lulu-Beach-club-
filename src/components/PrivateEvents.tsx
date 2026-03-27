import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import content from '../data/content.json';

export default function PrivateEvents() {
  const { privateEvents } = content;

  return (
    <section id="events" className="py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-lulu-terracotta/10 -skew-x-12 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-lulu-brass font-bold mb-6">{privateEvents.subtitle}</h2>
            <h3 className="text-5xl md:text-7xl font-serif text-lulu-dark mb-8 leading-tight">
              {privateEvents.title}
            </h3>
            <p className="text-lulu-dark/70 text-lg font-light leading-relaxed mb-10 max-w-xl">
              {privateEvents.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {privateEvents.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-lulu-brass" size={20} />
                  <span className="text-sm font-medium text-lulu-dark/80">{feature}</span>
                </div>
              ))}
            </div>

            <a 
              href="#reservations"
              className="inline-flex items-center gap-4 bg-lulu-dark text-white px-10 py-4 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-lulu-brass transition-colors group"
            >
              Inquire Now
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <img 
                src={privateEvents.image} 
                alt="Private Event" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lulu-dark/40 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-lulu-brass text-white p-10 rounded-full shadow-2xl z-20 hidden md:block"
            >
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-center leading-tight">
                Waterfront<br />Exclusivity
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
