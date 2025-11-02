// src/pages/Home.jsx
import SEO from "../components/SEO.jsx";
import Hero from "../components/Hero.jsx";
import ServicesPreview from "../components/ServicesPreview.jsx";

export default function Home() {
  return (
    <>
      <SEO
        title="VisionClick Midea | Home"
        description="Empowering businesses through code & creativity — modern web, app, and marketing solutions."
        url="https://visionclickmidea.com/"
      />
      <div className="page-content">
        <Hero />
        <ServicesPreview />
      </div>
    </>
  );
}
