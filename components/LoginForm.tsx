
import React, { useState } from 'react';
import { User, Lock, Zap, Chrome } from 'lucide-react';

export const LoginForm: React.FC = () => {
  const [identity, setIdentity] = useState('');
  const [phrase, setPhrase] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="bg-white rounded-[40px] p-10 custom-shadow w-full">
      {/* Logo & Header */}
      <div className="flex flex-col items-center mb-10">
        <div className="bg-[#6D31ED] p-3 rounded-2xl mb-4 shadow-lg shadow-purple-200">
          <Zap className="text-white w-8 h-8 fill-white" />
        </div>
        <h2 className="text-2xl font-bold text-[#2D2159] tracking-tight mb-6">A.R.C.</h2>
        
        {/* Login Badge */}
        <div className="bg-[#F8F7FF] border border-[#E9E4FF] px-6 py-2 rounded-full flex items-center gap-2">
          <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
          <span className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase">Login</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Identity Input */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-[#A78BFA] tracking-[0.2em] uppercase block ml-1">
            Access Identity
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C4B5FD]" />
            <input
              type="text"
              placeholder="asection@citchennai.net"
              value={identity}
              onChange={(e) => setIdentity(e.target.value)}
              className="w-full bg-[#F9F8FF] border border-[#F1F0FF] rounded-2xl py-4 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#6D31ED]/20 text-[#2D2159] placeholder-[#C4B5FD] transition-all"
              required
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="space-y-2">
          <div className="flex justify-between items-center px-1">
            <label className="text-[10px] font-bold text-[#A78BFA] tracking-[0.2em] uppercase block">
              Secret Phrase
            </label>
            <button type="button" className="text-[10px] font-bold text-[#A78BFA] tracking-[0.1em] uppercase hover:text-[#6D31ED] transition-colors">
              Security Inquiry?
            </button>
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C4B5FD]" />
            <input
              type="password"
              placeholder="••••••••"
              value={phrase}
              onChange={(e) => setPhrase(e.target.value)}
              className="w-full bg-[#F9F8FF] border border-[#F1F0FF] rounded-2xl py-4 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#6D31ED]/20 text-[#2D2159] placeholder-[#C4B5FD] transition-all"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-[11px] tracking-[0.2em] uppercase py-5 rounded-2xl transition-all active:scale-[0.98] shadow-lg shadow-purple-200 disabled:opacity-70 flex items-center justify-center"
        >
          {loading ? 'Processing...' : 'Authenticate'}
        </button>
      </form>

      {/* SSO Section */}
      <div className="mt-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] bg-[#E9E4FF] flex-1"></div>
          <span className="text-[9px] font-bold text-[#A78BFA] tracking-[0.2em] uppercase whitespace-nowrap">Single Sign-On</span>
          <div className="h-[1px] bg-[#E9E4FF] flex-1"></div>
        </div>

        <button
          type="button"
          className="w-full border-2 border-[#E9E4FF] hover:border-[#6D31ED]/30 bg-white text-[#4B5563] font-bold text-[11px] tracking-[0.1em] uppercase py-4 rounded-2xl transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
        >
          <Chrome className="w-4 h-4 text-red-500" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};
