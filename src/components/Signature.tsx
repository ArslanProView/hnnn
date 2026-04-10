import { motion } from 'motion/react';

export default function Signature() {
  return (
    <section id="experience" className="py-24 bg-black relative overflow-hidden">
      {/* Parallax Background Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-gold font-display tracking-widest uppercase">The Signature Experience</h3>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              WHERE FIRE MEETS <br />
              <span className="gold-gradient-text italic">TRADITION</span>
            </h2>
            <p className="text-beige/70 text-lg font-light leading-relaxed">
              At HN FOODS, we don't just serve food; we curate an atmosphere. Our open-fire kitchens and traditional tandoors are the heart of our restaurant, where the crackle of charcoal and the aroma of fresh spices create a symphony for the senses.
            </p>
            
            <ul className="space-y-4">
              {[
                'Traditional Shinwari Open-Fire Cooking',
                'Authentic Multani Clay Pot (Handi) Heritage',
                'Premium Hand-Picked Mutton & Spices',
                'Royal Family-Friendly Fine Dining Ambiance'
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 text-beige/90"
                >
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span className="text-sm uppercase tracking-widest">{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="pt-8">
              <button className="btn-gold">View Gallery</button>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <img 
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
                alt="Cooking" 
                className="rounded-lg h-80 w-full object-cover border border-white/10"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1599307767316-776533299fdc?q=80&w=2070&auto=format&fit=crop" 
                alt="Spices" 
                className="rounded-lg h-48 w-full object-cover border border-white/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 pt-12"
            >
              <img 
                src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2064&auto=format&fit=crop" 
                alt="Dining" 
                className="rounded-lg h-48 w-full object-cover border border-white/10"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=1935&auto=format&fit=crop" 
                alt="Plating" 
                className="rounded-lg h-80 w-full object-cover border border-white/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
