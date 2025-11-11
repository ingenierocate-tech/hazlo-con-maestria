// Copia de respaldo de app/page.tsx
import Banner from "../app/components/Banner";
import PainPoints from "../app/components/PainPoints";
import Services from "../app/components/Services";
import Testimonials from "../app/components/Testimonials";
import QuickWin from "../app/components/QuickWin";

export default function Page() {
  return (
    <main>
      <Banner />
      <PainPoints />
      <Services />
      <Testimonials />
      <QuickWin />
      {/* Footer no va aquí; se renderiza desde app/layout.tsx */}
    </main>
  );
}