import React from 'react';
    import { motion } from 'framer-motion';
    import { BrainCircuit } from 'lucide-react';
    import { Button } from '@/components/ui/button';

    const Header = ({ navItems }) => {
      const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      return (
        <motion.header 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="sticky top-0 z-50 bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img 
              src="/logo 2.png" 
              alt="Karttos Logo" 
              style={{ width: '230px', height: 'auto' }}
            />
                {/* <span className="ml-3 text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-secondary to-white">
                  KRATTOS AI
                </span> */}
              </motion.div>
              <nav className="hidden md:flex space-x-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-black hover:text-gray-700 transition-colors duration-300 font-medium"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
            </div>
          </div>
        </motion.header>
      );
    };

    export default Header;