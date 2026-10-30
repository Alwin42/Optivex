import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8F8F8] pt-28 pb-10 px-4 md:px-8">
      <Navbar />
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
}
