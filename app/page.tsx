/* eslint-disable react/no-unescaped-entities */
import HomeBanner from "@/components/Homebanner/HomeBanner";
import MagazineAd from "@/components/MagazineAd/MagazineAd";
import MainComponent from "@/components/HomeCategories/MainComponent";
import Sidebar from "@/components/Sidebar/Sidebar";
import BreakingNews from "@/components/BreakingNews/BreakingNews";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="">
      <BreakingNews />
      <Navbar />
      <div className="main_content__position">
        <div className="container">
          <HomeBanner />
          <MagazineAd />
          <div className="row mt-4">
            <div className="col-lg-8">
              <MainComponent />
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
