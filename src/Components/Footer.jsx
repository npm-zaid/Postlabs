import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 pt-12 relative">
      {/* Main content */}
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left side */}
          <div className="flex flex-col text-3xl md:text-[3vw] font-bold text-center md:text-left">
            <h1>PostLabs</h1>
          </div>

          {/* Right side */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            {/* Links */}
            <div className="flex flex-col gap-2 mb-6">
              <a href="#" className="hover:text-gray-400">About</a>
              <a href="#" className="hover:text-gray-400">Contact</a>
              <a href="#" className="hover:text-gray-400">Privacy Policy</a>
              <a href="#" className="hover:text-gray-400">Terms of Service</a>
            </div>

            {/* Newsletter Signup */}
            <div className="w-full md:w-80">
              <h4 className="text-lg font-semibold mb-2">Sign Up for Our Newsletter</h4>
              <div className="flex items-center border-b border-gray-500 py-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-black text-white placeholder-gray-500 outline-none w-full"
                />
                <button type="submit" className="text-white ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full mt-12 border-t border-zinc-200/40 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 Post Labs, Inc. All rights reserved.</p>
        <p>Designed by HRVST.</p>
      </div>
    </footer>
  )
}

export default Footer
