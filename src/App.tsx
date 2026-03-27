/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import VideoGallery from './components/VideoGallery';
import PrivateEvents from './components/PrivateEvents';
import Membership from './components/Membership';
import MapSection from './components/MapSection';
import ContactSection from './components/ContactSection';
import ReservationForm from './components/ReservationForm';
import Footer from './components/Footer';
import LuluSunday from './pages/LuluSunday';
import { motion, useScroll, useSpring } from 'framer-motion';

const PlantSilhouette = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={`absolute w-64 h-64 plant-silhouette ${className}`}>
    <path
      fill="currentColor"
      d="M100,10 C120,40 150,60 180,80 C150,100 120,120 100,150 C80,120 50,100 20,80 C50,60 80,40 100,10 Z"
      className="text-lulu-dark"
    />
    <path
      fill="currentColor"
      d="M100,30 C115,55 140,70 165,85 C140,100 115,115 100,140 C85,115 60,100 35,85 C60,70 85,55 100,30 Z"
      className="text-lulu-dark opacity-80"
    />
  </svg>
);

function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-lulu-terracotta selection:bg-lulu-brass selection:text-white">
      {/* Golden Hour Overlay */}
      <div className="fixed inset-0 golden-hour-overlay z-40" />

      {/* Plant Silhouettes in Corners */}
      <PlantSilhouette className="top-0 left-0 -translate-x-1/4 -translate-y-1/4 rotate-45" />
      <PlantSilhouette className="bottom-0 right-0 translate-x-1/4 translate-y-1/4 -rotate-135" />
      <PlantSilhouette className="top-1/2 right-0 translate-x-1/2 -translate-y-1/2 rotate-90 opacity-10" />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-lulu-brass z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Status Bar (Live from Landmark) */}
        <div className="bg-lulu-dark/90 backdrop-blur-sm py-4 overflow-hidden whitespace-nowrap border-y border-white/5">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex items-center gap-10"
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 bg-lulu-gold rounded-full animate-pulse" />
                <span className="text-lulu-terracotta text-[9px] uppercase tracking-[0.4em] font-bold">
                  Live from Five Cowries, Falomo • Golden Hour Sessions • Reserve Your Cabana
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Menu Section */}
        <MenuSection />

        {/* Media/Moments Section */}
        <VideoGallery />

        {/* Private Events Section */}
        <PrivateEvents />

        {/* Membership Section */}
        <Membership />

        {/* Map/Location Section */}
        <MapSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Reservations Section */}
        <ReservationForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button (Mobile Only) */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <a 
          href="#reservations"
          className="bg-lulu-brass text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl ripple-hover border border-white/20"
        >
          <span className="text-[10px] font-bold uppercase tracking-tighter">Book</span>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sunday" element={<LuluSunday />} />
      </Routes>
    </Router>
  );
}
