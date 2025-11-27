export function AboutSection() {
  const teamMembers = [
    { id: 1, name: 'Team Member 1', role: 'Role' },
    { id: 2, name: 'Team Member 2', role: 'Role' },
    { id: 3, name: 'Team Member 3', role: 'Role' },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-8 py-16">
      <div className="mb-8">
        <div className="h-12 w-64 border-2 border-gray-400 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-700">ABOUT US SECTION</span>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="grid grid-cols-2 gap-8 mb-12">
        <div className="border-2 border-gray-400 bg-white p-8">
          <div className="h-8 w-24 border border-gray-400 bg-gray-200 flex items-center justify-center mb-4">
            <span className="text-gray-600 text-xs">Mission</span>
          </div>
          <div className="space-y-2">
            <div className="h-4 border border-gray-300 bg-gray-100" />
            <div className="h-4 border border-gray-300 bg-gray-100" />
            <div className="h-4 border border-gray-300 bg-gray-100" />
            <div className="h-4 border border-gray-300 bg-gray-100 w-2/3" />
          </div>
        </div>

        <div className="border-2 border-gray-400 bg-white p-8">
          <div className="h-8 w-24 border border-gray-400 bg-gray-200 flex items-center justify-center mb-4">
            <span className="text-gray-600 text-xs">Values</span>
          </div>
          <div className="space-y-2">
            <div className="h-4 border border-gray-300 bg-gray-100" />
            <div className="h-4 border border-gray-300 bg-gray-100" />
            <div className="h-4 border border-gray-300 bg-gray-100" />
            <div className="h-4 border border-gray-300 bg-gray-100 w-2/3" />
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="border-t-2 border-gray-300 pt-8">
        <div className="h-8 w-48 border border-gray-400 bg-gray-200 flex items-center justify-center mb-8">
          <span className="text-gray-600 text-xs">Our Team</span>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              {/* Circle Avatar Placeholder */}
              <div className="w-32 h-32 rounded-full border-2 border-gray-400 bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 text-xs">Photo</span>
              </div>

              {/* Name Placeholder */}
              <div className="h-6 border border-gray-400 bg-gray-200 flex items-center justify-center mb-2">
                <span className="text-gray-600 text-xs">{member.name}</span>
              </div>

              {/* Role Placeholder */}
              <div className="h-5 border border-gray-300 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-500 text-xs">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
