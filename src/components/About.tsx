import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-template-columns-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-lg overflow-hidden border border-gold/20">
            <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop" 
              alt="Authentic Pakistani Cooking" 
              className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 bg-gold p-8 rounded-lg shadow-2xl z-20 hidden lg:block">
            <p className="text-black font-display font-bold text-3xl leading-none">EST.</p>
            <p className="text-black font-display font-bold text-5xl leading-none">2018</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-gold font-display tracking-widest uppercase mb-4">The Visionary</h3>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
            HASEEB NIAZI'S <br />
            <span className="gold-gradient-text italic">CULINARY ODYSSEY</span>
          </h2>
          
          <div className="space-y-6 text-beige/70 text-lg leading-relaxed font-light">
            <p>
              "HN FOODS was born from a desire to preserve the vanishing art of traditional Pakistani cooking. My mission is to serve not just food, but a piece of our history." — <span className="text-gold font-medium italic">Haseeb Niazi</span>
            </p>
            <p>
              Our journey began in the rugged terrains of the frontier, where the Shinwari tribes perfected the art of open-fire cooking. We brought those secrets to the heart of Punjab, blending them with the rich, aromatic heritage of Multan.
            </p>
            <p>
              Every <span className="text-gold">Rangha Gosht</span> we serve is a tribute to Zubaida Khanam's traditional recipes, ensuring that the authentic taste of Pakistan remains alive for generations to come.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <p className="text-gold font-display text-4xl font-bold mb-1">100%</p>
              <p className="text-xs uppercase tracking-widest text-beige/50">Authentic Recipes</p>
            </div>
            <div>
              <p className="text-gold font-display text-4xl font-bold mb-1">3</p>
              <p className="text-xs uppercase tracking-widest text-beige/50">Premium Branches</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
