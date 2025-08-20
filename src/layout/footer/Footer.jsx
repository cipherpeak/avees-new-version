import { Link } from "react-router-dom"
import { FaInstagram, FaYoutube } from "react-icons/fa"
import { BiLogoFacebook } from "react-icons/bi"
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from "../../assets/logo/Avees logo red.png"

function Footer() {
  return (
    <>
      <footer className="bg-white text-black shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                {/* Logo placeholder - replace with your actual logo */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-slate-700 font-bold text-sm">A</span>
                  </div>
                  <span className="text-xl font-semibold">Avees Foods</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-4 text-black">Our company</h3>

              <p className="text-black text-sm leading-relaxed mb-6">
                Welcome to Avees Foods – the home of authentic South Indian cuisine! Since our founding, Avees Foods has
                been inspiring people to explore their culinary passion with our portfolio of high-quality traditional
                foods and unique regional specialties. A trusted partner of food lovers and professionals, we remain
                committed to quality, innovation and customer delight. Whether you're a home cook or running a restaurant,
                we have everything you need to make your business a success. After all, nothing brings people together
                like authentic, delicious food!
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-3">
                <a
                  href="https://www.youtube.com/@aveesfoods2947"
                  aria-label="YouTube"
                  className="text-black hover:text-black transition-colors"
                >
                  <FaYoutube size={20} />
                </a>
                <a
                  href="https://www.instagram.com/aveesfoods/"
                  aria-label="Instagram"
                  className="text-black hover:text-black transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/avees.foods"
                  aria-label="Facebook"
                  className="text-black hover:text-black transition-colors"
                >
                  <BiLogoFacebook size={20} />
                </a>
              </div>
            </div>

            {/* Shop Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-black underline">Shop</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/avees-foods" className="text-black hover:text-black transition-colors text-sm">
                    Avees Foods
                  </Link>
                </li>
                <li>
                  <Link to="/avees-puttu-house" className="text-black hover:text-black transition-colors text-sm">
                    Avees Puttu House
                  </Link>
                </li>
                <li>
                  <Link to="/avees-instant-batters" className="text-black hover:text-black transition-colors text-sm">
                    Avees Instant Batters
                  </Link>
                </li>
                <li>
                  <Link to="/avees-retail" className="text-black hover:text-black transition-colors text-sm">
                    Avees Retail
                  </Link>
                </li>
                <li>
                  <Link to="/traditional-spices" className="text-black hover:text-black transition-colors text-sm">
                    Traditional Spices
                  </Link>
                </li>
                <li>
                  <Link to="/ready-to-cook" className="text-black hover:text-black transition-colors text-sm">
                    Ready to Cook
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-black underline">Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/faq" className="text-black hover:text-black transition-colors text-sm">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/shipping" className="text-black hover:text-black transition-colors text-sm">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link to="/returns" className="text-black hover:text-black transition-colors text-sm">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link to="/payments" className="text-black hover:text-black transition-colors text-sm">
                    Payments
                  </Link>
                </li>
                <li>
                  <Link to="/orders" className="text-black hover:text-black transition-colors text-sm">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link to="/account" className="text-black hover:text-black transition-colors text-sm">
                    Accounts
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-black underline">About</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-black hover:text-black transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/opportunities" className="text-black hover:text-black transition-colors text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/stores" className="text-black hover:text-black transition-colors text-sm">
                    Stores
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-black hover:text-black transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-600 mt-12 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-black text-sm">© 2025 Avees Foods.</div>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                <Link to="/privacy-policy" className="text-black hover:text-black transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms-conditions" className="text-black hover:text-black transition-colors">
                  Terms & Conditions
                </Link>
                <Link to="/shipping-policy" className="text-black hover:text-black transition-colors">
                  Shipping Policy
                </Link>
                <Link to="/refund-policy" className="text-black hover:text-black transition-colors">
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
            <FloatingWhatsApp 
            phoneNumber="+917907224281"
            avatar={logo}
            />
    </>
  )
}

export default Footer
