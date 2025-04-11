"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import backgroundImage from "../public/background_icon.svg";
import circle from "../public/circle.svg";
import arrow from "../public/arrow.svg";
import Image from "next/image";
import ClientSection from "@/components/ClientSection";

export default function Home() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const ySubText = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const yArrow = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <main ref={ref} className="bg-black text-white  relative overflow-hidden">
      <Image
        className="absolute right-[-350px] top-[350px] min-w-[762px] md:w-[70%] z-0 md:top-[150px] md:right-[-50px]"
        width={1400}
        height={850}
        src={backgroundImage}
        alt="Background Icon"
      />

      <div className="max-w-[1920px] h-[844px] md:h-[1080px] mx-auto px-3 md:px-6 flex flex-col items-start justify-center text-left relative">
        <motion.div style={{ y: ySubText }} className="relative z-10">
          <div className="flex justify-center items-center gap-[10px]">
            <Image src={circle} width={6} height={6} alt="Circle Icon" />
            <span className="font-helvetica text-[16px] font-light uppercase tracking-normal">
              Clients
            </span>
          </div>
        </motion.div>

        <motion.div
          style={{ y: yText }}
          className="relative z-10 mt-[8px] mb-[100px] md:mb-[0]"
        >
          <h1 className="font-justice text-[48px] md:text-6xl lg:text-8xl xl:text-[120px] uppercase leading-[100%] tracking-normal w-[90%] bg-[#3D3801] text-white inline">
            Dedicated to protecting your rights and achieving your legal goals
          </h1>
        </motion.div>

        <motion.div
          style={{ y: yArrow }}
          className="absolute bottom-[82px] left-[-10px] flex justify-center items-center z-10 transform rotate-90 gap-[10px]"
        >
          <span className="font-helvetica text-[16px] font-light">
            Scroll Down
          </span>
          <Image src={arrow} width={19} height={13} alt="Arrow Icon" />
        </motion.div>
      </div>

      <div className="max-w-[1920px] h-[844px] md:h-[1080px] mx-auto px-3 md:px-0 flex flex-col items-center justify-center text-center">
        <ClientSection />
      </div>
      <div className="max-w-[1920px] h-[200px] md:h-[200px] mx-auto px-3 md:px-6"></div>
    </main>
  );
}
