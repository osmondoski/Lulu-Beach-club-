import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import content from '../data/content.json';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isSundayPage = location.pathname === '/sunday';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Club', href: '/#home' },
    { name: 'Gastronomy', href: '/#menu' },
    { name: 'Moments', href: '/#moments' },
    { name: 'Sunday Ritual', href: '/sunday', isSpecial: true },
    { name: 'Membership', href: '/#membership' },
    { name: 'Events', href: '/#events' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Reservations', href: '/#reservations' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || isSundayPage ? 'bg-lulu-terracotta/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="group">
          <h1 className={`text-2xl font-serif tracking-widest transition-all duration-300 ${
            scrolled || isSundayPage ? 'text-brass scale-90' : 'text-white drop-shadow-lg'
          }`}>
            LULU <span className={`${scrolled || isSundayPage ? 'text-lulu-dark' : 'text-lulu-gold'} italic`}>BEACH</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            link.href.startsWith('/') && !link.href.includes('#') ? (
              <Link
                key={link.name}
                to={link.href}
                className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-colors hover:text-lulu-brass ${
                  link.isSpecial ? 'text-lulu-brass' : (scrolled || isSundayPage ? 'text-lulu-dark' : 'text-white')
                }`}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-colors hover:text-lulu-brass ${
                  scrolled || isSundayPage ? 'text-lulu-dark' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            )
          ))}
          <a 
            href="/#reservations"
            className="bg-lulu-brass text-white px-8 py-3 text-[10px] uppercase tracking-[0.3em] font-bold rounded-full ripple-hover transition-all hover:scale-105 active:scale-95 border border-white/10 shadow-lg"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 transition-colors ${scrolled || isSundayPage ? 'text-lulu-dark' : 'text-white'}`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                link.href.startsWith('/') && !link.href.includes('#') ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-serif transition-colors ${
                      link.isSpecial ? 'text-lulu-brass' : 'text-lulu-dark hover:text-lulu-gold'
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-serif text-lulu-dark hover:text-lulu-gold transition-colors"
                  >
                    {link.name}
                  </a>
                )
              ))}
              <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                <div className="flex space-x-4">
                  <a href={content.footer.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-lulu-dark hover:text-lulu-gold transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="https://maps.google.com/?q=Five+Cowries+Falomo+Ikoyi+Lagos" target="_blank" rel="noopener noreferrer" className="text-lulu-dark hover:text-lulu-gold transition-colors">
                    <MapPin size={20} />
                  </a>
                </div>
                <a 
                  href="/#reservations"
                  onClick={() => setIsOpen(false)}
                  className="bg-lulu-dark text-white px-8 py-3 text-sm uppercase tracking-widest font-bold rounded-full"
                >
                  Reserve
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
