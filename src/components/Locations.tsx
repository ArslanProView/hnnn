import { motion } from 'motion/react';
import { MapPin, Phone, ExternalLink } from 'lucide-react';

const branches = [
  {
    city: 'Lahore',
    address: '104-B MM Alam Road, Gulberg III',
    phone: '+92-309-3336703',
    mapUrl: 'https://www.google.com/maps/search/104-B+MM+Alam+Road,+Gulberg+III+Lahore',
    image: 'https://images.unsplash.com/photo-1625228194630-74883952143b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    city: 'Islamabad',
    address: 'Plot 18, F-6 Markaz',
    phone: '+92-304-1110915',
    mapUrl: 'https://www.google.com/maps/search/Plot+18,+F-6+Markaz+Islamabad',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop'
  },
  {
    city: 'Multan',
    address: 'Lalazar Colony, Old Bahawalpur Road',
    phone: '+92-309-3336700',
    mapUrl: 'https://www.google.com/maps/search/Lalazar+Colony,+Old+Bahawalpur+Road+Multan',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Locations() {
  return (
    <section id="locations" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-display tracking-widest uppercase mb-4"
          >
            Visit Us
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold"
          >
            OUR <span className="gold-gradient-text italic">BRANCHES</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative overflow-hidden rounded-xl bg-charcoal border border-white/5 hover:border-gold/30 transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={branch.image} 
                  alt={branch.city} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-3xl font-display font-bold text-white">{branch.city}</h3>
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="flex items-start gap-4 text-beige/70">
                  <MapPin className="text-gold shrink-0" size={20} />
                  <p className="text-sm leading-relaxed">{branch.address}</p>
                </div>
                <div className="flex items-center gap-4 text-beige/70">
                  <Phone className="text-gold shrink-0" size={20} />
                  <p className="text-sm">{branch.phone}</p>
                </div>
                
                <div className="pt-4 flex gap-4">
                  <a 
                    href={branch.mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 btn-outline-gold !py-2 !px-4 text-[10px] flex items-center justify-center gap-2"
                  >
                    View Map <ExternalLink size={12} />
                  </a>
                  <a 
                    href={`tel:${branch.phone.replace(/-/g, '')}`}
                    className="flex-1 btn-gold !py-2 !px-4 text-[10px] flex items-center justify-center gap-2"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
