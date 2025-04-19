import Image from "next/image"
import Link from "next/link"
import { categories, getProductsByCategory } from "@/lib/data"
import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  const hairAndBeardProducts = getProductsByCategory("hair-and-beard").slice(0, 4)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top bar */}
      <TopBar />

      {/* Header is now positioned absolutely over the hero section */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="https://lv3.com/cdn/shop/files/foil_wide.png" 
            alt="Hero Background" 
            fill 
            priority 
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-8 bg-gray-50 text-foreground">
        <h2 className="text-2xl font-bold text-center mb-8">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <Link href={`/category/${category.slug}`} key={index} className="flex flex-col items-center group">
              <div className="overflow-hidden rounded-lg mb-2">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-sm font-medium">{category.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* New Hair Color Section */}
      <section className="py-12 px-8 bg-black">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <Image
              src="https://lv3.com/cdn/shop/files/LV3_Images_B_3.jpg?v=1739226725&width=1500"
              alt="Model with green hair"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">NEW HAIR COLOR</h2>
            <p className="text-sm text-gray-600 mb-6">
              Discover the LEVEL3 Pop Color Line. With semi-permanent display a color for endless styling options.
            </p>
            <Link href="/category/hair-and-beard" className="bg-black text-white px-4 py-2 rounded inline-block w-fit">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Hair & Beard Products */}
      <section className="py-12 px-8 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8">Hair & Beard</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {hairAndBeardProducts.map((product, index) => (
            <Link href={`/product/${product.slug}`} key={index} className="flex flex-col items-center group">
              <div className="bg-gray-100 p-4 rounded-lg mb-2 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="text-sm font-medium text-center">{product.name}</h3>
              <p className="text-sm text-gray-600">From ${product.price}</p>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/category/hair-and-beard" className="bg-black text-white px-6 py-2 rounded text-sm">
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
                src="https://lv3.com/cdn/shop/files/DSC03215.jpg"
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
              src="https://lv3.com/cdn/shop/files/Pomade_Blog_Image.jpg"
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
      <Footer />
    </div>
  )
}
