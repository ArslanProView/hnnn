import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Flame } from 'lucide-react';

const categories = [
  'All',
  'Signature',
  'Shinwari',
  'Mutton',
  'Chicken',
  'BBQ',
  'Rice',
  'Tandoor',
  'Desserts'
];

const menuItems = [
  {
    id: 1,
    name: 'Rangha Gosht',
    price: '4,900',
    category: 'Signature',
    description: 'The legendary HN Signature. Slow-cooked mutton in a rich, velvety marrow gravy with traditional Multani spices.',
    isBestSeller: true,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Dumba Karahi (Shinwari)',
    price: '4,200',
    category: 'Shinwari',
    description: 'Authentic Shinwari Karahi cooked in its own fat (Lia) with fresh tomatoes and green chilies. No extra oil.',
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Namkeen Roast',
    price: '3,800',
    category: 'Mutton',
    description: 'Tender mutton pieces steam-roasted with salt and black pepper. A true taste of the frontier.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Zubaida Khanam Pulao',
    price: '1,950',
    category: 'Rice',
    description: 'Our heritage recipe. Long-grain basmati rice cooked in mutton yakhni, topped with caramelized carrots and raisins.',
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?q=80&w=2010&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'HN Special BBQ Platter',
    price: '5,500',
    category: 'BBQ',
    description: 'A royal assortment of Lamb Chops, Seekh Kebabs, Malai Boti, and Fish Tikka served on a sizzling platter.',
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Mutton Handi (Multani)',
    price: '3,600',
    category: 'Mutton',
    description: 'Boneless mutton cooked in a clay pot with a creamy tomato and yogurt base. Rich and aromatic.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 7,
    name: 'Multani Sohan Halwa',
    price: '1,200',
    category: 'Desserts',
    description: 'The authentic sticky, nutty, and rich traditional sweet from Multan. Made with pure desi ghee.',
    image: 'https://images.unsplash.com/photo-1589113103503-496da74e61f2?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 8,
    name: 'Afghani Naan',
    price: '250',
    category: 'Tandoor',
    description: 'Large, fluffy naan baked in a traditional tandoor, sprinkled with sesame seeds.',
    image: 'https://images.unsplash.com/photo-1601356616077-695728ecf769?q=80&w=1974&auto=format&fit=crop'
  }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-display tracking-widest uppercase mb-4"
          >
            Culinary Masterpieces
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold mb-12"
          >
            THE <span className="gold-gradient-text italic">ROYAL MENU</span>
          </motion.h2>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === cat 
                    ? 'bg-gold text-black border-gold' 
                    : 'bg-transparent text-beige/60 border-white/10 hover:border-gold/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card group overflow-hidden flex flex-col h-full"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {item.isBestSeller && (
                      <div className="bg-gold text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase flex items-center gap-1 shadow-lg">
                        <Star size={10} fill="currentColor" /> Most Loved
                      </div>
                    )}
                    {item.isChefSpecial && (
                      <div className="bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase flex items-center gap-1 shadow-lg">
                        <Flame size={10} fill="currentColor" /> Chef's Special
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-gold transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-gold font-bold text-lg">
                      Rs. {item.price}
                    </span>
                  </div>
                  <p className="text-beige/60 text-xs leading-relaxed font-light mb-6 flex-grow">
                    {item.description}
                  </p>
                  <button className="w-full py-2 border border-gold/30 text-gold text-[10px] uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300">
                    Order via FoodPanda
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-20 text-center">
          <p className="text-beige/40 text-sm italic mb-8">
            * Prices are subject to change and government taxes.
          </p>
          <a href="#locations" className="btn-gold">
            Book a Table
          </a>
        </div>
      </div>
    </section>
  );
}
