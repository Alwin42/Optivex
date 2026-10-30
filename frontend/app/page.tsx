import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1A1A1A] font-sans">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-[#FFFFFF] min-h-[calc(100vh-64px)] flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] tracking-tight">
            RETINA
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-[#666666]">
            Vision-based defect detection system and control dashboard
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/login"
              className="px-8 py-3 rounded-lg bg-[#FF6B00] text-white font-semibold hover:bg-orange-700 transition-colors"
            >
              Login
            </a>
            <a
              href="#about"
              className="px-8 py-3 rounded-lg bg-[#FFF0E6] text-[#FF6B00] font-semibold border border-[#FF6B00] hover:bg-[#ffe6cc] transition-colors"
            >
              About
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#F8F8F8] py-16 px-6">
        <div className="max-w-3xl mx-auto bg-[#F8F8F8] rounded-xl p-8">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">About RETINA</h2>
          <p className="text-[#666666] leading-relaxed">
            RETINA is a vision-based defect detection system built for quality
            inspection on bottling production lines. It provides real-time
            scanning stats, defect breakdown, and shift reports to help maintain
            high efficiency and product quality.
          </p>
        </div>
      </section>
    </div>
  );
}
