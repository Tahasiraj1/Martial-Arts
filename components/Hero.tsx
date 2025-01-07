import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Triangle } from "./ui/Triangle";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between w-full md:pl-10 pt-10 lg:pt-0 max-w-[2000px] ">
      <div className="flex flex-col text-start w-full max-w-xl space-y-8 px-2">
        <h1 className="text-2xl">Welcome To The Executor</h1>
        <h2 className="text-6xl font-extrabold">
          MARTIAL ARTS
          <br />
          SCHOOL<span className="text-red-600">.</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          facilis? Modi blanditiis quasi magnam quas corrupti mollitia unde
          excepturi fugit? Doloremque veniam odit ducimus? Reiciendis ducimus
          dolores aspernatur deleniti hic!
        </p>
        <div className="flex items-center gap-4">
          <Link href="/programs">
            <Button className="bg-red-700 text-lg hover:bg-red-600 rounded-none w-[150px] h-[50px] ">
              Register Now
            </Button>
          </Link>
          <p className="flex flex-col">
            <span>
              <strong>Contact Us:</strong>
            </span>
            <span>(+92)12345678</span>
          </p>
        </div>
      </div>
      <Image
        src="/Images/martial-art-school-hero-img.png"
        alt="/martial-art-school"
        width={1000}
        height={1000}
        className="w-full h-[600px] overflow-hidden"
      />
      <Triangle
        height="h-[680px]"
        width="w-full"
        backgroundColor="bg-red-700"
      />
    </div>
  );
};

export default Hero;
