import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import content from '../data/content.json';

export default function Footer() {
  return (
    <footer className="bg-lulu-terracotta pt-32 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          {/* Brand */}
          <div className="space-y-8">
            <h2 className="text-4xl font-serif tracking-widest text-brass">
              LULU <span className="text-lulu-dark italic">BEACH</span>
            </h2>
            <p className="text-lulu-dark/60 font-light leading-relaxed text-lg">
              Mediterranean Minimalist meets Lagos Energy. The premier beach club destination at Landmark Village.
            </p>
            <div className="flex space-x-8">
              <a href={content.footer.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-lulu-dark/40 hover:text-lulu-brass transition-all hover:scale-110">
                <Instagram size={24} />
              </a>
              <a href={content.footer.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-lulu-dark/40 hover:text-lulu-brass transition-all hover:scale-110">
                <Facebook size={24} />
              </a>
              <a href={content.footer.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-lulu-dark/40 hover:text-lulu-brass transition-all hover:scale-110">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-lulu-dark mb-10">Quick Links</h4>
            <ul className="space-y-5">
              {['The Club', 'Gastronomy', 'Moments', 'Sunday Ritual', 'Membership', 'Events', 'Contact', 'Reservations'].map(link => (
                <li key={link}>
                  <a 
                    href={link === 'Sunday Ritual' ? '/sunday' : `/#${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-lulu-dark/70 hover:text-lulu-brass transition-colors font-medium text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-lulu-dark mb-10">Contact Us</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <MapPin className="text-lulu-brass shrink-0" size={20} />
                <span className="text-lulu-dark/60 font-light text-base leading-relaxed">{content.footer.address}</span>
              </li>
              <li className="flex items-center gap-5">
                <Phone className="text-lulu-brass shrink-0" size={20} />
                <span className="text-lulu-dark/60 font-light text-base">{content.footer.phone}</span>
              </li>
              <li className="flex items-center gap-5">
                <Mail className="text-lulu-brass shrink-0" size={20} />
                <span className="text-lulu-dark/60 font-light text-base">{content.footer.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-lulu-dark mb-10">Newsletter</h4>
            <p className="text-lulu-dark/60 font-light text-base mb-8">Join the Lulu circle for exclusive event invites.</p>
            <form className="relative" onSubmit={e => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-lulu-dark/5 border border-lulu-dark/10 rounded-2xl px-8 py-5 text-sm outline-none focus:ring-2 focus:ring-lulu-brass transition-all placeholder:text-lulu-dark/20"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-lulu-dark text-white px-8 rounded-xl text-[9px] uppercase tracking-[0.3em] font-bold hover:bg-lulu-brass transition-all shadow-lg">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-xs font-light">
            © {new Date().getFullYear()} Lulu Beach Club Lagos. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-400 hover:text-lulu-dark text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-lulu-dark text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
