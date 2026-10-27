import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/chatbot.png";
import { X, Mail, LockKeyhole, Eye, EyeOff } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  function closeLogin() {
    navigate("/");
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Login UI is working!");
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
      bg-black/70 backdrop-blur-md p-4"
      onClick={closeLogin}
    >
      {/* Login Box */}
      <div
        className="relative w-full max-w-md rounded-2xl
        border border-white/15 bg-[#111111] p-8 shadow-2xl
        shadow-black/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeLogin}
          className="absolute right-5 top-5 rounded-lg p-2
          text-gray-400 transition hover:bg-white/10 hover:text-white"
          aria-label="Close login"
        >
          <X size={20} />
        </button>

        {/* Logo / Heading */}
        <div className="mx-auto h-19.5 w-50">

         <img src={logo} alt="Nova-AI" className="h-18 w-80 rounded-2xl object-cover" />
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5 mt-5">

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-[#E3E3E3]"
            >
              Email :
            </label>

            <div className="flex items-center gap-3 rounded-xl
            border border-white/15 px-4">

              <Mail size={18} className="shrink-0 text-[#E3E3E3]" />

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="w-full bg-transparent py-3 text-sm
                text-[#E3E3E3] outline-none placeholder:text-gray-600"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Password :
            </label>

            <div className="flex items-center gap-3 rounded-xl
            border border-white/15 bg-white/[0.03] px-4
            transition focus-within:border-white/50">

              <LockKeyhole
                size={18}
                className="shrink-0 text-[#E3E3E3]"
              />

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                className="w-full bg-transparent py-3 text-sm
                text-white outline-none placeholder:text-gray-600"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500 transition hover:text-white"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember / Forgot */}
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 text-gray-400">
              <input
                type="checkbox"
                className="accent-white"
              />
              Remember me
            </label>

            <button
              type="button"
              className="text-gray-300 transition hover:text-white"
            >
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-white py-3
            text-sm font-bold text-black transition
            hover:bg-gray-200 active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up */}
        <p className="mt-7 text-center text-sm text-gray-500">
          Don't have an account?
          <button
            type="button"
            className="ml-1 font-semibold text-white
            transition hover:text-gray-300"
          >
            Create account
          </button>
        </p>

        {/* Footer */}
        <p className="mt-6 text-center text-[10px]
        tracking-[0.2em] text-gray-600">
          POWERED BY NOVA AI
        </p>
      </div>
    </div>
  );
}

export default Login;
