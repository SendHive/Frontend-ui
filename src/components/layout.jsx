import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>

      {/* Wave Section */}
      <div className="absolute bottom-0 left-0 w-full h-1/6 sm:h-1/5 md:h-1/4 lg:h-1/3 overflow-hidden mt-4">
        {/* ↓ Responsive Height Adjustments ↓ */}
        <svg
          className="absolute bottom-0 left-0 w-full h-full rotate-180"
          viewBox="0 0 1200 60"  // Adjusted for responsive height
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V23.15c47.79,11.1,103.59,16.08,158,14,70.36-2.69,136.33-16.66,206.8-18.75C438.64,16.21,512.34,26.83,583,36.03c69.27,9,138.3,12.44,209.4,6.54,36.15-3,69.85-8.92,104.45-14.67C989.49,12.5,1113-7.14,1200,26.23V0Z"
            opacity=".25"
            className="fill-green-500"
          />
          <path
            d="M0,0V7.9C13,18.46,27.64,28.43,47.69,36.03,99.41,55.63,165,55.5,224.58,45.79c31.15-5.08,60.09-13.04,89.67-19.9,40.92-9.5,84.73-23,130.83-24.83,36.26-1.43,70.9,4.71,98.6,15.78,31.77,12.7,62.32,31,103.63,36.5,40.44,5.39,81.35-3.34,119.13-12.14s75.16-19.5,116.92-21.52c59.73-2.92,113.28,11.44,168.9,19.42,30.2,4.33,59,3.08,87.09-3.75,22.43-5.44,48-13.46,60.65-24.62V0Z"
            opacity=".5"
            className="fill-green-500"
          />
          <path
            d="M0,0V2.82C149.93,29.5,314.09,35.66,475.83,21.28c43-3.82,84.23-10.06,127.61-13.23,59-4.31,112.48,6.12,165.56,17.7C827.93,38.61,886,47.62,951.2,45c86.53-3.5,172.46-22.85,248.8-42.4V0Z"
            className="fill-green-500"
          />
        </svg>
      </div>
    </div>
  );
};

export default Layout;
