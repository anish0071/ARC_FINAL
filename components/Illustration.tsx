
import React, { useState, useEffect, useRef } from 'react';

export const Illustration: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calcPos = (factor: number) => ({
    transform: `translate(${mousePos.x * factor}px, ${mousePos.y * factor}px)`,
    transition: 'transform 0.3s ease-out'
  });

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-[500px] aspect-square flex items-center justify-center select-none"
    >
      {/* Background soft glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-blue-50/20 rounded-full blur-[100px]" />

      {/* REVOLVING COMPONENTS */}
      
      {/* 1. Top Left: Gear/Sun circle */}
      <div 
        className="absolute top-[10%] left-[10%] w-12 h-12 flex items-center justify-center animate-spin-slow"
        style={calcPos(15)}
      >
        <div className="w-8 h-8 rounded-full border-[6px] border-dotted border-purple-500 flex items-center justify-center">
          <div className="w-2 h-2 bg-orange-400 rounded-full" />
        </div>
      </div>

      {/* 2. Top Middle: Dashed Beige Ring */}
      <div 
        className="absolute top-[8%] left-[35%] w-20 h-20 border-4 border-dashed border-orange-200 rounded-full animate-[spin_30s_linear_infinite]"
        style={calcPos(-10)}
      />

      {/* 3. Three Purple Buttons with Arcs above card */}
      <div className="absolute top-[28%] flex gap-6 z-20" style={calcPos(25)}>
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-10 h-10 bg-purple-200 border border-purple-300 rounded-full flex items-center justify-center shadow-sm">
            <div className="w-4 h-2 border-t-2 border-white rounded-t-full opacity-80" />
          </div>
        ))}
      </div>

      {/* 4. Top Right: Dotted Crosshair Circle */}
      <div 
        className="absolute top-[32%] right-[10%] w-16 h-16 border-2 border-dotted border-purple-300 rounded-full flex items-center justify-center animate-pulse"
        style={calcPos(40)}
      >
        <div className="w-[1px] h-10 bg-purple-300 rotate-45" />
        <div className="w-10 h-[1px] bg-purple-300 rotate-45 absolute" />
      </div>

      {/* 5. Left: Large Purple User Icon */}
      <div 
        className="absolute bottom-[28%] left-0 flex flex-col items-center"
        style={calcPos(50)}
      >
        <div className="w-12 h-12 bg-white border-4 border-purple-700 rounded-full mb-1 shadow-sm" />
        <div className="w-24 h-16 bg-purple-800 rounded-t-[40px]" />
      </div>

      {/* 6. Right: Small Purple Box with Orange Bird */}
      <div 
        className="absolute bottom-[28%] right-[12%] flex flex-col items-center"
        style={calcPos(-20)}
      >
        <div className="relative mb-2">
          {/* Bird/Y-shape wings */}
          <div className="w-16 h-8 flex items-end justify-center">
            <div className="w-2 h-2 bg-white border-2 border-purple-300 rounded-full absolute -top-1" />
            <div className="w-12 h-4 border-b-4 border-l-4 border-r-4 border-orange-300 rounded-b-full scale-y-[-1]" />
          </div>
        </div>
        <div className="w-14 h-12 bg-purple-900 rounded-md" />
      </div>

      {/* MAIN CENTRAL CARD */}
      <div 
        className="relative z-10 w-[260px] h-[320px] bg-white border-[3px] border-purple-500 rounded-[35px] shadow-2xl p-6 flex flex-col items-center animate-float overflow-visible"
        style={calcPos(10)}
      >
        {/* Small Key sticking out from top right */}
        <div className="absolute -top-1 -right-4 w-6 h-6 flex flex-col items-center rotate-[15deg]">
          <div className="w-3 h-3 border-2 border-purple-500 rounded-full" />
          <div className="w-1 h-3 bg-purple-500 -mt-1" />
        </div>

        {/* Interior layout matching the image */}
        <div className="w-full mt-6 space-y-3">
          {/* Two small input bars */}
          <div className="h-8 w-full bg-purple-50 rounded-lg shadow-inner opacity-60" />
          <div className="h-8 w-full bg-purple-50 rounded-lg shadow-inner opacity-60" />
          
          {/* Large main area */}
          <div className="h-[100px] w-full border border-purple-100 rounded-xl mt-4 bg-white shadow-sm" />
        </div>

        {/* Bottom Orange Button */}
        <div className="mt-auto mb-2 w-16 h-8 bg-orange-300 rounded-lg shadow-md animate-pulse" />
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
