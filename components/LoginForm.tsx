
import React, { useState } from 'react';
import { User, Lock, Zap } from 'lucide-react';

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
          < Zap className="text-white w-8 h-8 fill-white" />
        </div>
        <h2 className="text-2xl font-bold text-[#2D2159] tracking-tight mb-6">A.R.C.</h2>
        
        {/* Login Badge */}
        <div className="bg-[#F8F7FF] border border-[#E9E4FF] px-6 py-2 rounded-full flex items-center gap-2">
          <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
          <span className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase">Login</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Mail Input */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-[#A78BFA] tracking-[0.2em] uppercase block ml-1">
            Mail
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C4B5FD]" />
            <input
              type="text"
              value={identity}
              onChange={(e) => setIdentity(e.target.value)}
              className="w-full bg-[#F9F8FF] border border-[#F1F0FF] rounded-2xl py-4 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#6D31ED]/20 text-[#2D2159] transition-all"
              required
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="space-y-2">
          <div className="flex justify-between items-center px-1">
            <label className="text-[10px] font-bold text-[#A78BFA] tracking-[0.2em] uppercase block">
              Password
            </label>
            <button type="button" className="text-[10px] font-bold text-[#A78BFA] tracking-[0.1em] uppercase hover:text-[#6D31ED] transition-colors">
              forgot password?
            </button>
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C4B5FD]" />
            <input
              type="password"
              value={phrase}
              onChange={(e) => setPhrase(e.target.value)}
              className="w-full bg-[#F9F8FF] border border-[#F1F0FF] rounded-2xl py-4 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#6D31ED]/20 text-[#2D2159] transition-all"
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
          {loading ? 'Logging in...' : 'Login'}
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
          className="w-full border-2 border-[#6D31ED] hover:bg-[#F9F8FF] bg-white text-[#6D31ED] font-bold text-[11px] tracking-[0.15em] uppercase py-3.5 rounded-full transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" className="mr-1">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
            />
          </svg>
          Continue with Google
        </button>
      </div>
    </div>
  );
};
