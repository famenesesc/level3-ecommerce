// components/Categories.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight  } from "lucide-react";


const Categories = () => (
  <section className="py-12 px-8 bg-gray-50 text-foreground avenir2-font">
    <h2 className="text-5xl text-center mb-8">Categories</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      
      <div className="flex flex-col items-center group cursor-pointer">
        <Image 
          src="https://lv3.com/cdn/shop/collections/category_hair_mobile.png" 
          alt="Hair & Beard" 
          width={200} height={200} 
          className="rounded-lg mb-2 transition-transform duration-300 group-hover:-translate-y-1" 
        />
        <Link href="/hair-and-beard" className="flex items-center gap-2 text-sm font-medium group-hover:text-primary">
          Hair & Beard
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <Image 
          src="https://lv3.com/cdn/shop/collections/category_skin_mobile_1.png" 
          alt="Skincare" 
          width={200} height={200} 
          className="rounded-lg mb-2" />
        <Link href="/skincare" className="flex items-center gap-2 text-sm font-medium group hover:text-primary">
          Skincare
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="https://lv3.com/cdn/shop/collections/Artboard_1_copy_8.png"
          alt="Accessories"
          width={200}
          height={200}
          className="rounded-lg mb-2"
        />
        <span className="text-sm font-medium">Accessories</span>
      </div>
    </div>
  </section>
);

export default Categories;
