import Founder from "@/components/Founder";
import Hero from "@/components/Hero";
import Programs from '@/components/Programs'
import ProgramsSection from '@/components/ProgramsSection'
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen">
      <Hero />
      <WhyUs />
      <Programs />
      <ProgramsSection />
      <Founder />
    </div>
  );
}
