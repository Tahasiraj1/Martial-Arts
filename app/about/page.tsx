"use client";

import React from "react";
import Image from "next/image";
import Instructors from "@/components/Instructors";
import Parallax from "@/components/Parallax";
import DotPattern from "@/components/ui/DotPattern";
import Testimonials from "@/components/Testimonials";

export default function AboutPage() {
  return (
    <main className="relative">
      <DotPattern className="absolute inset-0 -z-10" />
      <Parallax
        text="About Our Martial Arts Academy"
        className="text-6xl"
        minusTranslateY="-translate-y-44"
      />
      <div className="relative flex items-center justify-between gap-8 mt-10">
        <div className="space-y-4 pl-10 max-w-md">
          <h2 className="text-2xl font-semibold">Our Philosophy</h2>
          <p>
            We believe in developing both the mind and body through traditional
            martial arts training. Our academy focuses on discipline, respect,
            and continuous self-improvement.
          </p>

          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p>
            To empower individuals through martial arts training, building
            confidence, strength, and character while maintaining the authentic
            traditions of our disciplines.
          </p>
        </div>

        <div className="relative h-[400px] pr-10">
          <Image
            src="/Images/group-boys-girl-fighting-aikido-training-martial-arts-school-healthy-lifestyle-sports-concept (2).jpg"
            alt="Martial Arts Dojo"
            width={1000}
            height={1000}
            className="w-[700px] h-[400px] rounded-xl object-cover"
          />
        </div>
      </div>
      <Instructors />
      <Testimonials />
    </main>
  );
}
