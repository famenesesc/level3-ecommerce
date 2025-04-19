"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronDown, Search, ShoppingCart, User, Heart } from "lucide-react"
import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { ShoppingCart as CartComponent } from "./shopping-cart"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { cart, isCartOpen, setIsCartOpen } = useCart()

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const isScrolled = window.scrollY > 30
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  // Evitar renderizado en el servidor para prevenir errores de hidratación
  if (!mounted) {
    return (
      <header className="w-full py-4 bg-transparent">
        <div className="container mx-auto flex items-center justify-between px-8">
          <div className="flex items-center gap-8">
            <div className="w-[120px] h-[40px]"></div>
            <nav className="hidden md:flex gap-6">
              <div className="text-sm font-medium">Home</div>
              <div className="text-sm font-medium">Categories</div>
              <div className="text-sm font-medium">Programs</div>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm hidden md:inline">Navigation</span>
          </div>
        </div>
      </header>
    )
  }

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-black text-white py-3" : "bg-transparent text-white py-4"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-8">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-[#00a651]">
              <Image
                src="https://lv3.com/cdn/shop/files/logo-white_43e43253-9434-431c-b28d-90b4ce7a19e5.svg?v=1678733146&width=240"
                alt="Logo Level 3"
                width={120}
                height={120}
              />
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="text-sm font-medium hover:text-[#00a651] transition-colors">
                Home
              </Link>
              <Link href="/categories" className="text-sm font-medium hover:text-[#00a651] transition-colors">
                Categories
              </Link>
              <Link href="/programs" className="text-sm font-medium hover:text-[#00a651] transition-colors">
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
            <Search size={18} className="hover:text-[#00a651] cursor-pointer transition-colors" />
            <User size={18} className="hover:text-[#00a651] cursor-pointer transition-colors" />
            <Heart size={18} className="hover:text-[#00a651] cursor-pointer transition-colors" />
            <button onClick={() => setIsCartOpen(true)} className="relative hover:text-[#00a651] transition-colors">
              <ShoppingCart size={18} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#00a651] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Shopping Cart Sidebar */}
      <CartComponent isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}