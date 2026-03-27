import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import content from '../data/content.json';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(content.menu.categories[0]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const filteredItems = content.menu.items.filter(item => item.category === activeCategory);

  const handleClose = () => {
    setSelectedImage(null);
    setZoomLevel(1);
  };

  const toggleZoom = (e: MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(prev => prev === 1 ? 2 : 1);
  };

  return (
    <section id="menu" className="py-32 bg-lulu-terracotta relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-lulu-dark font-bold mb-6">The Gastronomy</h2>
          <h3 className="text-5xl md:text-7xl font-serif text-brass">Mediterranean Flavors</h3>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-20 border-b border-lulu-dark/10 pb-6">
          {content.menu.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold pb-6 transition-all relative ${
                activeCategory === cat ? 'text-lulu-dark' : 'text-lulu-dark/40 hover:text-lulu-dark'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-1 bg-lulu-brass"
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
                className="group p-8 rounded-2xl transition-all hover:bg-white/5 hover:dramatic-shadow"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {item.image && (
                    <div 
                      className="w-full md:w-1/3 h-48 rounded-xl overflow-hidden shadow-lg cursor-zoom-in relative group/img"
                      onClick={() => setSelectedImage(item.image)}
                    >
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform group-hover/img:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize2 className="text-white" size={20} />
                      </div>
                    </div>
                  )}
                  <div className="flex-grow">
                    <div className="flex justify-between items-baseline mb-4">
                      <h4 className="text-2xl font-serif text-lulu-dark group-hover:text-lulu-brass transition-colors">
                        {item.name}
                      </h4>
                      <div className="h-px flex-grow mx-4 border-b border-dotted border-lulu-dark/20" />
                      <span className="text-lulu-dark font-bold tracking-tighter">₦{item.price.toLocaleString()}</span>
                    </div>
                    <p className="text-lulu-dark/80 font-light text-base leading-relaxed mb-6 drop-shadow-sm">
                      {item.description}
                    </p>
                    <div className="flex gap-3">
                      {item.badges.map(badge => (
                        <span key={badge} className="text-[8px] uppercase tracking-[0.2em] font-bold px-3 py-1 bg-lulu-dark/5 text-lulu-dark/70 rounded-full border border-lulu-dark/10">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 italic font-serif text-sm">
            * All prices are inclusive of VAT and service charge.
          </p>
        </div>
      </div>

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
                alt="Menu Item"
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
    </section>
  );
}
