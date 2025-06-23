import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { ArrowRight, Zap } from 'lucide-react';

    const HeroSection = () => {
      const scrollToServices = () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
      
      const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }; 
      return (
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-transparent to-gray-900/80"></div>
          {/* <div className="absolute inset-0 opacity-10">
             <img  class="w-full h-full object-cover" alt="Abstract AI background pattern" src="https://images.unsplash.com/photo-1549925245-f20a1bac6454" />
          </div> */}
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
                <span className="block">More Than ERP</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary via-[#50e3c2] to-white">
                  Your Smartest Construction Manager
                </span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 mb-10">
                An AI-powered assistant that connects your project data, documents, and decisions — all in one place.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-secondary to-[#1abc9c] hover:from-[#1abc9c] hover:to-secondary text-primary-foreground shadow-lg transform transition-all duration-300 ease-in-out"
                    onClick={scrollToServices}
                  >
                    Discover Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-secondary to-[#1abc9c] hover:from-[#1abc9c] hover:to-secondary text-primary-foreground shadow-lg transform transition-all duration-300 ease-in-out"
                    onClick={scrollToContact}
                  >
                    Book a Free Demo <ArrowRight className="ml-2 h-5 w-8" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="absolute -bottom-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </section>
      );
    };

    export default HeroSection;