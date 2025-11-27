import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface NavigationProps {
  showNav: boolean;
  isTransparent: boolean;
}

export function Navigation({ showNav, isTransparent }: NavigationProps) {
  const [showContactPanel, setShowContactPanel] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      } ${isTransparent ? 'bg-transparent' : 'bg-white border-b-2 border-gray-300'}`}
    >
      <div className="max-w-[1440px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo with Contact Panel */}
          <div
            className="relative"
            onMouseEnter={() => setShowContactPanel(true)}
            onMouseLeave={() => setShowContactPanel(false)}
          >
            <div className="w-32 h-12 border-2 border-gray-400 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-600 text-xs">LOGO</span>
            </div>
            
            {/* Contact Panel - Hover Effect */}
            {showContactPanel && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border-2 border-gray-400 p-4 shadow-lg">
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
                <div className="absolute -top-2 left-4 text-xs text-gray-500 bg-white px-1">
                  ← Hover to reveal contact panel
                </div>
              </div>
            )}
          </div>

          {/* Center: Menu Items */}
          <div className="flex items-center gap-8">
            <button className="text-gray-700 text-sm hover:text-gray-900">
              Home
            </button>
            
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowProductsDropdown(true)}
              onMouseLeave={() => setShowProductsDropdown(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 text-sm hover:text-gray-900">
                Products <ChevronDown className="w-3 h-3" />
              </button>
              {showProductsDropdown && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-white border-2 border-gray-400 shadow-lg">
                  <div className="p-2 space-y-1">
                    <div className="px-3 py-2 border border-gray-300 bg-gray-50 text-xs text-gray-600">
                      Product 1
                    </div>
                    <div className="px-3 py-2 border border-gray-300 bg-gray-50 text-xs text-gray-600">
                      Product 2
                    </div>
                    <div className="px-3 py-2 border border-gray-300 bg-gray-50 text-xs text-gray-600">
                      Product 3
                    </div>
                  </div>
                  <div className="absolute -top-2 right-2 text-xs text-gray-500 bg-white px-1">
                    Dropdown menu →
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 text-sm hover:text-gray-900">
                Services <ChevronDown className="w-3 h-3" />
              </button>
              {showServicesDropdown && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-white border-2 border-gray-400 shadow-lg">
                  <div className="p-2 space-y-1">
                    <div className="px-3 py-2 border border-gray-300 bg-gray-50 text-xs text-gray-600">
                      Service 1
                    </div>
                    <div className="px-3 py-2 border border-gray-300 bg-gray-50 text-xs text-gray-600">
                      Service 2
                    </div>
                    <div className="px-3 py-2 border border-gray-300 bg-gray-50 text-xs text-gray-600">
                      Service 3
                    </div>
                  </div>
                  <div className="absolute -top-2 right-2 text-xs text-gray-500 bg-white px-1">
                    Dropdown menu →
                  </div>
                </div>
              )}
            </div>

            <button className="text-gray-700 text-sm hover:text-gray-900">
              About
            </button>
          </div>

          {/* Right: CTA Button */}
          <div className="relative">
            <button className="px-6 py-2 border-2 border-gray-400 bg-gray-200 text-gray-700 text-sm hover:bg-gray-300">
              Get Started / Login
            </button>
          </div>
        </div>
      </div>

      {/* Auto-hide annotation */}
      <div className="absolute -bottom-6 right-8 text-xs text-gray-500 bg-gray-50 px-2 py-1 border border-gray-300">
        ↑ Auto-hide nav (scrolls away when scrolling down)
      </div>
    </nav>
  );
}
