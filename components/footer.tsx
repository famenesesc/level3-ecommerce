import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="mb-4">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
              <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z" />
            </svg>
          </div>
          <p className="text-xs mb-4">Official US Online Shop</p>
          <div className="mb-4">
            <p className="text-xs mb-2">Subscribe to our emails</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="bg-black border border-white px-3 py-2 text-sm w-full"
              />
            </div>
          </div>
          <div>
            <p className="text-xs mb-2">Country/region</p>
            <select className="bg-black border border-white px-3 py-2 text-xs w-full">
              <option>United States (USD $)</option>
            </select>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-4">Navigation</h3>
          <ul className="text-xs space-y-2">
            <li>
              <Link href="#">Shop</Link>
            </li>
            <li>
              <Link href="#">Store Locator</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-4">Programs</h3>
          <ul className="text-xs space-y-2">
            <li>
              <Link href="#">Pro</Link>
            </li>
            <li>
              <Link href="#">Distributor</Link>
            </li>
            <li>
              <Link href="#">Referral Program</Link>
            </li>
            <li>
              <Link href="#">LEVEL3 Rewards</Link>
            </li>
            <li>
              <Link href="#">Affiliate</Link>
            </li>
          </ul>
        </div>

        <div>{/* Empty column for spacing */}</div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-4 border-t border-gray-800 text-xs">
        <div className="flex flex-wrap gap-4">
          <span>© 2023, LEVEL3</span>
          <Link href="#">Terms of service</Link>
          <Link href="#">Privacy policy</Link>
          <Link href="#">Terms of service</Link>
          <Link href="#">Refund policy</Link>
          <Link href="#">Shipping information</Link>
        </div>
      </div>
    </footer>
  )
}
