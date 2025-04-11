import Link from "next/link"

const Footer = () => (
    <footer className="bg-black text-white py-12 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="border border-white p-4 mb-4 w-20 h-20 flex items-center justify-center">
              <span className="text-xs">LEVEL3</span>
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
                <Link href="#">Accessibility</Link>
              </li>
              <li>
                <Link href="#">Store Locator</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Programs</h3>
            <ul className="text-xs space-y-2">
              <li>
                <Link href="#">Authorized Dealer</Link>
              </li>
              <li>
                <Link href="#">Pro</Link>
              </li>
              <li>
                <Link href="#">Referral Program</Link>
              </li>
              <li>
                <Link href="#">Digital & Rewards</Link>
              </li>
              <li>
                <Link href="#">Affiliates</Link>
              </li>
            </ul>
          </div>

          <div>{/* Empty column for spacing */}</div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 pt-4 border-t border-gray-800 text-xs">
          <div className="flex flex-wrap gap-4">
            <span>© 2023, LEVEL3</span>
            <Link href="#">Refunds</Link>
            <Link href="#">Privacy policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Shipping and product information</Link>
          </div>
        </div>
      </footer>
  );
  
  export default Footer;
  