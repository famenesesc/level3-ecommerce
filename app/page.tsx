import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Search, User, Heart, ChevronDown } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top bar */}
      <div className="bg-black text-white text-xs text-center py-2 avenir-font tracking-widest">OFFICIAL ONLINE SHOP</div>

      {/* Header */}
      <header className="bg-black flex items-center justify-between px-8 py-4">
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
          </nav>
        </div>
        <div className="flex items-center gap-4">
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

      {/* Hero Section */}

      <section className="relative h-[400px] overflow-hidden bg-cover bg-center" 
                style={{ backgroundImage: 'url(https://lv3.com/cdn/shop/files/foil_wide.png)' }}>
      </section>

      {/* New Hair Color Section */}
      <section className="mt-1 py-12 px-8 bg-black">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <Image
              src="https://lv3.com/cdn/shop/files/LV3_Images_B_3.jpg"
              alt="Model with green hair"
              layout="responsive"
              width={750}
              height={500}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="avenir-font text-2xl font-bold mb-4 text-gray-100">NEW HAIR COLOR</h2>
            <p className="text-sm text-gray-600 mb-6">
              Discover the LEVEL3 Pop Color Line. With semi-permanent display a color for endless styling options.
            </p>
            <Link href="/hair-and-beard" className="bg-black text-xs text-white px-5 py-2 rounded-lg inline-block w-fit border-2 border-white">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-8 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <Image src="/category-hair.png" alt="Hair & Beard" width={200} height={200} className="rounded-lg mb-2" />
            <span className="text-sm font-medium">Hair & Beard</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/category-skincare.png" alt="Skincare" width={200} height={200} className="rounded-lg mb-2" />
            <span className="text-sm font-medium">Skincare</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/category-accessories.png"
              alt="Accessories"
              width={200}
              height={200}
              className="rounded-lg mb-2"
            />
            <span className="text-sm font-medium">Accessories</span>
          </div>
        </div>
      </section>

      {/* Hair & Beard Products */}
      <section className="py-12 px-8 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8">Hair & Beard</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={200}
                height={200}
                className="bg-gray-100 p-4 rounded-lg mb-2"
              />
              <h3 className="text-sm font-medium text-center">{product.name}</h3>
              <p className="text-sm text-gray-600">From ${product.price}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/shop-all" className="bg-black text-white px-6 py-2 rounded text-sm">
            View all
          </Link>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm mb-2">LATEST BLOG</p>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">
                HOW TO CHOOSE THE
                <br />
                PERFECT HAIR PRODUCT
              </h2>
              <p className="text-sm mb-6">
                This guide will help you understand different types of hair products, from pomades and creams to hair
                wax and styling powder, and how to choose the right one for your hair type and desired look.
              </p>
              <Link href="/blog" className="border border-white text-white px-4 py-2 rounded inline-block">
                Read Now
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/blog-image.png"
                alt="Hair products"
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blogs CTA Section */}
      <section className="py-12 px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <Image
              src="/pomade.png"
              alt="Pomade product"
              width={500}
              height={300}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">CHECK OUT OUR BLOGS</h2>
            <p className="text-sm mb-6">Learn more about the products you love and how we make them.</p>
            <Link href="/blogs" className="border border-white text-white px-4 py-2 rounded inline-block w-fit">
              View blogs
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="border border-white p-4 mb-4 w-20 h-20 flex items-center justify-center">
              <span className="text-xs">LEVEL3</span>
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
                <Link href="#">Accessibility</Link>
              </li>
              <li>
                <Link href="#">Store Locator</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Programs</h3>
            <ul className="text-xs space-y-2">
              <li>
                <Link href="#">Authorized Dealer</Link>
              </li>
              <li>
                <Link href="#">Pro</Link>
              </li>
              <li>
                <Link href="#">Referral Program</Link>
              </li>
              <li>
                <Link href="#">Digital & Rewards</Link>
              </li>
              <li>
                <Link href="#">Affiliates</Link>
              </li>
            </ul>
          </div>

          <div>{/* Empty column for spacing */}</div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 pt-4 border-t border-gray-800 text-xs">
          <div className="flex flex-wrap gap-4">
            <span>© 2023, LEVEL3</span>
            <Link href="#">Refunds</Link>
            <Link href="#">Privacy policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Shipping and product information</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

const products = [
  {
    name: "Hair Styling Pomade",
    price: "20.00",
    image: "/pomade-gold.png",
  },
  {
    name: "Forming Cream",
    price: "18.00",
    image: "/forming-cream.png",
  },
  {
    name: "Matte Putty",
    price: "19.00",
    image: "/matte-putty.png",
  },
  {
    name: "Spider Wax - Fiber Texture Wax",
    price: "18.00",
    image: "/spider-wax.png",
  },
]
