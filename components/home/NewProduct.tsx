// components/NewHairColor.tsx
import Image from 'next/image';
import Link from 'next/link';

const NewProduct = () => (
  <section className="mt-1 py-12 px-8 bg-black">
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <Image
          src="https://lv3.com/cdn/shop/files/LV3_Images_B_3.jpg"
          alt="Model with green hair"
          layout="responsive"
          width={750}
          height={500}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center">
        <h2 className="avenir-font text-2xl font-bold mb-4 text-gray-100">NEW HAIR COLOR</h2>
        <p className="text-sm text-gray-600 mb-6">
          Discover the LEVEL3 Pop Color Line. With semi-permanent display a color for endless styling options.
        </p>
        <Link href="/hair-and-beard" className="bg-black text-xs text-white px-5 py-2 rounded-lg inline-block w-fit border-2 border-white">
          Shop Now
        </Link>
      </div>
    </div>
  </section>
);

export default NewProduct;
