import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls past the hero section (750px)
      if (window.scrollY > 750) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {/* Annotation */}
      <div className="absolute -top-8 right-0 text-xs text-gray-600 bg-white border border-gray-400 px-2 py-1 whitespace-nowrap">
        ↓ Back to Home/Top
      </div>

      {/* Button */}
      <button
        onClick={scrollToTop}
        className="w-14 h-14 border-2 border-gray-600 bg-gray-300 hover:bg-gray-400 flex items-center justify-center transition-all duration-300 shadow-lg group"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
      </button>

      {/* Button Label */}
      <div className="mt-2 text-center">
        <span className="text-xs text-gray-600 border border-gray-400 bg-white px-2 py-1 inline-block">
          HOME
        </span>
      </div>
    </div>
  );
}
