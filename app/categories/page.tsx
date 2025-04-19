import Image from "next/image"
import Link from "next/link"
import { categories, getFeaturedProducts } from "@/lib/data"
import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CategoriesPage() {
  const featuredProducts = getFeaturedProducts()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top bar */}
      <TopBar />

      {/* Header */}
      <Header />

      {/* Empty space to account for fixed header */}
      <div className="h-16"></div>

      {/* Hero Banner */}
      <div className="relative h-[200px] bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-0">
          <Image src="/categories-banner.png" alt="Categories" fill className="object-cover opacity-70" />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-white text-5xl font-bold">CATEGORIES</h1>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-12 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link href={`/category/${category.slug}`} key={index} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={400}
                    height={400}
                    className="w-full h-auto aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                    <h2 className="text-white text-2xl font-bold">{category.name}</h2>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <Link href={`/product/${product.slug}`} key={index} className="flex flex-col group">
                <div className="bg-white p-4 rounded-lg mb-2">
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
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
