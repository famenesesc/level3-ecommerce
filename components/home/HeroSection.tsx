"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search, User, Heart, ShoppingCart } from "lucide-react";

const HeroSection = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50); // Puedes ajustar este número si quieres que sea más sensible
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="relative h-[100vh] w-full bg-cover bg-center"
      style={{
        backgroundImage: "url(https://lv3.com/cdn/shop/files/foil_wide.png)",
      }}
    >
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 px-12 py-8 ${
          hasScrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-40">
            <Link href="/">
              <Image
                src="https://lv3.com/cdn/shop/files/logo-white_43e43253-9434-431c-b28d-90b4ce7a19e5.svg?v=1678733146&width=120"
                alt="Logo level 3"
                width={120}
                height={20}
              />
            </Link>
            <nav className="hidden md:flex gap-24">
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
        </div>
      </header>
    </section>
  );
};

export default HeroSection;
