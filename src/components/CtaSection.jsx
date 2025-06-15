import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { ArrowRightCircle } from 'lucide-react';

    const CtaSection = () => {
      const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

      return (
        <section className="py-20 md:py-32 bg-gradient-to-r from-blue-900 to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary via-[#50e3c2] to-white">Revolutionize</span> Your ERP?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto mb-10">
                Discover how KRATTOS AI can tailor an intelligent ERP system to meet your specific business needs and drive unprecedented growth.
              </p>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(31, 197, 203, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-secondary to-[#1abc9c] hover:from-[#1abc9c] hover:to-secondary text-primary-foreground text-lg px-10 py-6 rounded-lg shadow-xl"
                  onClick={scrollToContact}
                >
                  Schedule a Consultation <ArrowRightCircle className="ml-3 h-6 w-6" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      );
    };

    export default CtaSection;