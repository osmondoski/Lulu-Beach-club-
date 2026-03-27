import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Music, Sun, Utensils, ArrowLeft, X, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LuluSunday() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleClose = () => {
    setSelectedImage(null);
    setZoomLevel(1);
  };

  const toggleZoom = (e: MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(prev => prev === 1 ? 2 : 1);
  };

  return (
    <div className="min-h-screen bg-lulu-terracotta selection:bg-lulu-brass selection:text-white">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-lulu-dark/60 hover:text-lulu-brass transition-colors mb-12 uppercase text-[10px] font-bold tracking-[0.3em]"
          >
            <ArrowLeft size={16} />
            Back to Club
          </Link>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block bg-lulu-brass/10 text-lulu-brass px-4 py-1 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold mb-6 border border-lulu-brass/20">
                The Sunday Ritual
              </span>
              <h1 className="text-6xl md:text-8xl font-serif text-lulu-dark leading-tight mb-8">
                Lulu on a <span className="italic text-lulu-brass">Sunday</span>
              </h1>
              <p className="text-lulu-dark/70 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl">
                Experience the ultimate Mediterranean brunch in the heart of Lagos. From sun-drenched cocktails to soulful live music, Sundays at Lulu are a celebration of life, leisure, and the perfect golden hour.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#reservations" 
                  className="bg-lulu-brass text-white px-10 py-4 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold shadow-xl hover:scale-105 transition-transform"
                >
                  Book Sunday Brunch
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl cursor-zoom-in group/hero"
              onClick={() => setSelectedImage("https://i.postimg.cc/dt069kD7/1774582823554.jpg")}
            >
              <img 
                src="https://i.postimg.cc/dt069kD7/1774582823554.jpg" 
                alt="Sunday Vibe"
                className="w-full h-full object-cover transition-transform group-hover/hero:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lulu-dark/60 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold mb-2">Golden Hour</p>
                <h3 className="text-3xl font-serif italic">The Lagos Sunset</h3>
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/hero:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="text-white" size={32} />
              </div>
            </motion.div>
          </div>

          {/* Sunday Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {[
              {
                icon: <Utensils className="text-lulu-brass" />,
                title: "Bottomless Brunch",
                desc: "A curated selection of Mediterranean classics and Lagos favorites."
              },
              {
                icon: <Music className="text-lulu-brass" />,
                title: "Live Soul Sessions",
                desc: "Soulful jazz and acoustic sets to set the perfect Sunday mood."
              },
              {
                icon: <Sun className="text-lulu-brass" />,
                title: "Sunset Cocktails",
                desc: "Signature drinks crafted specifically for the golden hour transition."
              },
              {
                icon: <Calendar className="text-lulu-brass" />,
                title: "Limited Cabanas",
                desc: "Exclusive poolside and waterfront seating for the ultimate comfort."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/50 backdrop-blur-sm p-10 rounded-3xl border border-white/20 hover:bg-white/80 transition-all group"
              >
                <div className="w-12 h-12 bg-lulu-brass/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif text-lulu-dark mb-4">{feature.title}</h3>
                <p className="text-lulu-dark/60 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Sunday Moments - New Section */}
          <div className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-[10px] uppercase tracking-[0.5em] text-lulu-brass font-bold mb-4">Sunday Moments</h2>
                <h3 className="text-4xl md:text-6xl font-serif text-lulu-dark">The <span className="italic">Vibe</span></h3>
              </div>
              <p className="text-lulu-dark/50 text-base max-w-md font-light leading-relaxed">
                Capture the essence of a perfect Sunday. From the first sip to the last dance as the sun dips below the horizon.
              </p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-video md:aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl cursor-zoom-in group"
              onClick={() => setSelectedImage("https://i.postimg.cc/kggwk5N8/1774582656322.jpg")}
            >
              <img 
                src="https://i.postimg.cc/kggwk5N8/1774582656322.jpg" 
                alt="Sunday Vibe Moment"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/30">
                  <Maximize2 className="text-white" size={32} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sunday Menu Highlight */}
          <div className="bg-lulu-dark text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden mb-32">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-serif mb-8">The Sunday <span className="italic text-lulu-gold">Menu</span></h2>
              <div className="space-y-8">
                <div className="border-b border-white/10 pb-6">
                  <div className="flex justify-between items-end mb-2">
                    <h4 className="text-xl font-serif">Lulu Benedict</h4>
                    <span className="text-lulu-gold font-bold tracking-widest text-xs">₦15,500</span>
                  </div>
                  <p className="text-white/40 text-sm italic">Poached eggs, smoked salmon, hollandaise on brioche.</p>
                </div>
                <div className="border-b border-white/10 pb-6">
                  <div className="flex justify-between items-end mb-2">
                    <h4 className="text-xl font-serif">Seafood Paella</h4>
                    <span className="text-lulu-gold font-bold tracking-widest text-xs">₦28,000</span>
                  </div>
                  <p className="text-white/40 text-sm italic">Saffron rice, fresh prawns, calamari, and mussels.</p>
                </div>
                <div className="border-b border-white/10 pb-6">
                  <div className="flex justify-between items-end mb-2">
                    <h4 className="text-xl font-serif">Sunday Sangria Pitcher</h4>
                    <span className="text-lulu-gold font-bold tracking-widest text-xs">₦35,000</span>
                  </div>
                  <p className="text-white/40 text-sm italic">White wine, fresh berries, citrus, and a hint of mint.</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div 
              className="absolute top-0 right-0 w-1/2 h-full opacity-20 cursor-zoom-in hidden lg:block group/side"
              onClick={() => setSelectedImage("https://i.postimg.cc/cHmjrp5C/1774582857185.jpg")}
            >
              <img 
                src="https://i.postimg.cc/cHmjrp5C/1774582857185.jpg" 
                alt="Food"
                className="w-full h-full object-cover transition-transform group-hover/side:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/side:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="text-white" size={32} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
            onClick={handleClose}
          >
            {/* Controls */}
            <div className="absolute top-6 right-6 flex items-center gap-4 z-[110]">
              <button 
                onClick={toggleZoom}
                className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all border border-white/20"
                title={zoomLevel === 1 ? "Zoom In" : "Zoom Out"}
              >
                {zoomLevel === 1 ? <ZoomIn size={24} /> : <ZoomOut size={24} />}
              </button>
              <button 
                onClick={handleClose}
                className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all border border-white/20"
              >
                <X size={24} />
              </button>
            </div>

            <motion.div 
              className="relative w-full h-full flex items-center justify-center overflow-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <motion.img
                src={selectedImage}
                alt="Sunday Moment"
                animate={{ scale: zoomLevel }}
                transition={{ type: "spring", damping: 25, stiffness: 150 }}
                className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all ${zoomLevel > 1 ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                onClick={toggleZoom}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
