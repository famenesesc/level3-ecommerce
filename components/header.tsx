"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronDown, Search, ShoppingCart, User, Heart } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
          <ShoppingCart size={18} className="hover:text-[#00a651] cursor-pointer transition-colors" />
        </div>
      </div>
    </header>
  )
}
