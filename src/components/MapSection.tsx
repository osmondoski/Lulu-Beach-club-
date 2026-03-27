import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import content from '../data/content.json';

export default function MapSection() {
  return (
    <section id="location" className="py-32 bg-lulu-rose/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-lulu-dark font-bold mb-6">Our Location</h2>
            <h3 className="text-5xl md:text-7xl font-serif text-brass mb-8 leading-tight">
              Find Us in the <span className="italic">Heart of Lagos</span>
            </h3>
            <p className="text-lulu-dark/70 text-lg font-light leading-relaxed mb-10 max-w-xl">
              Located at the prestigious Five Cowries waterfront in Falomo, Ikoyi. Lulu Beach Club offers the perfect escape from the city's bustle without leaving its heart.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-lulu-brass/10 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="text-lulu-brass" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-lulu-dark mb-2">Address</h4>
                  <p className="text-lulu-dark/60 text-base">{content.footer.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-lulu-brass/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Navigation className="text-lulu-brass" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-lulu-dark mb-2">Getting Here</h4>
                  <p className="text-lulu-dark/60 text-base">Valet parking is available for all guests. Boat docking can be arranged for waterfront arrivals.</p>
                </div>
              </div>
            </div>

            <a 
              href="https://maps.google.com/?q=Five+Cowries+Falomo+Ikoyi+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-lulu-dark text-white px-10 py-4 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-lulu-brass transition-colors group"
            >
              Get Directions
              <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border border-white/20"
          >
            {/* Map Placeholder - In a real app, this would be a Google Maps iframe or a custom map component */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <img 
                src="https://i.postimg.cc/dt069kD7/1774582823554.jpg" 
                alt="Map Background" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10 text-center p-10">
                <MapPin className="text-lulu-brass mx-auto mb-6" size={48} />
                <p className="text-lulu-dark/40 font-serif italic text-xl">Interactive Map Coming Soon</p>
                <p className="text-lulu-dark/20 text-sm mt-4 uppercase tracking-widest">Five Cowries, Falomo, Ikoyi</p>
              </div>
              
              {/* Stylized Map Overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,20 Q20,40 40,20 T80,40 T100,20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M0,50 Q20,70 40,50 T80,70 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M0,80 Q20,100 40,80 T80,100 T100,80" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>
            </div>
            
            {/* Location Badge */}
            <div className="absolute bottom-10 right-10 bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl z-20 border border-white/50">
              <p className="text-lulu-brass text-[10px] uppercase tracking-[0.4em] font-bold mb-2">Waterfront</p>
              <h4 className="text-2xl font-serif text-lulu-dark">Lulu Beach Club</h4>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
