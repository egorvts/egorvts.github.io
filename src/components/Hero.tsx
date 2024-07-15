"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0", "1 0"],
  });

  const widthProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["100vw", "calc(100vw - 32px)"]
  );

  const cornerRadiusProgress = useTransform(
    scrollYProgress,
    [0, 0.01],
    [0, 40]
  );

  const heightProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["100dvh", "calc(100dvh - 32px)"]
  );

  return (
    <motion.div
      style={{
        width: widthProgress,
        height: heightProgress,
        borderRadius: cornerRadiusProgress,
      }}
      ref={ref}
      className="relative w-screen h-[100dvh] p-4 m-auto text-center flex flex-col justify-between md:justify-center gap-12 bg-gradient-to-b from-[#8A38DB] to-[#D9BDF4] text-white/80 transition-all"
    >
      <div className="flex flex-col md:gap-2 my-auto">
        <h2 className="text-[24px] md:text-[48px] md:leading-[52px] font-medium">
          Hi, I'm Egor
        </h2>
        <h1 className="text-[44px] leading-[44px] md:text-[96px] md:leading-[96px] font-medium">
          UI/UX Designer <br /> and Developer
        </h1>
      </div>
      <div className="mb-2">
        <Button
          asChild
          tabIndex={0}
          className="tab w-[calc(100%-16px)] md:w-[320px] h-[48px] rounded-[16px] bg-white/10 border-[1px] border-white/20 hover:bg-white/20 mb-2 text-[16px] focus-within:bg-white/25
        "
        >
          <a href="mailto:egor.vetosh2310@gmail.com">Email me</a>
        </Button>
        <p className="text-sm">Let's get in touch!</p>
      </div>
    </motion.div>
  );
};
export default Hero;
