import Founder from "@/components/Founder";
import Hero from "@/components/Hero";
import Instructors from "@/components/Instructors";
import Programs from '@/components/Programs'
import ProgramsSection from '@/components/ProgramsSection'
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Programs />
      <WhyUs />
      <ProgramsSection />
      <Founder />
      <Instructors />
      <Testimonials />
    </>
  );
}
