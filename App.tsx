
import React from 'react';
import { Illustration } from './components/Illustration';
import { LoginForm } from './components/LoginForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-[#F3F0FF] overflow-hidden">
      {/* Left Section: Illustration & Branding */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 relative">
        <Illustration />
        <h1 className="mt-12 text-3xl font-bold tracking-[0.2em] text-[#2D2159] text-center uppercase">
          A.R.C. Portal
        </h1>
        
        {/* Subtle Background Decorative Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 border-2 border-dashed border-[#DDD6FE] rounded-full animate-spin-slow opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#E9E4FF] rounded-full blur-3xl -z-10"></div>
      </div>

      {/* Right Section: Auth Form */}
      <div className="w-full md:w-1/2 bg-[#6D31ED] flex flex-col items-center justify-center p-6 md:p-12 relative">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>

        {/* Footer Info */}
        <footer className="absolute bottom-6 text-[#A78BFA] text-[10px] uppercase tracking-[0.3em] font-medium">
          A.R.C. Protocol // Node v4.2.0
        </footer>
      </div>
    </div>
  );
};

export default App;
