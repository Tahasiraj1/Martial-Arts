import Founder from "@/components/Founder";
import Hero from "@/components/Hero";
import Instructors from "@/components/Instructors";
import Programs from '@/components/Programs'
import ProgramsSection from '@/components/ProgramsSection'
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import DotPattern from "@/components/ui/DotPattern";

export default function Home() {
  return (
    <div className="relative">
      <DotPattern className="absolute inset-0 -z-10" />
      <Hero />
      <Programs />
      <WhyUs />
      <ProgramsSection />
      <Founder />
      <Instructors />
      <Testimonials />
    </div>
  );
}
