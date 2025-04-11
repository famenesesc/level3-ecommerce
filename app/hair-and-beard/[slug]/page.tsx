import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Search, ShoppingCart, User, Heart, Star, Minus, Plus, Play } from "lucide-react"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  // In a real app, you would fetch the product data based on the slug
  // For this example, we'll use the pomade product data
  const product = products.find((p) => p.slug === params.slug) || products[0]

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

      {/* Product Detail Section */}
      <div className="bg-white px-4 md:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Product Images and Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/product-usage-1.png"
                    alt="Product in use"
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 rounded-full p-2">
                      <Play className="w-6 h-6 text-white" fill="white" />
                    </div>
                  </div>
                </div>
                <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/product-usage-2.png"
                    alt="Product in use"
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/product-usage-3.png"
                    alt="Product in use"
                    width={600}
                    height={200}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2">
                    <Play className="w-6 h-6 text-white" fill="white" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/product-usage-4.png"
                    alt="Product in use"
                    width={600}
                    height={200}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2">
                    <Play className="w-6 h-6 text-white" fill="white" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/product-usage-5.png"
                    alt="Product in use"
                    width={600}
                    height={200}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2">
                    <Play className="w-6 h-6 text-white" fill="white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center mb-2">
                <div className="flex">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                </div>
                <span className="text-xs ml-2">4.95 (40 reviews)</span>
              </div>
              <p className="text-xl font-bold mb-4">${product.price}</p>
              <p className="text-xs text-gray-500 mb-4">
                Pay in 4 interest-free installments of $4.99 with <span className="font-bold">Shop Pay</span>
              </p>

              {/* Color Selection */}
              <div className="mb-6">
                <p className="text-sm font-medium mb-2">Color</p>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full bg-black border-2 border-black"></button>
                  <button className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300"></button>
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <p className="text-sm font-medium mb-2">Quantity</p>
                <div className="flex items-center border rounded w-24">
                  <button className="px-2 py-1">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="flex-1 text-center">1</span>
                  <button className="px-2 py-1">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-white border border-black text-black font-medium py-3 rounded mb-2">
                ADD TO CART
              </button>

              {/* Buy Now Button */}
              <button className="w-full bg-[#5a31f4] text-white font-medium py-3 rounded mb-4">BUY IT NOW</button>

              <p className="text-xs text-center text-gray-500 mb-6">More payment options</p>

              <p className="text-sm mb-6">
                Buy Now & enjoy with Fast Shipping. Upgrade to a style with our authentic hair tips.
              </p>

              {/* Product Description */}
              <div className="text-sm space-y-4">
                <p>
                  Healthy, shiny hair with a brilliant finish is something everyone wants. For added hair style or just
                  to maintain, our level 3 styling products provide the perfect solution. Our pomade is a water-based
                  styling pomade delivers healthy hold and brilliant shine, while its formula supports hair strength and
                  health. Hair looks sleek and stays neat, with a fresh scent that lasts all day. Achieve the perfect
                  style with our pomade, where health and beauty are combined.
                </p>

                <div>
                  <p className="font-medium">Key Features:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Provides a long-lasting, brilliant shine without blocking your natural oils</li>
                    <li>Strong hold for various styles, from immaculate to waves and more</li>
                    <li>Enriched with natural ingredients that nourish your hair</li>
                    <li>Strengthens and conditions your hair while you style</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium">Why it's a Game Changer:</p>
                  <p>
                    Whether you're looking to make a statement with slick hair. The hair pomade delivers a brilliant
                    shine without sacrificing your hair's health. Unlike traditional pomades that can damage hair with
                    harsh ingredients, our special formula works healing your scalp health. Whether your go-to look is a
                    sleek pompadour, a textured crop, or slicked-back styles, this pomade has the versatility and hold
                    to make it happen, all while keeping your hair in top condition.
                  </p>
                </div>

                <div>
                  <p className="font-medium">Versatile Styling:</p>
                  <p>
                    Our pomade offers a high level of control for all hair types without weighing it down. The
                    lightweight formula holds your style while allowing for easy adjustments throughout the day. It's
                    perfect for creating sleek, defined looks or natural styles – no sticky feel or flaky mess later!
                  </p>
                </div>

                <div>
                  <p className="font-medium">Natural Ingredients:</p>
                  <p>
                    Beyond styling, this pomade works to keep hair healthy and protected. The water-based formula washes
                    out easily, preventing product buildup that can damage strands. It applies smoothly and evenly,
                    letting you create the look you want to achieve without the worry. It's a true friend to pomade for
                    achieving better hair day after day.
                  </p>
                </div>

                <div>
                  <p className="font-medium">How to Use:</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Place a small amount of pomade in your palms</li>
                    <li>Rub your hands together to warm the pomade</li>
                    <li>Apply to damp or dry hair and style as desired</li>
                  </ol>
                </div>

                <div>
                  <p className="font-medium">Styling Tip:</p>
                  <p>
                    This pomade is versatile for a wide range of hairstyles on straight, wavy, or curly hair. For
                    maximum shine, apply to damp hair. For more texture and a matte look, apply to dry hair. For a
                    slicker, more polished look, use a comb. For a more textured, casual look, use your fingers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* You May Also Like Section */}
          <div className="mb-12">
            <h2 className="text-xl font-bold mb-6">You may also like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((relatedProduct, index) => (
                <Link href={`/hair-and-beard/${relatedProduct.slug}`} key={index} className="group">
                  <div className="bg-gray-100 p-4 rounded-lg mb-2">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      width={200}
                      height={200}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-medium">{relatedProduct.name}</h3>
                  <p className="text-sm text-gray-600">From ${relatedProduct.price}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Customer Reviews Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Customer Reviews</h2>
              <button className="bg-black text-white text-sm px-4 py-2 rounded">Write a review</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="col-span-1">
                <div className="flex items-center mb-2">
                  <div className="flex">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  </div>
                  <span className="text-xs ml-2">4.95 out of 5</span>
                </div>

                <div className="space-y-1">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <span className="text-xs w-8">{rating} star</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full mx-2">
                        <div
                          className="h-2 bg-yellow-400 rounded-full"
                          style={{ width: rating === 5 ? "90%" : rating === 4 ? "8%" : "2%" }}
                        ></div>
                      </div>
                      <span className="text-xs w-8">
                        {rating === 5 ? "36" : rating === 4 ? "3" : rating === 3 ? "1" : "0"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-2 space-y-6">
                {reviews.map((review, index) => (
                  <div key={index} className="border-b pb-4">
                    <div className="flex items-center mb-1">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center mb-2">
                      <span className="text-xs font-medium">{review.author}</span>
                      <span className="text-xs bg-yellow-400 px-1 ml-2">Verified</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-1">{review.date}</p>
                    <p className="text-sm mb-2">{review.title}</p>
                    <p className="text-sm">{review.content}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <button className="border border-black text-black px-6 py-2 text-sm rounded">Load More</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-8 mt-12">
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
    price: "19.99",
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
]

const relatedProducts = [
  {
    slug: "forming-cream",
    name: "Forming Cream",
    price: "18.00",
    image: "/forming-cream.png",
  },
  {
    slug: "classic-gel",
    name: "Classic Gel",
    price: "16.00",
    image: "/classic-gel.png",
  },
  {
    slug: "paste-matte-finish",
    name: "Paste - Matte Finish",
    price: "18.00",
    image: "/paste-matte.png",
  },
  {
    slug: "strong-hair-styling-gel",
    name: "Strong Hair Styling Gel",
    price: "16.00",
    image: "/strong-gel-100ml.png",
  },
]

const reviews = [
  {
    author: "Customer",
    rating: 5,
    date: "04/05/23",
    title: "Great stuff",
    content: "Wow that's been a long way since I haven't weight your hair down.",
    verified: true,
  },
  {
    author: "John",
    rating: 5,
    date: "03/28/23",
    title: "Superior hold and lets the scent is just right",
    content:
      "I've been trying to search for the right hair wax and found LEVEL3. This pomade holds my hair longer than those other brands. Plus the price is much better for me. I would highly recommend.",
    verified: true,
  },
  {
    author: "Purchase",
    rating: 5,
    date: "03/20/23",
    title: "Excellent",
    content: "",
    verified: true,
  },
  {
    author: "Awesome",
    rating: 5,
    date: "03/20/23",
    title: "Awesome product ! I totally ordering 2 more for styling thanks bro Lol !",
    content: "",
    verified: true,
  },
]
