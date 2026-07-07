import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Stats } from "@/components/site/stats";
import { Services } from "@/components/site/services";
import { About } from "@/components/site/about";
import { Capabilities } from "@/components/site/capabilities";
import { Process } from "@/components/site/process";
import { CtaBand } from "@/components/site/cta-band";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <About />
        <Capabilities />
        <Process />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
