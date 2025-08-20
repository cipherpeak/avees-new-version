import logo from "../../assets/logo/Avees logo red.png";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { PlaceholdersAndVanishInputDemo } from "../../components/header/Search";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdPricetags } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";

// Sample images - replace with your actual imports
import retailImg from "../../assets/logo/Avees logo red.png";
import manufacturingImg from "../../assets/logo/Avees logo red.png";
import technologyImg from "../../assets/logo/Avees logo red.png";
import healthcareImg from "../../assets/logo/Avees logo red.png";
import historyImg from "../../assets/logo/Avees logo red.png";
import farmingImg from "../../assets/logo/Avees logo red.png";
import investmentImg from "../../assets/logo/Avees logo red.png";
import partnershipImg from "../../assets/logo/Avees logo red.png";
import franchisingImg from "../../assets/logo/Avees logo red.png";
import jointVentureImg from "../../assets/logo/Avees logo red.png";
import photosImg from "../../assets/logo/Avees logo red.png";
import videosImg from "../../assets/logo/Avees logo red.png";

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Our Businesses",
      dropdown: [
        { 
          name: "Retail", 
          link: "#",
          image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          description: "Explore our retail operations and stores"
        },
        { 
          name: "Manufacturing", 
          link: "#",
          image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          description: "Our manufacturing facilities and capabilities"
        },
        { 
          name: "Technology", 
          link: "#",
          image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          description: "Innovative tech solutions we provide"
        },
        { 
          name: "Healthcare", 
          link: "#",
          image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          description: "Our healthcare services and facilities"
        },
      ],
    },
    {
      name: "About Us",
      dropdown: [
        { 
          name: "Company History", 
          link: "/company-history",
          image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          description: "Learn about our journey and milestones"
        },
        { 
          name: "Farming", 
          link: "#",
          image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          description: "Our agricultural initiatives and farms"
        },
      ],
    },
    {
      name: "Opportunities",
      dropdown: [
        { 
          name: "Investments", 
          link: "#",
          image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          description: "Investment opportunities with us"
        },
        { 
          name: "Partnerships", 
          link: "#",
          image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          description: "Strategic partnership options"
        },
        { 
          name: "Franchising", 
          link: "#",
          image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          description: "Franchise our successful models"
        },
        { 
          name: "Joint Ventures", 
          link: "#",
          image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          description: "Collaborate through joint ventures"
        },
      ],
    },
    {
      name: "Gallery",
      dropdown: [
        { 
          name: "Photos", 
          link: "#",
          image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          description: "Browse our photo collections"
        },
        { 
          name: "Videos", 
          link: "#",
          image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          description: "Watch our corporate videos"
        },
      ],
    },
  ];

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: { 
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const mobileDropdownVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.2
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: { 
        duration: 0.2,
        staggerChildren: 0.05
      }
    }
  };

  return (
    <header className="bg-white w-full sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          <img
            src={logo}
            alt="Avees Logo"
            className="md:h-12 h-11 w-auto rounded-full scale-150"
          />
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="flex-1 hidden md:flex justify-center">
          <PlaceholdersAndVanishInputDemo />
        </div>

        {/* Sale Tag */}
        <div className="relative">
          <div className="flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1.5 rounded-full text-sm font-medium">
            <IoMdPricetags className="text-red-500 text-xl" />
            <span className="hidden sm:inline">On Sale</span>
          </div>
          {/* <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500"></span> */}
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block relative">
        <nav className="w-full">
          <ul className="flex justify-center gap-8 py-3 text-gray-700 font-medium relative">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.dropdown ? index : null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.link ? (
                  <a 
                    href={item.link} 
                    className="flex items-center gap-1 hover:text-red-600 transition-colors cursor-pointer text-sm"
                  >
                    {item.name}
                  </a>
                ) : (
                  <div className="flex items-center gap-1 hover:text-red-600 transition-colors cursor-pointer text-sm">
                    {item.name}
                    {activeDropdown === index ? (
                      <IoIosArrowUp className="text-xs" />
                    ) : (
                      <IoIosArrowDown className="text-xs" />
                    )}
                  </div>
                )}

                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        className="fixed left-0 w-full bg-white shadow-lg z-50 border-t border-gray-100 overflow-hidden"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                      >
                        <div className="max-w-7xl mx-auto px-4 py-6">
                          <div className="grid grid-cols-4 gap-8">
                            {item.dropdown.map((subItem, subIndex) => (
                              <motion.a
                                key={subIndex}
                                href={subItem.link}
                                className="group flex gap-4 items-start"
                                variants={itemVariants}
                              >
                                <div className="flex-1">
                                  <h3 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors">
                                    {subItem.name}
                                  </h3>
                                  <p className="text-sm text-gray-500 mt-1">
                                    {subItem.description}
                                  </p>
                                </div>
                                <div className="w-full h-full rounded-md overflow-hidden">
                                  <img 
                                    src={subItem.image} 
                                    alt={subItem.name}
                                    className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                                  />
                                </div>
                              </motion.a>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white w-full border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-2">
              <PlaceholdersAndVanishInputDemo />
            </div>
            <nav className="w-full">
              <ul className="py-2 text-gray-700 font-medium">
                {navItems.map((item, index) => (
                  <li key={index} className="border-b border-gray-100">
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="block px-4 py-3 hover:text-red-600 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <div className="relative">
                        <button
                          className="flex items-center justify-between w-full px-4 py-3 hover:text-red-600 transition-colors"
                          onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                        >
                          {item.name}
                          {activeDropdown === index ? (
                            <IoIosArrowUp className="text-xs" />
                          ) : (
                            <IoIosArrowDown className="text-xs" />
                          )}
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === index && (
                            <motion.div
                              className="overflow-hidden"
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              variants={mobileDropdownVariants}
                            >
                              <ul className="pl-6 bg-gray-50">
                                {item.dropdown.map((subItem, subIndex) => (
                                  <motion.li 
                                    key={subIndex}
                                    variants={itemVariants}
                                    className="border-b border-gray-200 last:border-b-0"
                                  >
                                    <a
                                      href={subItem.link}
                                      className="flex items-center gap-4 px-4 py-3 text-sm"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      <div className="flex-1">
                                        <h3 className="font-medium text-gray-900">
                                          {subItem.name}
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-1">
                                          {subItem.description}
                                        </p>
                                      </div>
                                      <div className="w-16 h-12 rounded-md overflow-hidden">
                                        <img 
                                          src={subItem.image} 
                                          alt={subItem.name}
                                          className="w-full h-full object-cover" 
                                        />
                                      </div>
                                    </a>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;