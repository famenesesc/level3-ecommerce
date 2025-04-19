"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Trash2, ChevronDown } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useRouter } from "next/navigation"

export function ShoppingCart({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart()
  const [recommendedProducts, setRecommendedProducts] = useState<any[]>([])
  const router = useRouter()

  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => total + Number.parseFloat(item.price) * item.quantity, 0)

  // Calculate remaining amount for free shipping
  const FREE_SHIPPING_THRESHOLD = 50
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)
  const progressPercentage = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)

  // Fetch recommended products
  useEffect(() => {
    // In a real app, you might want to fetch recommendations based on cart items
    // For now, we'll just use a few hardcoded products
    setRecommendedProducts([
      {
        slug: "spider-wax",
        name: "Spider Wax - Fiber Texture Wax",
        price: "9.99",
        image: "/spider-wax.png",
        size: "100g",
      },
      {
        slug: "paste-matte",
        name: "Paste - Matte Finish",
        price: "11.99",
        image: "/paste-matte.png",
        size: "100g",
      },
    ])
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

      {/* Cart panel */}
      <div className="relative w-full max-w-md bg-black text-white overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h2 className="text-lg font-bold">Shopping Cart ({cart.length})</h2>
          <button onClick={onClose} className="text-white hover:text-gray-300">
            <X size={24} />
          </button>
        </div>

        {/* Free shipping progress */}
        {remainingForFreeShipping > 0 ? (
          <div className="p-4 border-b border-gray-800">
            <p className="text-sm mb-2">Spend ${remainingForFreeShipping.toFixed(2)} more to get free shipping</p>
            <div className="w-full bg-gray-700 h-2 rounded-full">
              <div className="bg-[#00a651] h-2 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
            </div>
          </div>
        ) : (
          <div className="p-4 border-b border-gray-800 text-center text-[#00a651] font-medium">Free Shipping</div>
        )}

        {/* Cart items */}
        {cart.length === 0 ? (
          <div className="p-8 text-center">
            <p className="mb-4">Your cart is empty</p>
            <button onClick={onClose} className="bg-white text-black px-4 py-2 rounded">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="divide-y divide-gray-800">
              {cart.map((item) => (
                <div key={`${item.slug}-${item.size}`} className="p-4 flex">
                  <div className="w-20 h-20 bg-white rounded mr-4 flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-400">{item.size}</p>
                      </div>
                      <p className="font-medium">${Number.parseFloat(item.price).toFixed(2)}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <button
                        onClick={() => removeFromCart(item.slug, item.size)}
                        className="text-gray-400 hover:text-white"
                      >
                        <Trash2 size={18} />
                      </button>
                      <div className="flex items-center border border-gray-700 rounded">
                        <button
                          onClick={() => updateQuantity(item.slug, item.size, Math.max(1, item.quantity - 1))}
                          className="px-2 py-1 text-gray-400 hover:text-white"
                        >
                          -
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.slug, item.size, item.quantity + 1)}
                          className="px-2 py-1 text-gray-400 hover:text-white"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* You may also like */}
            <div className="p-4 border-t border-gray-800">
              <h3 className="text-lg font-medium mb-4">You may also like</h3>
              <div className="space-y-4">
                {recommendedProducts.map((product) => (
                  <div key={product.slug} className="flex items-center">
                    <div className="w-16 h-16 bg-white rounded mr-4 flex-shrink-0">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={64}
                        height={64}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-medium text-sm">{product.name}</h4>
                          <p className="text-xs text-gray-400">{product.size}</p>
                        </div>
                        <p className="font-medium">${product.price}</p>
                      </div>
                    </div>
                    <div className="ml-2">
                      <div className="flex flex-col space-y-1">
                        <button
                          className="bg-white text-black text-xs px-3 py-1 rounded"
                          onClick={() => {
                            // In a real app, you would add the product to cart here
                            onClose()
                          }}
                        >
                          Add To Cart
                        </button>
                        <button
                          className="bg-[#5A31F4] text-white text-xs px-3 py-1 rounded"
                          onClick={() => {
                            // In a real app, you would add the product to cart here
                            onClose()
                            router.push("/checkout")
                          }}
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coupon code */}
            <div className="p-4 border-t border-gray-800">
              <button className="flex items-center text-sm">
                Add a Coupon Code
                <ChevronDown size={16} className="ml-1" />
              </button>
            </div>

            {/* Subtotal and checkout */}
            <div className="p-4 border-t border-gray-800">
              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <button
                className="w-full bg-white text-black py-3 rounded mb-2"
                onClick={() => {
                  onClose()
                  router.push("/checkout")
                }}
              >
                Checkout • ${subtotal.toFixed(2)}
              </button>
              <button onClick={onClose} className="w-full text-center py-2">
                Continue Shopping
              </button>
            </div>

            {/* Payment methods */}
            <div className="p-4 flex justify-center space-x-2 border-t border-gray-800">
              <div className="w-10 h-6 bg-[#1434CB] rounded"></div>
              <div className="w-10 h-6 bg-white rounded"></div>
              <div className="w-10 h-6 bg-[#3C4043] rounded"></div>
              <div className="w-10 h-6 bg-[#5A31F4] rounded"></div>
              <div className="w-10 h-6 bg-[#0079C1] rounded"></div>
              <div className="w-10 h-6 bg-[#FF5F00] rounded"></div>
              <div className="w-10 h-6 bg-[#1A1F71] rounded"></div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
