"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCart } from "@/lib/cart-context"
import { Info, Lock } from "lucide-react"

export default function CheckoutPage() {
  const { cart } = useCart()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [company, setCompany] = useState("")
  const [address, setAddress] = useState("")
  const [apartment, setApartment] = useState("")
  const [city, setCity] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [phone, setPhone] = useState("")
  const [country, setCountry] = useState("United States")
  const [province, setProvince] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [emailOffers, setEmailOffers] = useState(false)
  const [textOffers, setTextOffers] = useState(false)
  const [sameAsBilling, setSameAsBilling] = useState(true)
  const [saveInfo, setSaveInfo] = useState(false)

  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => total + Number.parseFloat(item.price) * item.quantity, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white py-4 border-b">
        <div className="container mx-auto px-4 flex justify-center">
          <Link href="/" className="text-2xl font-bold">
            <Image
              src="https://lv3.com/cdn/shop/files/logo-black_43e43253-9434-431c-b28d-90b4ce7a19e5.svg?v=1678733146&width=240"
              alt="LEVEL3"
              width={120}
              height={40}
            />
          </Link>
        </div>
      </header>

      {/* Back to cart button */}
      <div className="container mx-auto px-4 py-4">
        <button onClick={() => router.back()} className="flex items-center text-sm text-gray-600 hover:text-black">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Return to cart
        </button>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column - Checkout form */}
          <div className="md:w-3/5">
            {/* Express Checkout */}
            <div className="mb-8">
              <p className="text-center text-sm text-gray-500 mb-4">Express checkout</p>
              <div className="grid grid-cols-3 gap-2">
                <button className="bg-[#5A31F4] text-white py-3 rounded flex items-center justify-center">
                  <span className="font-bold">Shop</span>
                  <span className="font-light">Pay</span>
                </button>
                <button className="bg-[#FFC439] text-[#003087] py-3 rounded flex items-center justify-center">
                  <span className="font-bold">Pay</span>
                  <span className="font-bold">Pal</span>
                </button>
                <button className="bg-black text-white py-3 rounded flex items-center justify-center">
                  <span className="mr-1">G</span>
                  <span>Pay</span>
                </button>
              </div>
              <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-gray-200"></div>
                <span className="px-4 text-sm text-gray-500">OR</span>
                <div className="flex-grow h-px bg-gray-200"></div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Contact</h2>
                <button className="text-blue-600 text-sm">Log in</button>
              </div>
              <div className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="email-offers"
                    checked={emailOffers}
                    onChange={() => setEmailOffers(!emailOffers)}
                    className="mr-2"
                  />
                  <label htmlFor="email-offers" className="text-sm">
                    Email me with news and offers
                  </label>
                </div>
              </div>
            </div>

            {/* Delivery */}
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-4">Delivery</h2>
              <div className="space-y-4">
                <div>
                  <div className="relative">
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded appearance-none"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Mexico">Mexico</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="p-3 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="p-3 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company (optional)"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Apartment, suite, etc. (optional)"
                    value={apartment}
                    onChange={(e) => setApartment(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="p-3 border border-gray-300 rounded"
                  />
                  <div className="relative">
                    <select
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded appearance-none"
                    >
                      <option value="">Province</option>
                      <option value="Antioquia">Antioquia</option>
                      <option value="Bogota">Bogota</option>
                      <option value="Valle del Cauca">Valle del Cauca</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Postal code (optional)"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <Info size={16} className="text-gray-400" />
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="text-offers"
                    checked={textOffers}
                    onChange={() => setTextOffers(!textOffers)}
                    className="mr-2"
                  />
                  <label htmlFor="text-offers" className="text-sm">
                    Text me with news and offers
                  </label>
                </div>
              </div>
            </div>

            {/* Shipping Method */}
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-4">Shipping method</h2>
              <div className="bg-gray-100 p-4 rounded text-sm text-gray-600">
                Enter your shipping address to view available shipping methods.
              </div>
            </div>

            {/* Payment */}
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-4">Payment</h2>
              <p className="text-sm text-gray-600 mb-4">All transactions are secure and encrypted.</p>

              <div className="space-y-4">
                {/* Credit Card */}
                <div className="border border-gray-300 rounded overflow-hidden">
                  <div className="flex items-center p-4 bg-white">
                    <input
                      type="radio"
                      id="credit-card"
                      name="payment-method"
                      value="credit-card"
                      checked={paymentMethod === "credit-card"}
                      onChange={() => setPaymentMethod("credit-card")}
                      className="mr-2"
                    />
                    <label htmlFor="credit-card" className="flex-grow">
                      Credit card
                    </label>
                    <div className="flex space-x-1">
                      <div className="w-8 h-5 bg-gray-200 rounded"></div>
                      <div className="w-8 h-5 bg-gray-200 rounded"></div>
                      <div className="w-8 h-5 bg-gray-200 rounded"></div>
                      <div className="w-8 h-5 bg-gray-200 rounded"></div>
                    </div>
                  </div>

                  {paymentMethod === "credit-card" && (
                    <div className="p-4 border-t border-gray-300 space-y-4">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Card number"
                          className="w-full p-3 border border-gray-300 rounded pr-10"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <Lock size={16} className="text-gray-400" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Expiration date (MM / YY)"
                          className="p-3 border border-gray-300 rounded"
                        />
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Security code"
                            className="w-full p-3 border border-gray-300 rounded pr-10"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <Info size={16} className="text-gray-400" />
                          </div>
                        </div>
                      </div>
                      <input
                        type="text"
                        placeholder="Name on card"
                        className="w-full p-3 border border-gray-300 rounded"
                      />
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="same-as-shipping"
                          checked={sameAsBilling}
                          onChange={() => setSameAsBilling(!sameAsBilling)}
                          className="mr-2"
                        />
                        <label htmlFor="same-as-shipping" className="text-sm">
                          Use shipping address as billing address
                        </label>
                      </div>
                    </div>
                  )}
                </div>

                {/* PayPal */}
                <div
                  className={`border ${
                    paymentMethod === "paypal" ? "border-blue-500" : "border-gray-300"
                  } rounded p-4 flex items-center cursor-pointer`}
                  onClick={() => setPaymentMethod("paypal")}
                >
                  <input
                    type="radio"
                    id="paypal"
                    name="payment-method"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                    className="mr-2"
                  />
                  <label htmlFor="paypal" className="flex-grow">
                    PayPal
                  </label>
                  <div className="w-16 h-5 bg-[#003087] rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">PayPal</span>
                  </div>
                </div>

                {/* Klarna */}
                <div
                  className={`border ${
                    paymentMethod === "klarna" ? "border-blue-500" : "border-gray-300"
                  } rounded p-4 flex items-center cursor-pointer`}
                  onClick={() => setPaymentMethod("klarna")}
                >
                  <input
                    type="radio"
                    id="klarna"
                    name="payment-method"
                    value="klarna"
                    checked={paymentMethod === "klarna"}
                    onChange={() => setPaymentMethod("klarna")}
                    className="mr-2"
                  />
                  <label htmlFor="klarna" className="flex-grow">
                    Klarna - Flexible payments
                  </label>
                  <div className="w-16 h-5 bg-[#FFB3C7] rounded flex items-center justify-center">
                    <span className="text-black text-xs font-bold">Klarna</span>
                  </div>
                </div>

                {/* Affirm */}
                <div
                  className={`border ${
                    paymentMethod === "affirm" ? "border-blue-500" : "border-gray-300"
                  } rounded p-4 flex items-center cursor-pointer`}
                  onClick={() => setPaymentMethod("affirm")}
                >
                  <input
                    type="radio"
                    id="affirm"
                    name="payment-method"
                    value="affirm"
                    checked={paymentMethod === "affirm"}
                    onChange={() => setPaymentMethod("affirm")}
                    className="mr-2"
                  />
                  <label htmlFor="affirm" className="flex-grow">
                    Affirm - Pay Over Time
                  </label>
                  <div className="w-16 h-5 bg-[#0FA0EA] rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">affirm</span>
                  </div>
                </div>

                {/* Shop Pay */}
                <div
                  className={`border ${
                    paymentMethod === "shop-pay" ? "border-blue-500" : "border-gray-300"
                  } rounded p-4 flex items-center cursor-pointer`}
                  onClick={() => setPaymentMethod("shop-pay")}
                >
                  <input
                    type="radio"
                    id="shop-pay"
                    name="payment-method"
                    value="shop-pay"
                    checked={paymentMethod === "shop-pay"}
                    onChange={() => setPaymentMethod("shop-pay")}
                    className="mr-2"
                  />
                  <label htmlFor="shop-pay" className="flex-grow text-sm">
                    <span className="font-bold text-[#5A31F4]">Shop</span>
                    <span className="font-light text-[#5A31F4]">Pay</span> Pay in full or in installments
                  </label>
                </div>
              </div>
            </div>

            {/* Remember Me */}
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-4">Remember me</h2>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="save-info"
                  checked={saveInfo}
                  onChange={() => setSaveInfo(!saveInfo)}
                  className="mr-2"
                />
                <label htmlFor="save-info" className="text-sm">
                  Save my information for a faster checkout with a Shop account
                </label>
              </div>

              <div className="flex items-center border border-gray-300 rounded p-3 mb-4">
                <div className="mr-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center">
                    <span className="text-sm mr-1">Mobile phone number</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500">+57</span>
                    <input
                      type="tel"
                      className="ml-2 border-none p-0 text-sm focus:outline-none"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center text-sm text-gray-600 mb-4">
                <Lock size={16} className="mr-2" />
                <span>Secure and encrypted</span>
              </div>

              <button className="w-full bg-[#1773B0] text-white py-4 rounded font-medium">Pay now</button>

              <p className="text-xs text-gray-500 mt-4">
                Your info will be saved to a Shop account. By continuing, you agree to Shop's{" "}
                <a href="#" className="text-blue-600">
                  Terms of Service
                </a>{" "}
                and acknowledge the{" "}
                <a href="#" className="text-blue-600">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            {/* Footer Links */}
            <div className="text-xs text-gray-500 flex flex-wrap gap-4 mt-8">
              <a href="#" className="text-blue-600">
                Refund policy
              </a>
              <a href="#" className="text-blue-600">
                Shipping policy
              </a>
              <a href="#" className="text-blue-600">
                Privacy policy
              </a>
              <a href="#" className="text-blue-600">
                Terms of service
              </a>
              <a href="#" className="text-blue-600">
                Cancellation policy
              </a>
              <a href="#" className="text-blue-600">
                Contact information
              </a>
            </div>
          </div>

          {/* Right column - Order summary (sticky) */}
          <div className="md:w-2/5">
            <div className="sticky top-4 bg-gray-100 p-6 rounded max-h-screen overflow-y-auto">
              {/* Cart Items */}
              <div className="mb-6">
                {cart.map((item) => (
                  <div key={`${item.slug}-${item.size}`} className="flex items-center mb-4">
                    <div className="relative mr-4">
                      <div className="w-16 h-16 bg-white rounded-md flex items-center justify-center">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="object-contain"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {item.quantity}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.size}</p>
                    </div>
                    <p className="font-medium">${Number.parseFloat(item.price).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              {/* Discount Code */}
              <div className="border-t border-gray-300 pt-4 mb-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm">Discount code or gift card</p>
                  <button className="text-sm text-gray-600 font-medium">Apply</button>
                </div>
              </div>

              {/* Subtotal */}
              <div className="border-t border-gray-300 pt-4 mb-4">
                <div className="flex justify-between mb-2">
                  <p>Subtotal</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="flex items-center">
                    <p>Shipping</p>
                    <Info size={16} className="ml-1 text-gray-400" />
                  </div>
                  <button className="text-sm text-blue-600">Enter shipping address</button>
                </div>
              </div>

              {/* Total */}
              <div className="border-t border-gray-300 pt-4 mb-6">
                <div className="flex justify-between">
                  <p className="font-medium">Total</p>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">USD</p>
                    <p className="font-medium">${subtotal.toFixed(2)}</p>
                  </div>
                </div>
              </div>

              {/* Loyalty Points */}
              <div className="bg-gray-200 p-4 rounded mb-4">
                <p className="font-medium mb-2">Redeem your L3VEL3 Points</p>
                <p className="text-sm mb-2">
                  <a href="#" className="text-blue-600">
                    Log in
                  </a>{" "}
                  to view your points balance and discover rewards available for redemption.
                </p>
                <button className="w-full bg-gray-300 text-gray-600 py-2 rounded text-sm mb-2">
                  Select L3VEL3 Points to redeem
                </button>
                <button className="w-full bg-gray-400 text-white py-2 rounded text-sm">Redeem</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
