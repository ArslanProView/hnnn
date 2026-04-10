import { Instagram, Facebook, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-24 pb-12 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-display font-bold gold-gradient-text mb-8">HN FOODS</h2>
            <p className="text-beige/60 text-sm leading-relaxed mb-8 font-light">
              Experience the authentic royal flavors of Multani and Afghani Shinwari cuisine. A legacy of taste crafted by Haseeb Niazi.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/hnfoodspk/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/hnfoodspk/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest text-sm mb-8">Quick Links</h4>
            <ul className="space-y-4 text-beige/60 text-sm">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">Our Story</a></li>
              <li><a href="#menu" className="hover:text-gold transition-colors">Royal Menu</a></li>
              <li><a href="#locations" className="hover:text-gold transition-colors">Find a Branch</a></li>
              <li><a href="#experience" className="hover:text-gold transition-colors">The Experience</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest text-sm mb-8">Contact Us</h4>
            <ul className="space-y-4 text-beige/60 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold" />
                <span>+92-309-3336703</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold" />
                <span>info@hnfoods.pk</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold shrink-0" />
                <span>104-B MM Alam Road, Gulberg III, Lahore</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest text-sm mb-8">Newsletter</h4>
            <p className="text-beige/60 text-xs mb-6">Subscribe to receive updates on new dishes and exclusive offers.</p>
            <div className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button className="btn-gold !py-3">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-beige/40 text-[10px] uppercase tracking-widest">
            © 2026 HN FOODS. All Rights Reserved. Crafted by Haseeb Niazi.
          </p>
          <div className="flex gap-8 text-beige/40 text-[10px] uppercase tracking-widest">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
