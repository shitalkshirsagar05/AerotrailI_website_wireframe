export function ServicesSection() {
  const services = [
    { id: 1, title: 'Nextcloud' },
    { id: 2, title: 'Consulting' },
    { id: 3, title: 'Data Pipeline' },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-8 py-16 bg-gray-100">
      <div className="mb-8">
        <div className="h-12 w-64 border-2 border-gray-400 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-700">SERVICES SECTION</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="border-2 border-gray-400 bg-white p-8">
            {/* Icon Placeholder */}
            <div className="w-16 h-16 border-2 border-gray-400 bg-gray-200 mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-600 text-xs">Icon</span>
            </div>

            {/* Title */}
            <div className="h-8 border border-gray-400 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600 text-sm">{service.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
