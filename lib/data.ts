// Centralized data store for the application

// Category definitions
export const categories = [
  {
    name: "Hair & Beard",
    slug: "hair-and-beard",
    image: "https://lv3.com/cdn/shop/collections/category_hair_mobile.png",
    bannerImage: "/hair-products-banner.png",
    description: "Premium styling products for all hair types and beards",
  },
  {
    name: "Skincare",
    slug: "skincare",
    image: "https://lv3.com/cdn/shop/collections/category_skin_mobile_1.png",
    bannerImage: "/skincare-banner.png",
    description: "Advanced formulas for healthy, vibrant skin",
  },
  {
    name: "Accessories",
    slug: "accessories",
    image: "https://lv3.com/cdn/shop/collections/Artboard_1_copy_8.png",
    bannerImage: "/accessories-banner.png",
    description: "Professional tools to complete your grooming routine",
  },
]

// Product definitions
export const products = [
  // Hair & Beard Products
  {
    slug: "hair-styling-pomade",
    name: "Hair Styling Pomade",
    price: "20.00",
    image: "/pomade-gold.png",
    category: "hair-and-beard",
    description:
      "A water-based styling pomade that delivers healthy hold and brilliant shine, while its formula supports hair strength and health.",
    benefits: [
      "Provides a long-lasting, brilliant shine without blocking your natural oils",
      "Strong hold for various styles, from immaculate to waves and more",
      "Enriched with natural ingredients that nourish your hair",
      "Strengthens and conditions your hair while you style",
    ],
    usage: [
      "Place a small amount of pomade in your palms",
      "Rub your hands together to warm the pomade",
      "Apply to damp or dry hair and style as desired",
    ],
    featured: true,
  },
  {
    slug: "forming-cream",
    name: "Forming Cream",
    price: "18.00",
    image: "/forming-cream.png",
    category: "hair-and-beard",
    description:
      "A versatile styling cream that provides medium hold and natural finish, perfect for everyday styling.",
    featured: false,
  },
  {
    slug: "matte-putty",
    name: "Matte Putty",
    price: "19.00",
    image: "/matte-putty.png",
    category: "hair-and-beard",
    description:
      "A high-hold, low-shine styling putty that creates texture and definition with a natural matte finish.",
    featured: true,
  },
  {
    slug: "spider-wax",
    name: "Spider Wax - Fiber Texture Wax",
    price: "18.00",
    image: "/spider-wax.png",
    category: "hair-and-beard",
    description: "A fiber-infused wax that creates texture and separation with a flexible hold and natural finish.",
    featured: false,
  },
  {
    slug: "brilliant-cream",
    name: "Brilliant Cream",
    price: "17.00",
    image: "/brilliant-cream.png",
    category: "hair-and-beard",
    description: "A lightweight styling cream that adds shine and definition without weighing hair down.",
    featured: false,
  },
  {
    slug: "sculpting-clay",
    name: "Sculpting Clay",
    price: "17.00",
    image: "/sculpting-clay.png",
    category: "hair-and-beard",
    description: "A strong-hold clay that creates texture and definition with a matte finish.",
    featured: false,
  },
  {
    slug: "light-hold-styling-powder",
    name: "Light Hold Styling Powder",
    price: "16.00",
    image: "/styling-powder.png",
    category: "hair-and-beard",
    description: "A volumizing powder that adds texture and lift with a light, natural hold.",
    featured: false,
  },
  {
    slug: "beard-oil",
    name: "Beard Oil",
    price: "16.00",
    image: "/beard-oil.png",
    category: "hair-and-beard",
    description: "A nourishing oil that conditions and softens beard hair while moisturizing the skin underneath.",
    featured: false,
  },

  // Skincare Products
  {
    slug: "facial-cleanser",
    name: "Facial Cleanser",
    price: "22.00",
    image: "/facial-cleanser.png",
    category: "skincare",
    description:
      "A gentle yet effective cleanser that removes impurities without stripping the skin of its natural oils.",
    benefits: [
      "Removes dirt, oil, and impurities without drying the skin",
      "Balances skin's natural pH level",
      "Suitable for all skin types, including sensitive skin",
      "Prepares skin for the rest of your skincare routine",
    ],
    usage: [
      "Apply a small amount to damp skin",
      "Massage gently in circular motions",
      "Rinse thoroughly with warm water",
      "Use morning and evening",
    ],
    featured: true,
  },
  {
    slug: "moisturizer",
    name: "Daily Moisturizer",
    price: "24.00",
    image: "/moisturizer.png",
    category: "skincare",
    description: "A lightweight, fast-absorbing moisturizer that provides all-day hydration.",
    featured: false,
  },
  {
    slug: "face-scrub",
    name: "Exfoliating Face Scrub",
    price: "20.00",
    image: "/face-scrub.png",
    category: "skincare",
    description: "A gentle exfoliating scrub that removes dead skin cells and unclogs pores.",
    featured: false,
  },
  {
    slug: "aftershave-balm",
    name: "Aftershave Balm",
    price: "18.00",
    image: "/aftershave-balm.png",
    category: "skincare",
    description: "A soothing balm that calms and hydrates skin after shaving.",
    featured: true,
  },

  // Accessories Products
  {
    slug: "beard-brush",
    name: "Beard Brush",
    price: "14.99",
    image: "/beard-brush.png",
    category: "accessories",
    description: "A premium beard brush with natural boar bristles to help distribute oils and style your beard.",
    benefits: [
      "Natural boar bristles distribute oils evenly throughout your beard",
      "Helps detangle and style your beard",
      "Stimulates the skin underneath for better beard growth",
      "Ergonomic handle for comfortable use",
    ],
    usage: [
      "Use daily on a dry beard",
      "Brush in the direction of hair growth",
      "Start at the neck and work upward, then outward from the chin",
    ],
    featured: true,
  },
  {
    slug: "hair-comb",
    name: "Professional Hair Comb",
    price: "12.99",
    image: "/hair-comb.png",
    category: "accessories",
    description: "A professional-grade hair comb with smooth, rounded teeth to prevent snagging.",
    featured: false,
  },
  {
    slug: "styling-scissors",
    name: "Precision Styling Scissors",
    price: "24.99",
    image: "/styling-scissors.png",
    category: "accessories",
    description: "Professional styling scissors with sharp, precision-honed blades for clean, accurate cuts.",
    featured: true,
  },
  {
    slug: "travel-kit",
    name: "Grooming Travel Kit",
    price: "34.99",
    image: "/travel-kit.png",
    category: "accessories",
    description: "A compact travel kit containing all the essential grooming tools you need on the go.",
    featured: false,
  },
]

// Helper functions to access the data
export function getProductsByCategory(categorySlug: string) {
  return products.filter((product) => product.category === categorySlug)
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug)
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured)
}

export function getRelatedProducts(categorySlug: string, currentProductSlug: string) {
  return products
    .filter((product) => product.category === categorySlug && product.slug !== currentProductSlug)
    .slice(0, 4)
}
