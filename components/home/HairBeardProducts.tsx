// components/HairBeardProducts.tsx
import Image from 'next/image';
import Link from 'next/link';

const products = [
  { name: 'Hair Styling Pomade', price: '20.00', image: '/pomade-gold.png' },
  { name: 'Forming Cream', price: '18.00', image: '/forming-cream.png' },
  { name: 'Matte Putty', price: '19.00', image: '/matte-putty.png' },
  { name: 'Spider Wax', price: '18.00', image: '/spider-wax.png' }
];

const HairBeardProducts = () => (
  <section className="py-12 px-8 bg-white">
    <h2 className="text-2xl font-bold text-center mb-8">Hair & Beard</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {products.map((product, index) => (
        <div key={index} className="flex flex-col items-center">
          <Image
            src={product.image || '/placeholder.svg'}
            alt={product.name}
            width={200}
            height={200}
            className="bg-gray-100 p-4 rounded-lg mb-2"
          />
          <h3 className="text-sm font-medium text-center">{product.name}</h3>
          <p className="text-sm text-gray-600">From ${product.price}</p>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-8">
      <Link href="/shop-all" className="bg-black text-white px-6 py-2 rounded text-sm">
        View all
      </Link>
    </div>
  </section>
);

export default HairBeardProducts;
