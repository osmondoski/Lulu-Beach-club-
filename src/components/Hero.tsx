import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import content from '../data/content.json';

// Collect all unique images from content to use in the slideshow
const allImages = Array.from(new Set([
  content.hero.image,
  ...content.menu.items.map(item => item.image),
  ...content.moments.videos.map(video => video.thumbnail)
])).filter(Boolean);

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (allImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    }, 30000); // Rotate every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image Slideshow */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={allImages[currentImageIndex]}
            src={allImages[currentImageIndex]}
            alt="Lulu Beach Club Hero"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold mb-8 border border-white/30">
            {content.brand.status}
          </span>
          <h1 className="text-6xl md:text-9xl font-serif leading-tight mb-6 text-brass">
            {content.hero.title.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? "italic opacity-90" : ""}>
                {word}{' '}
              </span>
            ))}
          </h1>
          <p className="text-white/80 text-lg md:text-2xl font-light tracking-widest mb-12 max-w-3xl mx-auto uppercase">
            {content.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a 
              href="#reservations"
              className="bg-lulu-brass text-white px-12 py-5 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold ripple-hover transition-all hover:scale-110 shadow-2xl border border-white/10"
            >
              {content.hero.cta}
            </a>
            <a 
              href="#menu"
              className="text-white border border-white/30 px-12 py-5 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold backdrop-blur-md transition-all hover:bg-white/10"
            >
              Explore Menu
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
