import { Calendar } from 'lucide-react';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Mock image import
const farmToFork = "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

// UI Components
const Badge = ({ children, className = "", ...props }) => (
  <span 
    className={`inline-flex items-center rounded-full px-4 py-1 text-sm font-medium ${className}`}
    {...props}
  >
    {children}
  </span>
);

const Card = ({ children, className = "", ...props }) => (
  <div 
    className={`rounded-xl bg-white ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div 
    className={`p-6 ${className}`}
    {...props}
  >
    {children}
  </div>
);

const timeline = [
  {
    year: "1994",
    title: "The Beginning",
    description: "Started as a small family business in Kuttanad with a vision to preserve traditional Kerala cuisine"
  },
  {
    year: "2000",
    title: "First Restaurant",
    description: "Opened our first Avees Puttu House, serving authentic Kerala breakfast to locals and tourists"
  },
  {
    year: "2005",
    title: "Product Expansion",
    description: "Launched our range of premium flours and instant mixes for home cooking"
  },
  {
    year: "2010",
    title: "Organic Certification",
    description: "Received organic certification for our farming practices and production methods"
  },
  {
    year: "2015",
    title: "Heritage Resort",
    description: "Opened our heritage resort to showcase the complete Kuttanad experience"
  },
  {
    year: "2020",
    title: "Digital Presence",
    description: "Launched online ordering and expanded to major e-commerce platforms"
  },
  {
    year: "2024",
    title: "30 Years Strong",
    description: "Celebrating three decades of preserving Kerala's culinary heritage"
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const dotVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

function CompanyHistory() {
  const timelineRef = useRef(null);
  const heroRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: false, margin: "-100px" });
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-gradient-to-b from-amber-900 to-amber-700 text-white"
        ref={heroRef}
      >
        <motion.div 
          className="container mx-auto px-4"
          variants={heroVariants}
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
        >
          <motion.div className="text-center max-w-4xl mx-auto" variants={heroItemVariants}>
            <Badge className="mb-6 bg-amber-100 text-amber-900 font-medium">
              Since 1994
            </Badge>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={heroItemVariants}
            >
              Our Story
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90 leading-relaxed"
              variants={heroItemVariants}
            >
              For three decades, we've been preserving the authentic flavors of Kuttanad, 
              bringing you the finest traditional Kerala cuisine through our restaurants, 
              products, and heritage experiences.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Farm to Fork Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From Farm to Fork
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey begins in the fertile fields of Kuttanad, where we work directly 
                with local farmers to source the finest grains and ingredients. Every product 
                tells the story of Kerala's rich agricultural heritage.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span>Direct partnerships with 200+ local farmers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span>100% organic farming practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span>Traditional stone-grinding methods</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span>Zero preservatives or artificial additives</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <motion.img 
                src={farmToFork} 
                alt="Farm to Fork Process"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-semibold">Kuttanad Rice Fields</p>
                <p className="text-sm opacity-90">Where our journey begins</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50" ref={timelineRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Our Journey
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Three decades of growth, innovation, and unwavering commitment to Kerala's culinary traditions
            </motion.p>
          </div>

          <div className="relative">
            {/* Animated Timeline Line */}
            <motion.div 
              className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-amber-600 origin-top"
              variants={lineVariants}
              initial="hidden"
              animate={isTimelineInView ? "visible" : "hidden"}
            />

            <motion.div 
              className="space-y-12"
              variants={containerVariants}
              initial="hidden"
              animate={isTimelineInView ? "visible" : "hidden"}
            >
              {timeline.map((item, index) => (
                <motion.div 
                  key={item.year} 
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  variants={itemVariants}
                >
                  {/* Animated Timeline Dot */}
                  <motion.div 
                    className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-amber-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
                    variants={dotVariants}
                  >
                    <Calendar className="w-4 h-4 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="border border-gray-200 shadow-sm">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-3 mb-3">
                            <Badge className="bg-amber-600 text-white text-lg font-semibold px-3 py-1">
                              {item.year}
                            </Badge>
                          </div>
                          <h3 className="font-semibold text-xl mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CompanyHistory;