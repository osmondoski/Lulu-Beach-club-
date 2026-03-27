import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, MapPin, Send } from 'lucide-react';
import content from '../data/content.json';

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-lulu-brass font-bold mb-6">Get in Touch</h2>
            <h3 className="text-5xl md:text-7xl font-serif text-lulu-dark mb-8 leading-tight">
              Connect with <span className="italic text-lulu-brass">Lulu</span>
            </h3>
            <p className="text-lulu-dark/70 text-lg font-light leading-relaxed mb-12 max-w-xl">
              Whether you're planning a private celebration or have a question about our menu, we're here to help. Reach out to us through any of our channels.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center gap-8 group">
                <div className="w-14 h-14 bg-lulu-dark text-white rounded-2xl flex items-center justify-center group-hover:bg-lulu-brass transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-lulu-dark/40 mb-1">Call Us</h4>
                  <p className="text-xl font-serif text-lulu-dark">{content.footer.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-8 group">
                <div className="w-14 h-14 bg-lulu-dark text-white rounded-2xl flex items-center justify-center group-hover:bg-lulu-brass transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-lulu-dark/40 mb-1">Email Us</h4>
                  <p className="text-xl font-serif text-lulu-dark">{content.footer.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-8 group">
                <div className="w-14 h-14 bg-lulu-dark text-white rounded-2xl flex items-center justify-center group-hover:bg-lulu-brass transition-colors">
                  <Instagram size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-lulu-dark/40 mb-1">Follow Us</h4>
                  <p className="text-xl font-serif text-lulu-dark">@{content.footer.instagram}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-lulu-terracotta/20 p-10 md:p-16 rounded-[3rem] border border-lulu-dark/5"
          >
            <h4 className="text-2xl font-serif text-lulu-dark mb-10">Send a Message</h4>
            <form className="space-y-8" onSubmit={e => e.preventDefault()}>
              <div className="space-y-3">
                <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-lulu-dark/50">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white border-none rounded-2xl px-6 py-4 text-lulu-dark focus:ring-2 focus:ring-lulu-brass transition-all outline-none"
                />
              </div>
              
              <div className="space-y-3">
                <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-lulu-dark/50">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white border-none rounded-2xl px-6 py-4 text-lulu-dark focus:ring-2 focus:ring-lulu-brass transition-all outline-none"
                />
              </div>
              
              <div className="space-y-3">
                <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-lulu-dark/50">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-white border-none rounded-2xl px-6 py-4 text-lulu-dark focus:ring-2 focus:ring-lulu-brass transition-all outline-none resize-none"
                />
              </div>
              
              <button className="w-full bg-lulu-dark text-white py-5 rounded-2xl text-[10px] uppercase tracking-[0.4em] font-bold flex items-center justify-center gap-4 hover:bg-lulu-brass transition-all group">
                Send Message
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
