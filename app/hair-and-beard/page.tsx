import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronRight, Search, ShoppingCart, User, Heart } from "lucide-react"

export default function HairAndBeardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top bar */}
      <div className="bg-black text-white text-xs text-center py-1">OFFICIAL US ONLINE SHOP</div>

      {/* Header */}
      <header className="bg-white flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold text-[#00a651]">
            LEVEL3
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/categories" className="text-sm font-medium">
              Categories
            </Link>
            <Link href="/programs" className="text-sm font-medium">
              Programs
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm hidden md:inline">Navigation</span>
          <div className="flex items-center gap-1">
            <span className="text-sm">English</span>
            <ChevronDown size={14} />
          </div>
          <Search size={18} />
          <User size={18} />
          <Heart size={18} />
          <ShoppingCart size={18} />
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative h-[200px] bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-0">
          <Image src="/hair-products-banner.png" alt="Hair Products" fill className="object-cover opacity-70" />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <div className="text-white text-5xl font-bold flex items-center">
                <span className="text-white mr-2">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z" />
                  </svg>
                </span>
                HAIR AND BEARD
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white px-8 py-3 border-b">
        <div className="flex items-center text-sm">
          <Link href="/" className="text-gray-500 hover:text-black">
            Home
          </Link>
          <ChevronRight size={14} className="mx-2 text-gray-400" />
          <Link href="/product-type" className="text-gray-500 hover:text-black">
            Product type
          </Link>
          <ChevronRight size={14} className="mx-2 text-gray-400" />
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white px-8 py-3 border-b flex justify-between items-center">
        <div className="flex gap-4 text-sm">
          <button className="flex items-center">
            Sort by <ChevronDown size={14} className="ml-1" />
          </button>
          <button className="flex items-center">
            Featured <ChevronDown size={14} className="ml-1" />
          </button>
        </div>
        <div className="text-sm">
          <span>1-16 products</span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="bg-white px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link href={`/hair-and-beard/${product.slug}`} key={index} className="flex flex-col group">
              <div className="bg-gray-100 p-4 rounded-lg mb-2">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="text-sm font-medium">{product.name}</h3>
              <p className="text-sm text-gray-600">From ${product.price}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="bg-white px-8 py-6 flex justify-center gap-2 border-t">
        <button className="w-8 h-8 flex items-center justify-center border rounded-full bg-black text-white">1</button>
        <button className="w-8 h-8 flex items-center justify-center border rounded-full">2</button>
        <button className="w-8 h-8 flex items-center justify-center border rounded-full">3</button>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z" />
              </svg>
            </div>
            <p className="text-xs mb-4">Official US Online Shop</p>
            <div className="mb-4">
              <p className="text-xs mb-2">Subscribe to our emails</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-black border border-white px-3 py-2 text-sm w-full"
                />
              </div>
            </div>
            <div>
              <p className="text-xs mb-2">Country/region</p>
              <select className="bg-black border border-white px-3 py-2 text-xs w-full">
                <option>United States (USD $)</option>
              </select>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Navigation</h3>
            <ul className="text-xs space-y-2">
              <li>
                <Link href="#">Shop</Link>
              </li>
              <li>
                <Link href="#">Store Locator</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Programs</h3>
            <ul className="text-xs space-y-2">
              <li>
                <Link href="#">Pro</Link>
              </li>
              <li>
                <Link href="#">Distributor</Link>
              </li>
              <li>
                <Link href="#">Referral Program</Link>
              </li>
              <li>
                <Link href="#">LEVEL3 Rewards</Link>
              </li>
              <li>
                <Link href="#">Affiliate</Link>
              </li>
            </ul>
          </div>

          <div>{/* Empty column for spacing */}</div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 pt-4 border-t border-gray-800 text-xs">
          <div className="flex flex-wrap gap-4">
            <span>© 2023, LEVEL3</span>
            <Link href="#">Terms of service</Link>
            <Link href="#">Privacy policy</Link>
            <Link href="#">Terms of service</Link>
            <Link href="#">Refund policy</Link>
            <Link href="#">Shipping information</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

const products = [
  {
    slug: "hair-styling-pomade",
    name: "Hair Styling Pomade",
    price: "20.00",
    image: "/pomade-gold.png",
  },
  {
    slug: "forming-cream",
    name: "Forming Cream",
    price: "18.00",
    image: "/forming-cream.png",
  },
  {
    slug: "matte-putty",
    name: "Matte Putty",
    price: "18.00",
    image: "/matte-putty.png",
  },
  {
    slug: "spider-wax",
    name: "Spider Wax - Fiber Texture Wax",
    price: "18.00",
    image: "/spider-wax.png",
  },
  {
    slug: "brilliant-cream",
    name: "Brilliant Cream",
    price: "17.00",
    image: "/brilliant-cream.png",
  },
  {
    slug: "sculpting-clay",
    name: "Sculpting Clay",
    price: "17.00",
    image: "/sculpting-clay.png",
  },
  {
    slug: "light-hold-styling-powder",
    name: "Light Hold Styling Powder",
    price: "16.00",
    image: "/styling-powder.png",
  },
  {
    slug: "styling-powder-10g",
    name: "Styling Powder - 10g",
    price: "16.00",
    image: "/styling-powder-10g.png",
  },
  {
    slug: "styling-paste-85g",
    name: "Styling Paste - 85g",
    price: "18.00",
    image: "/styling-paste.png",
  },
  {
    slug: "hair-wax-stick",
    name: "Hair Wax Stick",
    price: "14.00",
    image: "/hair-wax-stick.png",
  },
  {
    slug: "beard-oil",
    name: "Beard Oil",
    price: "16.00",
    image: "/beard-oil.png",
  },
  {
    slug: "revitalizing-salt-spray",
    name: "Revitalizing Salt Spray",
    price: "16.00",
    image: "/salt-spray.png",
  },
  {
    slug: "hair-spray-100ml",
    name: "Hair Spray - 100ml",
    price: "16.00",
    image: "/hair-spray-100ml.png",
  },
  {
    slug: "hair-spray-300ml",
    name: "Hair Spray - 300ml",
    price: "18.00",
    image: "/hair-spray-300ml.png",
  },
  {
    slug: "strong-hair-styling-gel-100ml",
    name: "Strong Hair Styling Gel - 100 ml",
    price: "16.00",
    image: "/strong-gel-100ml.png",
  },
  {
    slug: "strong-hair-styling-gel-500ml",
    name: "Strong Hair Styling Gel - 500 ml",
    price: "21.00",
    image: "/strong-gel-500ml.png",
  },
]
