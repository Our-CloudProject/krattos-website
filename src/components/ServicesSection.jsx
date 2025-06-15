import React from 'react';
    import { motion } from 'framer-motion';
    import { Layers, CloudCog, BarChart3, SlidersHorizontal } from 'lucide-react';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

    const services = [
      {
        icon: <Layers className="h-10 w-10 text-secondary mb-4" />,
        title: 'Modular ERP Architecture',
        description: 'Flexible, adaptable systems designed to grow with your business. No one-size-fits-all solutions.',
        color: 'secondary'
      },
      {
        icon: <CloudCog className="h-10 w-10 text-blue-400 mb-4" />,
        title: 'Cloud-Native & AI-Powered',
        description: 'Leverage the scalability of the cloud and the intelligence of AI for unparalleled efficiency.',
        color: 'blue-400'
      },
      {
        icon: <BarChart3 className="h-10 w-10 text-green-400 mb-4" />,
        title: 'Predictive Intelligence',
        description: 'Gain insights from predictive scheduling, project intelligence, and automated financial controls.',
        color: 'green-400'
      },
      {
        icon: <SlidersHorizontal className="h-10 w-10 text-purple-400 mb-4" />,
        title: 'Custom Integrations',
        description: 'Seamlessly integrate with your current tech stack for a unified operational view.',
        color: 'purple-400'
      },
    ];

    const ServicesSection = () => {
      const serviceVariants = {
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
                Our Core <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-white">Services</span>
              </h2>
              <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-16">
                We deliver intelligent solutions that adapt to your unique business challenges and drive tangible results through these key service areas.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.custom
                  key={index}
                  custom={index}
                  variants={serviceVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Card className={`h-full glassmorphism border-t-4 border-${service.color} shadow-xl hover:scale-105 transition-transform duration-300`}>
                    <CardHeader>
                      <div className={`flex items-center justify-center w-16 h-16 rounded-lg bg-${service.color}/10 mb-4`}>
                        {React.cloneElement(service.icon, { className: `h-8 w-8 text-${service.color}`})}
                      </div>
                      <CardTitle className="text-xl font-semibold text-white">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.custom>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default ServicesSection;