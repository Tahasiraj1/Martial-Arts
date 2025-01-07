import Contact from "@/components/Contact";
import DotPattern from "@/components/ui/DotPattern";
import React from "react";
import { GradientBlob } from "@/components/ui/GradientBlob";

const page = () => {
  return (
    <div className="relative overflow-x-clip">
      <DotPattern className="absolute inset-0 -z-10" />
      <div className="absolute right-72 -top-0 opacity-50 -z-10">
        <GradientBlob
          colors={["#f92a2a", "#7a0909", "#0e0f0f"]}
          size={400}
          blur={60}
          duration={15}
        />
      </div>
      <Contact />
      <div className="absolute left-[450px] bottom-32 opacity-50 -z-10">
        <GradientBlob
          colors={["#f92a2a", "#7a0909", "#0e0f0f"]}
          size={400}
          blur={60}
          duration={15}
        />
      </div>
    </div>
  );
};

export default page;
