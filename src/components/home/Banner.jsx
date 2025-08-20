import { useState, useEffect } from "react";
import { Globe, Truck, ShoppingBag, Tag, Wheat } from "lucide-react";

// Import all your banner images
import desktopBanner1 from "../../assets/banner/BANNER 01 (1).webp";
import desktopBanner2 from "../../assets/banner/BANNER 02.webp";
import desktopBanner3 from "../../assets/banner/BANNER 04 (1).webp";

import mobileBanner1 from "../../assets/banner/PHONE BANNER 01.webp";
import mobileBanner2 from "../../assets/banner/PHONE BANNER 03.webp";
import mobileBanner3 from "../../assets/banner/PHONE BANNER 08.webp";

const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="flex items-center gap-7 text-center p-1 min-w-[250px]">
    <div className="bg-white rounded-full p-3 mb-2 shadow-md">
      <Icon className="w-6 h-6 text-banner-teal text-black" />
    </div>
    <div className="flex flex-col items-start">
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm text-white">{description}</p>
    </div>
  </div>
);

function Banner() {
  const featureItems = [
    { icon: Globe, title: "Worldwide Delicacies", description: "Savor global flavors at your table" },
    { icon: Truck, title: "Expedited Shipping", description: "Enjoy swift 24-hour delivery across India" },
    { icon: ShoppingBag, title: "Extensive Selection", description: "Choose from over 1,500 premium products" },
    { icon: Tag, title: "Exclusive Offers", description: "Discover exceptional deals on gourmet items" },
    { icon: Wheat, title: "Premium Quality", description: "Only the finest ingredients for you" },
  ];

  const duplicatedItems = [...featureItems, ...featureItems];

  // Separate banners for mobile/tablet and desktop
  const mobileBanners = [ mobileBanner2, mobileBanner3,mobileBanner1];
  const desktopBanners = [desktopBanner2,desktopBanner3, desktopBanner1 ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); 
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Determine which banners to use based on screen size
  const banners = isMobile ? mobileBanners : desktopBanners;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [banners.length]); 

  return (
    <div className="w-full overflow-hidden">
      <div className="relative w-full">
        <img
          src={banners[currentSlide]}
          alt="Banner"
          className="w-full h-full object-cover object-center transition-all duration-700"
        />

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {banners.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
                index === currentSlide ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Features Scrolling Section */}
      <div className="bg-red-600 text-white py-8 md:py-12 overflow-hidden">
        <div className="scrolling-wrapper">
          <div className="scrolling-content flex animate-scroll gap-8">
            {duplicatedItems.map((item, index) => (
              <FeatureItem
                key={`${index}-${item.title}`}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;