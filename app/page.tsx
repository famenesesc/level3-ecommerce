import Image from "next/image"
import Link from "next/link"

import TopBar from '../components/shared/TopBar';
import HeroSection from '../components/home/HeroSection';
import NewHairColor from '../components/home/NewProduct';
import Categories from '../components/home/Categories';
import HairBeardProducts from '../components/home/HairBeardProducts';
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

{/* Componentes Inicio */}
      <TopBar />
      <HeroSection />
      <Categories />
      <NewHairColor />
      <HairBeardProducts />
{/* Componentes Fin */}     

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
