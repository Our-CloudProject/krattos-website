import React from 'react';
    import { motion } from 'framer-motion';
    import { Target, Users, Brain } from 'lucide-react';

    const AboutSection = () => {
      const cardVariants = {
        offscreen: { y: 50, opacity: 0 },
        onscreen: {
          y: 0,
          opacity: 1,
          transition: { type: "spring", stiffness: 50, damping: 20 }
        }
      };

      return (
        <section className="py-16 md:py-24 bg-gray-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.2 }}
            >
              <motion.h2 
                variants={cardVariants}
                className="text-3xl sm:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-white"
              >
                Our Mission & Approach
              </motion.h2>
              <motion.p 
                variants={cardVariants}
                className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12"
              >
                To transform how companies use data, processes, and people to deliver results — on time and on budget. We take a modular, client-centric approach, designing custom ERP architectures that integrate AI at every level.
              </motion.p>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div variants={cardVariants} className="p-8 rounded-xl glassmorphism shadow-2xl hover:shadow-secondary/30 transition-shadow duration-300">
                  <div className="flex items-center justify-center mb-6 w-16 h-16 rounded-full bg-secondary/20 text-secondary mx-auto">
                    <Target size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-center mb-3 text-white">Client-Centric Design</h3>
                  <p className="text-gray-400 text-center leading-relaxed">
                    We assess your business goals, workflows, and tech stack to design a custom ERP architecture tailored to your needs.
                  </p>
                </motion.div>

                <motion.div variants={cardVariants} className="p-8 rounded-xl glassmorphism shadow-2xl hover:shadow-primary/30 transition-shadow duration-300">
                  <div className="flex items-center justify-center mb-6 w-16 h-16 rounded-full bg-primary/20 text-primary mx-auto">
                    <Users size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-center mb-3 text-white">AI at Every Level</h3>
                  <p className="text-gray-400 text-center leading-relaxed">
                    From procurement automation and financial controls to predictive scheduling, our systems do more than manage — they think.
                  </p>
                </motion.div>

                <motion.div variants={cardVariants} className="p-8 rounded-xl glassmorphism shadow-2xl hover:shadow-purple-500/30 transition-shadow duration-300">
                  <div className="flex items-center justify-center mb-6 w-16 h-16 rounded-full bg-purple-500/20 text-purple-400 mx-auto">
                    <Brain size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-center mb-3 text-white">Purpose-Built Platforms</h3>
                  <p className="text-gray-400 text-center leading-relaxed">
                    Specializing in AI-powered, cloud-native ERPs for complex, project-driven environments like construction, logistics, and industrial services.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      );
    };

    export default AboutSection;