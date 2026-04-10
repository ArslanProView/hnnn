import { motion } from 'motion/react';
import { Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Locations from './components/Locations';
import Menu from './components/Menu';
import Signature from './components/Signature';
import Reviews from './components/Reviews';
import Social from './components/Social';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Locations />
        <Menu />
        <Signature />
        <Reviews />
        <Social />
      </main>
      <Footer />
      
      {/* Floating Action Button */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-8 right-8 z-50 md:hidden"
      >
        <a 
          href="tel:+923093336703"
          className="w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-2xl text-black"
        >
          <Phone size={24} />
        </a>
      </motion.div>
    </div>
  );
}
