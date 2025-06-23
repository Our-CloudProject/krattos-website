import React from 'react';
    import { motion } from 'framer-motion';
    import { Layers, CloudCog, BarChart3, SlidersHorizontal } from 'lucide-react';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Assuming Card component exists

    const features = [
      {
        icon: <Layers className="h-10 w-10 text-secondary mb-4" />,
        title: 'Modular ERP Architecture',
        description: 'Get adaptable, scalable ERP modules tailored to your project model — no rigid systems, just seamless fit.',
        color: 'secondary'
      },
      {
        icon: <CloudCog className="h-10 w-10 text-blue-400 mb-4" />,
        title: 'Cloud-Native & AI-Powered',
        description: 'Built on modern cloud infrastructure, our AI-first systems ensure security, scalability, and performance — anytime, anywhere.',
        color: 'blue-400'
      },
      {
        icon: <BarChart3 className="h-10 w-10 text-green-400 mb-4" />,
        title: 'Predictive Intelligence',
        description: 'Use AI to uncover risks, delays, and cost overruns before they happen — across schedules, procurement, and finance.',
        color: 'green-400'
      },
      {
        icon: <SlidersHorizontal className="h-10 w-10 text-purple-400 mb-4" />,
        title: 'Custom Integrations',
        description: 'Connect with existing systems like SAP, Oracle, Procore, and SharePoint for a unified, real-time view of your operations.',
        color: 'purple-400'
      },
    ];

    const FeaturesSection = () => {
      const featureVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.15,
            duration: 0.5,
            ease: "easeOut"
          },
        }),
      };

      return (
        <section className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-white">KRATTOS AI</span> Stands Out
              </h2>
              <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-16">
                We don't just offer software; we deliver intelligent solutions that adapt to your unique business challenges and drive tangible results.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.custom
                  key={index}
                  custom={index}
                  variants={featureVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Card className={`h-full glassmorphism border-t-4 border-${feature.color} shadow-xl hover:scale-105 transition-transform duration-300`}>
                    <CardHeader>
                      <div className={`flex items-center justify-center w-16 h-16 rounded-lg bg-${feature.color}/10 mb-4`}>
                        {React.cloneElement(feature.icon, { className: `h-8 w-8 text-${feature.color}`})}
                      </div>
                      <CardTitle className="text-xl font-semibold text-white">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.custom>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default FeaturesSection;