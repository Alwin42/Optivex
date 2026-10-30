import Navbar from "@/components/Navbar";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] flex items-center justify-center px-4">
      <Navbar />
      <div className="max-w-md w-full">
        <div className="bg-[#FFFFFF] rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-[#1A1A1A] mb-6">
            Employee Login
          </h1>

          <form className="space-y-4">
            <div>
              <label className="block text-sm text-[#666666] mb-1">
                Employee ID
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-lg border border-[#E5E5E5] text-[#1A1A1A] focus:border-[#FF6B00] focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition-colors"
                placeholder="Enter your employee ID"
              />
            </div>

            <div>
              <label className="block text-sm text-[#666666] mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 rounded-lg border border-[#E5E5E5] text-[#1A1A1A] focus:border-[#FF6B00] focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition-colors"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full py-2 rounded-lg bg-[#FF6B00] text-white font-medium hover:bg-orange-700 transition-colors"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[#666666]">
            <a
              href="/"
              className="hover:text-[#FF6B00] transition-colors"
            >
              Back to Home
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
