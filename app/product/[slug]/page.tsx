import Image from "next/image"
import Link from "next/link"
import { Star, Minus, Plus, Play } from "lucide-react"
import { getProductBySlug, getRelatedProducts } from "@/lib/data"
import { notFound } from "next/navigation"
import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product.category, product.slug)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top bar */}
      <TopBar />

      {/* Header */}
      <Header />

      {/* Empty space to account for fixed header */}
      <div className="h-16"></div>

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
                    src={`/${product.category}-usage-1.png`}
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
                    src={`/${product.category}-usage-2.png`}
                    alt="Product in use"
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover"
                  />
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
                <span className="text-xs ml-2">4.9 (28 reviews)</span>
              </div>
              <p className="text-xl font-bold mb-4">${product.price}</p>
              <p className="text-xs text-gray-500 mb-4">
                Pay in 4 interest-free installments of ${(Number.parseFloat(product.price) / 4).toFixed(2)} with{" "}
                <span className="font-bold">Shop Pay</span>
              </p>

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
                Buy Now & enjoy with Fast Shipping. Upgrade to a healthier skincare routine with our premium products.
              </p>

              {/* Product Description */}
              <div className="text-sm space-y-4">
                <p>{product.description}</p>

                <div>
                  <p className="font-medium">Key Benefits:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {product.benefits?.map((benefit, index) => <li key={index}>{benefit}</li>) || (
                      <>
                        <li>Premium quality materials and ingredients</li>
                        <li>Designed for professional results</li>
                        <li>Easy to use and maintain</li>
                        <li>Long-lasting performance</li>
                      </>
                    )}
                  </ul>
                </div>

                <div>
                  <p className="font-medium">How to Use:</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    {product.usage?.map((step, index) => <li key={index}>{step}</li>) || (
                      <>
                        <li>Apply a small amount to clean skin or hair</li>
                        <li>Gently massage in circular motions</li>
                        <li>Use as needed for best results</li>
                      </>
                    )}
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* You May Also Like Section */}
          <div className="mb-12">
            <h2 className="text-xl font-bold mb-6">You may also like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((relatedProduct, index) => (
                <Link href={`/product/${relatedProduct.slug}`} key={index} className="group">
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
                  <span className="text-xs ml-2">4.9 out of 5</span>
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
                        {rating === 5 ? "25" : rating === 4 ? "2" : rating === 3 ? "1" : "0"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-2 space-y-6">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="border-b pb-4">
                    <div className="flex items-center mb-1">
                      <div className="flex">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      </div>
                    </div>
                    <div className="flex items-center mb-2">
                      <span className="text-xs font-medium">Customer</span>
                      <span className="text-xs bg-yellow-400 px-1 ml-2">Verified</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-1">03/15/23</p>
                    <p className="text-sm mb-2">Amazing product!</p>
                    <p className="text-sm">
                      This product has completely transformed my routine. It's exactly what I needed and the quality is
                      excellent.
                    </p>
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
      <Footer />
    </div>
  )
}
