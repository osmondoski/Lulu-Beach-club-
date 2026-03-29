import { useState, MouseEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';
import content from '../data/content.json';

interface Moment {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  images?: string[];
  videoUrl?: string;
}

interface MomentCardProps {
  moment: Moment;
  onClick: () => void;
  key?: number | string;
}

function MomentCard({ moment, onClick }: MomentCardProps) {
  const [currentThumbIndex, setCurrentThumbIndex] = useState(0);
  const hasMultipleImages = moment.images && moment.images.length > 1;

  useEffect(() => {
    if (!hasMultipleImages) return;

    const interval = setInterval(() => {
      setCurrentThumbIndex((prev) => (prev + 1) % moment.images!.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [hasMultipleImages, moment.images]);

  const displayImage = hasMultipleImages ? moment.images![currentThumbIndex] : moment.thumbnail;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="relative aspect-[4/5] group cursor-pointer overflow-hidden rounded-3xl dramatic-shadow"
      onClick={onClick}
    >
      <AnimatePresence mode="wait">
        <motion.img 
          key={displayImage}
          src={displayImage} 
          alt={moment.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src = "https://i.postimg.cc/dt069kD7/1774582823554.jpg";
          }}
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-gradient-to-t from-lulu-dark/90 via-lulu-dark/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      
      {hasMultipleImages && (
        <div className="absolute top-6 right-6 flex gap-1.5 z-20">
          {moment.images!.map((_, idx) => (
            <div 
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${idx === currentThumbIndex ? 'bg-lulu-gold scale-125' : 'bg-white/30'}`}
            />
          ))}
        </div>
      )}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/30 transform scale-0 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
          <Maximize2 className="text-white" size={24} />
        </div>
      </div>
      
      <div className="absolute bottom-8 left-8 right-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-all duration-700">
        <span className="text-[10px] uppercase tracking-[0.5em] font-black text-lulu-gold drop-shadow-md block mb-2">
          {moment.category}
        </span>
        <h4 className="text-2xl font-serif leading-tight drop-shadow-lg group-hover:text-lulu-gold transition-colors">
          {moment.title}
        </h4>
      </div>
    </motion.div>
  );
}

export default function VideoGallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<null | Moment>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const moments = content.moments.videos as Moment[];

  const filteredMoments = activeFilter === 'All' 
    ? moments 
    : moments.filter(v => v.category === activeFilter);

  const handleClose = () => {
    setSelectedImage(null);
    setZoomLevel(1);
    setCurrentImageIndex(0);
  };

  const toggleZoom = (e: MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(prev => prev === 1 ? 2 : 1);
  };

  const nextImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedImage?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedImage.images!.length);
      setZoomLevel(1);
    }
  };

  const prevImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedImage?.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedImage.images!.length) % selectedImage.images!.length);
      setZoomLevel(1);
    }
  };

  const currentImageUrl = selectedImage?.images 
    ? selectedImage.images[currentImageIndex] 
    : selectedImage?.thumbnail;

  return (
    <section id="moments" className="py-32 bg-lulu-rose/20 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-lulu-dark font-bold mb-6">Lulu Moments</h2>
            <h3 className="text-5xl md:text-7xl font-serif text-brass">Captured Energy</h3>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {content.moments.filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-3 rounded-full text-[9px] uppercase tracking-[0.3em] font-bold border transition-all ${
                  activeFilter === filter 
                    ? 'bg-lulu-brass text-white border-lulu-brass shadow-lg' 
                    : 'bg-white/5 text-lulu-dark/60 border-lulu-dark/10 hover:border-lulu-brass hover:text-lulu-dark'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredMoments.map((moment) => (
              <MomentCard 
                key={moment.id} 
                moment={moment} 
                onClick={() => setSelectedImage(moment)} 
              />
            ))}
          </AnimatePresence>
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
              {selectedImage.images && selectedImage.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 md:left-10 z-[120] p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all border border-white/20"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 md:right-10 z-[120] p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all border border-white/20"
                  >
                    <ChevronRight size={32} />
                  </button>
                  
                  {/* Indicators */}
                  <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-2 z-[120]">
                    {selectedImage.images.map((_, idx) => (
                      <div 
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-lulu-gold w-6' : 'bg-white/30'}`}
                      />
                    ))}
                  </div>
                </>
              )}

              <motion.img
                key={currentImageUrl}
                src={currentImageUrl}
                alt={selectedImage.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, scale: zoomLevel }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ type: "spring", damping: 25, stiffness: 150 }}
                className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all ${zoomLevel > 1 ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                onClick={toggleZoom}
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center z-[110] pointer-events-none">
              <h4 className="text-white text-2xl font-serif mb-2">{selectedImage.title}</h4>
              <p className="text-lulu-gold text-[10px] uppercase tracking-[0.4em] font-bold">{selectedImage.category}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
