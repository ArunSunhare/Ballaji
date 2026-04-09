import { Footer } from "../componets/footer";
import GetFeedback from "../componets/getFeedback";
import { MainNavbar } from "../componets/MainNavbar";
import { TopHeader } from "../componets/top_header";
import { TopNavbar } from "../componets/TopNavbar";

export default function GetFeedbackPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopHeader />
      <TopNavbar />
      <MainNavbar />
      <GetFeedback />
      <Footer />
    </div>
  );
}
