import Footer from "@components/commons/Footer";
import HomePart0 from "./HomePart0";
import HomePart1 from "./HomePart1";

export default function HomePage() {
  return (
    <div className="home-page">
      <HomePart0 />
      <HomePart1 />
      <Footer />
    </div>
  )
}