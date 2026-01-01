
import React from 'react';
import { Illustration } from './components/Illustration';
import { LoginForm } from './components/LoginForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-[#F8F9FF] overflow-hidden">
      {/* Left Section: Illustration & Branding */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 md:p-12 relative">
        <div className="w-full max-w-[600px] flex flex-col items-center">
          <Illustration />
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold tracking-[0.25em] text-[#2D2159] uppercase">
              A.R.C. PORTAL
            </h2>
          </div>
        </div>
        
        {/* Subtle radial background for a clean template look */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(235,230,255,1)_0%,_rgba(248,249,255,1)_60%)] -z-10"></div>
      </div>

      {/* Right Section: Auth Form */}
      <div className="w-full md:w-1/2 bg-[#6D31ED] flex flex-col items-center justify-center p-6 md:p-12 relative lg:rounded-l-[80px] shadow-[-20px_0_50px_rgba(0,0,0,0.1)]">
        <div className="w-full max-w-md z-10">
          <LoginForm />
        </div>

        {/* Footer Info */}
        <footer className="absolute bottom-8 text-[#A78BFA]/60 text-[10px] uppercase tracking-[0.4em] font-bold">
          System Secure // v4.2.0
        </footer>
      </div>
    </div>
  );
};

export default App;
