import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Ahmed Khan',
    role: 'Food Critic',
    text: 'The Rangha Gosht is absolutely divine. The depth of flavor and the tenderness of the meat are unmatched in Lahore. A truly royal experience.',
    rating: 5
  },
  {
    name: 'Sara Malik',
    role: 'Regular Guest',
    text: 'Best Shinwari Karahi in Islamabad! The family environment is warm and welcoming. Even during peak hours, the quality remains consistent.',
    rating: 5
  },
  {
    name: 'Zainab Qureshi',
    role: 'Local Guide',
    text: 'Authentic Multani flavors right in the heart of the city. The Sohan Halwa is the perfect end to a heavy traditional meal.',
    rating: 4
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-display tracking-widest uppercase mb-4"
          >
            Guest Experiences
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold"
          >
            VOICES OF <span className="gold-gradient-text italic">DELIGHT</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card p-10 relative group hover:border-gold/40 transition-all duration-500"
            >
              <Quote className="absolute top-6 right-6 text-gold/20 group-hover:text-gold/40 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < review.rating ? 'text-gold fill-gold' : 'text-white/20'} 
                  />
                ))}
              </div>

              <p className="text-beige/80 text-lg italic font-light leading-relaxed mb-8">
                "{review.text}"
              </p>

              <div>
                <h4 className="text-white font-display font-bold tracking-widest uppercase text-sm">{review.name}</h4>
                <p className="text-gold text-[10px] uppercase tracking-[0.2em]">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Insights Summary */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-white/5 p-8 rounded-lg border-l-4 border-green-500">
            <h4 className="text-green-500 font-display font-bold mb-4 uppercase tracking-widest">What Guests Love</h4>
            <ul className="space-y-2 text-beige/60 text-sm">
              <li>✔ Authentic Traditional Flavors</li>
              <li>✔ Generous Portion Sizes</li>
              <li>✔ Premium Family Ambiance</li>
              <li>✔ Consistency in Taste</li>
            </ul>
          </div>
          <div className="bg-white/5 p-8 rounded-lg border-l-4 border-gold">
            <h4 className="text-gold font-display font-bold mb-4 uppercase tracking-widest">Our Commitment</h4>
            <p className="text-beige/60 text-sm leading-relaxed">
              We acknowledge peak-time rushes and service delays. Our team is constantly expanding to ensure your royal experience is as swift as it is delicious.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
