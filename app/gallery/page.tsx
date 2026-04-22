import { TopHeader } from "../componets/top_header";
import { TopNavbar } from "../componets/TopNavbar";
import { MainNavbar } from "../componets/MainNavbar";
import { GallerySection } from "../componets/gallery";
import { Footer } from "../componets/footer";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopHeader />
      <TopNavbar />
      <MainNavbar />
      <GallerySection />
      <Footer />
    </div>
  );
}
