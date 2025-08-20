import ourstorybanner from "../../assets/ourstory/1640X922.63 (02) (1).webp";
import ourstorybannerMobile from "../../assets/ourstory/PHONE BANNER 07.webp"; 
import { useMediaQuery } from 'react-responsive';

function OurStory() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <section className="relative w-full  flex items-center justify-center overflow-hidden group mt-3">
      <img
        src={isMobile ? ourstorybannerMobile : ourstorybanner}
        alt="Our Story Banner"
        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute flex flex-col p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 text-white">
        <div className="">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold inline-block relative">
            Our Story
            <span className="absolute -bottom-2 sm:-bottom-3 left-0 w-0 h-1 bg-red-600 transition-all duration-500 group-hover:w-full"></span>
          </h1>
        </div>

        <div className={`flex flex-col items-start w-full ${isMobile ? 'max-w-full' : 'max-w-[90%] md:max-w-[80%] lg:max-w-[50%]'} mt-9 bg-white/10 p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl lg:backdrop-blur-lg border border-white/20 shadow-2xl transition-all duration-500 hover:bg-white/20 hover:shadow-red-500/20`}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 text-left leading-relaxed">
            {isMobile ? (
              <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cumque, harum quas soluta expedita fuga labore excepturi tenetur provident corporis odit aspernatur.
              </>
            ) : (
              <>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda sit officia eveniet eaque facilis. Rem unde et sint quaerat soluta? Debitis perferendis quos ratione quibusdam voluptatibus, tempore expedita labore minima. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </>
            )}
            Avees is a passionate team dedicated to creating innovative solutions that
          </p>

          <button className="relative px-6 py-2 sm:px-8 sm:py-3 bg-red-600 text-white font-semibold rounded-lg overflow-hidden group-hover:shadow-lg transition-all duration-300 hover:bg-red-700 hover:shadow-red-500/50">
            <span className="relative z-10 text-sm sm:text-base">Know More</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default OurStory;