export function ProductsSection() {
  const products = [
    { id: 1, title: 'Product 1' },
    { id: 2, title: 'Product 2' },
    { id: 3, title: 'Product 3' },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-8 py-16">
      <div className="mb-8">
        <div className="h-12 w-64 border-2 border-gray-400 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-700">PRODUCTS SECTION</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border-2 border-gray-400 bg-white p-6">
            {/* Image Placeholder */}
            <div className="aspect-video border-2 border-dashed border-gray-400 bg-gray-100 flex items-center justify-center mb-4">
              <span className="text-gray-500 text-xs">Image Placeholder</span>
            </div>

            {/* Title Placeholder */}
            <div className="h-8 border border-gray-400 bg-gray-200 flex items-center justify-center mb-3">
              <span className="text-gray-600 text-xs">{product.title} Title</span>
            </div>

            {/* Description Placeholder */}
            <div className="space-y-2 mb-4">
              <div className="h-4 border border-gray-300 bg-gray-100" />
              <div className="h-4 border border-gray-300 bg-gray-100" />
              <div className="h-4 border border-gray-300 bg-gray-100 w-3/4" />
            </div>

            {/* Learn More Button */}
            <button className="w-full py-2 border-2 border-gray-400 bg-gray-200 text-gray-700 text-sm hover:bg-gray-300">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
