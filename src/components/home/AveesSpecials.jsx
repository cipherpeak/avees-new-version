import { useEffect, useState } from "react";
import desktopBanner from "../../assets/aveesspecial/1640X922.63 (2).webp";
import tabletBanner from "../../assets/aveesspecial/PHONE BANNER 06.webp"; // Add your tablet-optimized image
import mobileBanner from "../../assets/aveesspecial/PHONE BANNER 06.webp"; // Add your mobile-optimized image

export default function AveesSpecials() {
  // State to track current screen size
  const [bannerSrc, setBannerSrc] = useState(desktopBanner);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setBannerSrc(mobileBanner);
      } else if (window.innerWidth < 1024) {
        setBannerSrc(tabletBanner);
      } else {
        setBannerSrc(desktopBanner);
      }
    };

    // Set initial image
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative w-full max-h-[900px] min-h-[300px] flex items-center justify-center overflow-hidden">
      {/* Responsive banner image */}
      <img 
        src={bannerSrc} 
        alt="Avees Specials" 
        className="w-full h-full object-cover"
        loading="lazy" 
      />
      

    </section>
  );
}