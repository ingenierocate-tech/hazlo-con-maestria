// app/page.tsx
import Banner from "./components/Banner";
import PainPoints from "./components/PainPoints";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import QuickWin from "./components/QuickWin";
import HowWeDo from "./components/HowWeDo";
import Results from "./components/Results";

export default function Page() {
  return (
    <main>
      <Banner />
      <PainPoints />
      <Services />
      <HowWeDo />
      <Results />
      <Testimonials />
      <QuickWin />
      {/* Footer no va aquí; se renderiza desde app/layout.tsx */}
    </main>
  );
}