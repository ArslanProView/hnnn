import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      {/* Cinematic Background Image/Video Placeholder */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-slow-zoom"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop')`,
          filter: 'brightness(0.7)'
        }}
      />

      <div className="relative z-20 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-gold font-display text-lg md:text-2xl tracking-[0.3em] mb-4 uppercase">
            Taste of Pakistan
          </h2>
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-tight">
            AUTHENTIC <span className="gold-gradient-text italic">SHINWARI</span> <br />
            & MULTANI HERITAGE
          </h1>
          <p className="text-beige/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            From the legendary <span className="text-gold font-medium">Rangha Gosht</span> to the traditional <span className="text-gold font-medium">Dumba Karahi</span>, experience the culinary legacy of Haseeb Niazi.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a 
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gold w-full sm:w-auto"
            >
              Explore Menu
            </motion.a>
            <motion.a 
              href="#locations"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline-gold w-full sm:w-auto"
            >
              Find a Branch
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-gold/60">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-gold" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
