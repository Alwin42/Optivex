import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md border border-[#E5E5E5] rounded-full shadow-sm px-6 py-3">
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="text-sm font-medium text-[#666666] hover:text-[#FF6B00] hover:bg-[#FFF0E6] px-4 py-2 rounded-full transition-all duration-200"
        >
          Home
        </Link>
        <Link
          href="/dashboard"
          className="text-sm font-medium text-[#666666] hover:text-[#FF6B00] hover:bg-[#FFF0E6] px-4 py-2 rounded-full transition-all duration-200"
        >
          Dashboard
        </Link>
        <Link
          href="/login"
          className="text-sm font-medium text-[#666666] hover:text-[#FF6B00] hover:bg-[#FFF0E6] px-4 py-2 rounded-full transition-all duration-200"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
