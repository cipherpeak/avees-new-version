
import { useState, useEffect } from "react"
import { motion, useMotionValue } from "framer-motion"
import food1 from "../../assets/foods/RAH03836.JPG"
import food2 from "../../assets/foods/RAH03833.JPG"
import food3 from "../../assets/foods/RAH03819.JPG"
import food4 from "../../assets/foods/RAH03850.JPG"
import food5 from "../../assets/foods/RAH03857.JPG"

const dietCategories = [
  {
    id: 1,
    title: "KETO-FRIENDLY",
    image: food1,
    link: "#",
  },
  {
    id: 2,
    title: "GLUTEN FREE",
    image: food2,
    link: "#",
  },
  {
    id: 3,
    title: "GUT-FRIENDLY",
    image: food3,
    link: "#",
  },
  {
    id: 4,
    title: "JAIN-FRIENDLY",
    image: food4,
    link: "#",
  },
  {
    id: 5,
    title: "KID FRIENDLY",
    image: food5,
    link: "#",
  },
]

export default function OurFoods() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(5)
  const [itemsToScroll, setItemsToScroll] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const x = useMotionValue(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, dietCategories.length - itemsPerView)
        const nextIndex = prev + itemsToScroll
        return nextIndex > maxIndex ? 0 : nextIndex
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [itemsPerView, itemsToScroll])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2)
        setItemsToScroll(2)
      } else if (window.innerWidth < 768) {
        setItemsPerView(2)
        setItemsToScroll(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3)
        setItemsToScroll(1)
      } else if (window.innerWidth < 1280) {
        setItemsPerView(4)
        setItemsToScroll(1)
      } else {
        setItemsPerView(5)
        setItemsToScroll(1)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, dietCategories.length - itemsPerView)
  const totalDots = Math.ceil((dietCategories.length - itemsPerView + itemsToScroll) / itemsToScroll)

  const handleDragEnd = (event, info) => {
    setIsDragging(false)
    const threshold = 50

    if (info.offset.x > threshold && currentIndex > 0) {
      prevSlide()
    } else if (info.offset.x < -threshold && currentIndex < maxIndex) {
      nextSlide()
    }
  }

  const handleDragStart = () => {
    setIsDragging(true)
  }

  const goToSlide = (dotIndex) => {
    const newIndex = Math.min(dotIndex * itemsToScroll, maxIndex)
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + itemsToScroll
      return nextIndex > maxIndex ? maxIndex : nextIndex
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - itemsToScroll
      return prevIndex < 0 ? 0 : prevIndex
    })
  }

  return (
    <section className=" py-8 sm:py-12 lg:py-16 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-red-600 cursor-pointer text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm tracking-wide mb-4 sm:mb-6  transition-colors"
          >
            Explore Avees Foods
          </motion.button>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-black text-xl sm:text-2xl lg:text-3xl font-light tracking-wide px-4"
          >
            LIFESTYLE AND DIET
          </motion.h2>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex cursor-grab active:cursor-grabbing"
            animate={{ x: `-${(currentIndex * 100) / itemsPerView}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            dragElastic={0.1}
          >
            {dietCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className={`flex-shrink-0 px-2 sm:px-4 ${
                  itemsPerView === 1
                    ? "w-full"
                    : itemsPerView === 2
                      ? "w-1/2"
                      : itemsPerView === 3
                        ? "w-1/3"
                        : itemsPerView === 4
                          ? "w-1/4"
                          : "w-1/5"
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: isDragging ? 1 : 1.05 }}
              >
                <div className="text-center">
                  {/* Circular Image Container */}
                  <motion.div
                    className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto mb-3 sm:mb-4 lg:mb-6"
                    whileHover={{ rotate: isDragging ? 0 : 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-lg">
                      <motion.img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: isDragging ? 1 : 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>

                  {/* Category Title */}
                  <motion.h3
                    className="text-black text-sm sm:text-base lg:text-lg font-medium mb-2 sm:mb-3 tracking-wide px-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {category.title}
                  </motion.h3>

                  {/* View Collection Link */}
                  <motion.a
                    href={category.link}
                    className="text-gray-600 text-xs sm:text-sm hover:text-black transition-colors inline-flex items-center gap-1 sm:gap-2 group"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    whileHover={{ x: isDragging ? 0 : 5 }}
                  >
                    View collection
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 sm:mt-8 gap-2 sm:gap-3">
          {Array.from({ length: Math.max(1, totalDots) }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / itemsToScroll) === index
                  ? "bg-black scale-125"
                  : "bg-black hover:bg-gray-300"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        {/* <div className="hidden lg:block">
          <motion.button
            onClick={prevSlide}
            className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-20 hover:bg-opacity-30 text-black p-2 lg:p-3 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            ←
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-20 hover:bg-opacity-30 text-black p-2 lg:p-3 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            →
          </motion.button>
        </div> */}

        {/* Mobile swipe instruction */}
        <div className="lg:hidden text-center mt-4">
          <p className="text-black text-xs">Swipe to navigate</p>
        </div>
      </div>
    </section>
  )
}
