export function HeroSection() {
  return (
    <section className="relative h-[750px] max-w-[1440px] mx-auto overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 bg-gray-200 border-4 border-gray-400 flex flex-col items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-64 h-64 border-2 border-dashed border-gray-500 mx-auto flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-2 border-gray-500 mx-auto mb-2 flex items-center justify-center">
                <span className="text-2xl text-gray-500">▶</span>
              </div>
              <span className="text-gray-600 text-sm">MP4 Background Video</span>
            </div>
          </div>
          <div className="text-xs text-gray-500 border border-gray-400 bg-white px-3 py-1 inline-block">
            Full-width background video placeholder (1440px × 750px)
          </div>
        </div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="text-center space-y-6 max-w-3xl px-8">
          {/* Large Heading Placeholder */}
          <div className="space-y-3">
            <div className="h-16 border-2 border-gray-600 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-700 text-sm">LARGE HEADING TEXT</span>
            </div>
            <div className="h-8 border border-gray-500 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600 text-xs">Small subheading text goes here</span>
            </div>
          </div>

          {/* Primary CTA Button */}
          <div className="pt-4">
            <button className="px-8 py-3 border-2 border-gray-600 bg-gray-300 text-gray-700 hover:bg-gray-400">
              PRIMARY CTA BUTTON
            </button>
          </div>
        </div>
      </div>

      {/* Transparency Note */}
      <div className="absolute top-4 right-4 bg-white border-2 border-gray-400 px-4 py-2 text-xs text-gray-600 max-w-xs">
        <div className="space-y-1">
          <p>⚠️ Nav becomes transparent here</p>
          <p>and hides on scroll down</p>
        </div>
      </div>
    </section>
  );
}
