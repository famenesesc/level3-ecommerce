import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronRight } from "lucide-react"
import { categories, getProductsByCategory } from "@/lib/data"
import { notFound } from "next/navigation"
import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((c) => c.slug === params.slug)

  if (!category) {
    notFound()
  }

  const products = getProductsByCategory(params.slug)

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
          <Image
            src={category.bannerImage || "/placeholder.svg"}
            alt={category.name}
            fill
            className="object-cover opacity-70"
          />
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
                {category.name.toUpperCase()}
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
          <Link href="/categories" className="text-gray-500 hover:text-black">
            Categories
          </Link>
          <ChevronRight size={14} className="mx-2 text-gray-400" />
          <span>{category.name}</span>
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
          <span>1-{products.length} products</span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="bg-white px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link href={`/product/${product.slug}`} key={index} className="flex flex-col group">
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
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
