
import React from 'react';

export const Illustration: React.FC = () => {
  return (
    <div className="relative w-[300px] h-[340px] flex items-center justify-center">
      {/* Background Shapes */}
      <div className="absolute top-0 right-10 w-12 h-12 bg-orange-100 rounded-full blur-xl animate-pulse"></div>
      
      {/* Floating Circles Top Left */}
      <div className="absolute -top-10 left-10 flex flex-col gap-2 opacity-40">
        <div className="w-10 h-10 border-4 border-dotted border-orange-300 rounded-full animate-spin-slow"></div>
        <div className="w-4 h-4 bg-purple-400 rounded-full self-end"></div>
      </div>

      {/* Main Tablet-like Shape */}
      <div className="relative z-10 w-[240px] h-[320px] bg-white border-[3px] border-[#6D31ED] rounded-[40px] p-6 shadow-2xl animate-float">
        <div className="w-full h-8 bg-gray-50 rounded-lg mb-4"></div>
        <div className="w-full h-8 bg-gray-50 rounded-lg mb-8"></div>
        <div className="w-full h-[140px] border-2 border-purple-100 rounded-2xl flex items-center justify-center">
          <div className="w-12 h-12 bg-purple-50 rounded-full"></div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-20 h-8 bg-orange-300 rounded-xl opacity-60"></div>
      </div>

      {/* User Icon Side Element */}
      <div className="absolute bottom-10 -left-12 flex flex-col items-center">
        <div className="w-14 h-14 bg-white border-4 border-purple-800 rounded-full mb-2"></div>
        <div className="w-20 h-16 bg-purple-800 rounded-t-[30px]"></div>
      </div>

      {/* Right Side Abstract Elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6">
         {/* Key symbol hint */}
         <div className="w-6 h-6 border-2 border-gray-400 rounded-sm rotate-45 relative before:content-[''] before:absolute before:w-1 before:h-4 before:bg-gray-400 before:top-4 before:left-2"></div>
         
         {/* Decorative Cross/X */}
         <div className="w-16 h-16 border-2 border-dashed border-purple-300 rounded-full flex items-center justify-center rotate-45">
            <div className="w-[1px] h-10 bg-purple-300"></div>
            <div className="w-10 h-[1px] bg-purple-300 absolute"></div>
         </div>
      </div>

      {/* Small Plant-like Shape */}
      <div className="absolute bottom-4 -right-10 flex flex-col items-center">
        <div className="relative">
            <div className="w-10 h-4 bg-orange-400 rounded-full -rotate-45 translate-x-1"></div>
            <div className="w-10 h-4 bg-orange-400 rounded-full rotate-45 -translate-x-1 -mt-2"></div>
        </div>
        <div className="w-12 h-12 bg-purple-900 rounded-md mt-1"></div>
      </div>

      {/* Floating Arrows Above Card */}
      <div className="absolute -top-12 flex gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-10 h-10 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};
