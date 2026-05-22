import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Technology } from "@/components/Technology";
import { Stats } from "@/components/Stats";
import { Work } from "@/components/Work";
import { Recognition } from "@/components/Recognition";
import { Status } from "@/components/Status";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Technology />
        <Stats />
        <Work />
        <Recognition />
        <Status />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
