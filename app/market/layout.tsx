import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import BreakingNews from "@/components/BreakingNews/BreakingNews";

export default function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BreakingNews />
      <Navbar />
      <div className="main_content__position">{children}</div>
      <Footer />
    </>
  );
}