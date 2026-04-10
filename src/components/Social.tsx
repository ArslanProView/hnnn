import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const instagramPosts = [
  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?q=80&w=2010&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1974&auto=format&fit=crop'
];

export default function Social() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold font-display tracking-widest uppercase mb-4"
            >
              Join Our Community
            </motion.h3>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold"
            >
              FOLLOW <span className="gold-gradient-text italic">@HNFOODSPK</span>
            </motion.h2>
          </div>
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/hnfoodspk/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-gold !py-3 !px-10"
            >
              Follow Us
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-square overflow-hidden relative group cursor-pointer"
            >
              <img 
                src={post} 
                alt="Instagram Post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-white" size={32} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center gap-12">
          <div className="text-center">
            <p className="text-gold font-display text-3xl font-bold mb-1">123K+</p>
            <p className="text-[10px] uppercase tracking-widest text-beige/50">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-gold font-display text-3xl font-bold mb-1">50K+</p>
            <p className="text-[10px] uppercase tracking-widest text-beige/50">Check-ins</p>
          </div>
          <div className="text-center">
            <p className="text-gold font-display text-3xl font-bold mb-1">4.8</p>
            <p className="text-[10px] uppercase tracking-widest text-beige/50">Avg Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
