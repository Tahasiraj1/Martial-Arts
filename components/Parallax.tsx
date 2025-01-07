import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import DotPattern from "./ui/DotPattern";

const Parallax = ({
  text,
  minusTranslateY,
  className,
}: {
  text: string;
  minusTranslateY?: string;
  className?: string
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="h-screen relative overflow-y-hidden overflow-x-clip"
    >
      <DotPattern className="absolute inset-0 z-10" />
      <motion.div className="absolute inset-0 z-0">
        <Image
          src="/Images/343b095f-136a-49b2-84ee-9665d9d0af24.png"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <motion.div className="absolute inset-0 z-20">
        <Image
          src="/Images/Subtract.png"
          alt="middle layer"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <motion.h2
        className={`relative z-10 font-extrabold text-red-600 uppercase flex items-center justify-center h-full ${className} `}
        style={{ y: textY }}
      >
        <span className={`${minusTranslateY} ml-2`}>{text}</span>
      </motion.h2>
    </div>
  );
};

export default Parallax;
