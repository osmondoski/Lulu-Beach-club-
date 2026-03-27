import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import content from '../data/content.json';

export default function Membership() {
  const { membership } = content;

  return (
    <section id="membership" className="py-32 bg-lulu-dark text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lulu-gold rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lulu-brass rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-left mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 bg-lulu-gold/10 text-lulu-gold px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.5em] font-bold mb-8 border border-lulu-gold/20"
              >
                <Star size={14} />
                {membership.subtitle}
              </motion.div>
              <h2 className="text-5xl md:text-8xl font-serif mb-10 leading-tight">
                {membership.title}
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed max-w-2xl mb-16">
                {membership.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
              {membership.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-lulu-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <Star className="text-lulu-gold" size={14} />
                  </div>
                  <span className="text-sm font-medium text-white/80">{benefit}</span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 bg-lulu-gold text-lulu-dark px-12 py-5 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold shadow-2xl hover:bg-white transition-colors group"
            >
              {membership.cta}
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10"
          >
            <img 
              src={membership.image} 
              alt="Membership Vibe" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-lulu-dark/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
