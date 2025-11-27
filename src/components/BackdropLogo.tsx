export function BackdropLogo() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
      <svg
        width="800"
        height="800"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-[0.03]"
      >
        {/* Outer Circle */}
        <circle cx="400" cy="400" r="350" stroke="#000000" strokeWidth="4" />
        
        {/* Inner Circle */}
        <circle cx="400" cy="400" r="280" stroke="#000000" strokeWidth="2" />
        
        {/* Stylized "A" for AeroTrail */}
        <path
          d="M 400 150 L 500 450 L 460 450 L 440 390 L 360 390 L 340 450 L 300 450 L 400 150 Z M 380 350 L 420 350 L 400 280 L 380 350 Z"
          fill="#000000"
        />
        
        {/* Trail Lines - representing motion/flight */}
        <path
          d="M 200 420 L 280 420"
          stroke="#000000"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 180 450 L 280 450"
          stroke="#000000"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 160 480 L 280 480"
          stroke="#000000"
          strokeWidth="3"
          strokeLinecap="round"
        />
        
        <path
          d="M 520 420 L 600 420"
          stroke="#000000"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 520 450 L 620 450"
          stroke="#000000"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 520 480 L 640 480"
          stroke="#000000"
          strokeWidth="3"
          strokeLinecap="round"
        />
        
        {/* Bottom Arc - representing a trail/path */}
        <path
          d="M 250 550 Q 400 600 550 550"
          stroke="#000000"
          strokeWidth="3"
          fill="none"
        />
        
        {/* Company Name */}
        <text
          x="400"
          y="580"
          fontSize="48"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          textAnchor="middle"
          fill="#000000"
        >
          AEROTRAIL
        </text>
        
        {/* Tagline */}
        <text
          x="400"
          y="620"
          fontSize="20"
          fontFamily="Arial, sans-serif"
          textAnchor="middle"
          fill="#000000"
        >
          INNOVATION IN MOTION
        </text>
        
        {/* Decorative corner elements */}
        <path d="M 100 100 L 150 100 L 150 105 L 105 105 L 105 150 L 100 150 Z" fill="#000000" />
        <path d="M 700 100 L 650 100 L 650 105 L 695 105 L 695 150 L 700 150 Z" fill="#000000" />
        <path d="M 100 700 L 150 700 L 150 695 L 105 695 L 105 650 L 100 650 Z" fill="#000000" />
        <path d="M 700 700 L 650 700 L 650 695 L 695 695 L 695 650 L 700 650 Z" fill="#000000" />
      </svg>
    </div>
  );
}
