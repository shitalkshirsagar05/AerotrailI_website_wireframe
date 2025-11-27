import { useState } from 'react';

export function Footer() {
  const [showContactPanel, setShowContactPanel] = useState(false);

  const quickLinks = ['Home', 'Products', 'Services', 'About', 'Contact'];
  const socialIcons = ['FB', 'TW', 'IN', 'YT'];

  return (
    <footer className="bg-gray-200 border-t-2 border-gray-400 py-12">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-3 gap-8 items-start">
          {/* Left: Logo with Contact Panel */}
          <div>
            <div
              className="relative inline-block"
              onMouseEnter={() => setShowContactPanel(true)}
              onMouseLeave={() => setShowContactPanel(false)}
            >
              <div className="w-32 h-12 border-2 border-gray-400 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-600 text-xs">LOGO</span>
              </div>

              {/* Contact Panel - Hover Effect */}
              {showContactPanel && (
                <div className="absolute bottom-full left-0 mb-2 w-64 bg-white border-2 border-gray-400 p-4 shadow-lg">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border border-gray-400 bg-gray-200" />
                      <span className="text-xs text-gray-600">Email: contact@aerotrail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border border-gray-400 bg-gray-200" />
                      <span className="text-xs text-gray-600">Phone: (555) 123-4567</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 left-4 text-xs text-gray-500 bg-gray-200 px-1">
                    ↑ Hover to reveal contact panel
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 text-xs text-gray-600 border border-gray-400 bg-white px-2 py-1 inline-block">
              Contact panel appears on logo hover
            </div>
          </div>

          {/* Center: Quick Links */}
          <div>
            <div className="h-8 w-32 border border-gray-400 bg-gray-300 flex items-center justify-center mb-4">
              <span className="text-gray-600 text-xs">Quick Links</span>
            </div>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <div key={index} className="h-6 border border-gray-300 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-600 text-xs">{link}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Social Icons */}
          <div>
            <div className="h-8 w-32 border border-gray-400 bg-gray-300 flex items-center justify-center mb-4">
              <span className="text-gray-600 text-xs">Follow Us</span>
            </div>
            <div className="flex gap-4">
              {socialIcons.map((icon, index) => (
                <div key={index} className="w-10 h-10 border-2 border-gray-400 bg-gray-200 flex items-center justify-center hover:bg-gray-300 cursor-pointer">
                  <span className="text-gray-600 text-xs">{icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t-2 border-gray-400">
          <div className="h-6 border border-gray-300 bg-gray-100 flex items-center justify-center">
            <span className="text-gray-500 text-xs">© 2025 AeroTrail. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
