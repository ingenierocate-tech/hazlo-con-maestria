// app/page.tsx
import IntroSection from "./components/IntroSection";
import PainPoints from "./components/PainPoints";
import Services from "./components/Services";
import Process from "./components/Process";           // 👈 se asegura la sección
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";
import QuickWin from "./components/QuickWin";
import Banner from "./components/Banner";

export default function Page() {
  return (
    <main>
      
      <Banner />
      <PainPoints />
      <Services />
      <Process />
      <Results />            {/* ✅ Reemplaza FeaturedCases por Results */}
      <Testimonials />
      <QuickWin />
    </main>
  );
}