import Hero from "@/components/home/Hero";
import Partners from "@/components/home/Partners";
import AboutMCP from "@/components/home/AboutMCP";
import Architecture from "@/components/home/Architecture";
import Services from "@/components/home/Services";
import HowItWorks from "@/components/home/HowItWorks";
import LatestPosts from "@/components/home/LatestPosts";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <AboutMCP />
      <Architecture />
      <Services />
      <HowItWorks />
      <LatestPosts />
      <FAQ />
      <CTA />
    </main>
  );
}
