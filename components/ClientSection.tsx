"use client";
import React from "react";
import { MotionValue } from "framer-motion";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo1 from "@/public/logos/logo1.svg";
import logo2 from "@/public/logos/logo2.svg";
import logo3 from "@/public/logos/logo3.svg";
import logo4 from "@/public/logos/logo4.svg";
import logo5 from "@/public/logos/logo5.svg";
import logo6 from "@/public/logos/logo6.svg";
import logo7 from "@/public/logos/logo7.svg";
import logo8 from "@/public/logos/logo8.svg";
import logo9 from "@/public/logos/logo9.svg";
import logo10 from "@/public/logos/logo10.svg";
import logo11 from "@/public/logos/logo11.svg";
import logo12 from "@/public/logos/logo12.svg";
import logo13 from "@/public/logos/logo13.svg";
import logo14 from "@/public/logos/logo14.svg";
import logo15 from "@/public/logos/logo15.svg";
import logo16 from "@/public/logos/logo16.svg";
import logo17 from "@/public/logos/logo17.svg";
import logo18 from "@/public/logos/logo18.svg";
import logo19 from "@/public/logos/logo19.svg";

interface TextStylesType {
  fontFamily: string;
  fontWeight: number;
  fontSize: string;
  lineHeight: string;
  textTransform: string;
  width: string;
  textAlign: string;
}

export default function ClientSection() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [isSplit, setIsSplit] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const smoothProgress: MotionValue = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (v) => {
      setIsSplit(v > 0.5);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    // Update window width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // font size based on window width
  const calculateFontSize = (): string => {
    if (windowWidth <= 385) {
      return "70px";
    } else if (windowWidth < 768) {
      return "90px";
    } else if (windowWidth < 1024) {
      return "188px";
    } else if (windowWidth < 1440) {
      return "240px";
    } else if (windowWidth < 1920) {
      return "340px";
    } else {
      return "460px";
    }
  };

  // responsive offset for text split
  const calculateSplitOffset = (): number => {
    if (windowWidth < 768) {
      return 236;
    } else if (windowWidth < 1024) {
      return 75;
    } else if (windowWidth < 1440) {
      return 100;
    } else if (windowWidth < 1920) {
      return 140;
    } else {
      return 188;
    }
  };

  const textStyles: TextStylesType = {
    fontFamily: "Justice",
    fontWeight: 400,
    fontSize: calculateFontSize(),
    lineHeight: "100%",
    textTransform: "uppercase",
    width: "100%",
    textAlign: "center",
  };

  const logoBox =
    "bg-[#0D0D0D] rounded-[10px] flex items-center justify-center text-white font-bold";

  return (
    <section
      ref={ref}
      className="w-full relative min-h-screen text-white flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative w-full h-screen flex items-center justify-center">
        <motion.div
          animate={{
            y: isSplit ? -calculateSplitOffset() : 0,
            opacity: isSplit ? (windowWidth <= 640 ? 1 : 0.2) : 1,
          }}
          transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[50%] overflow-hidden z-10 w-full"
        >
          <span
            className="block text-center"
            style={{ ...textStyles, clipPath: "inset(0 0 50% 0)" } as React.CSSProperties}
            >
            CLIENTS
          </span>
        </motion.div>

        <motion.div
          animate={{
            y: isSplit ? calculateSplitOffset() : 0,
            opacity: isSplit ? (windowWidth <= 640 ? 1 : 0.2) : 1,
          }}
          transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[50%] overflow-hidden z-10 w-full"
        >
          <span
            className="block text-center"
            style={{ ...textStyles, clipPath: "inset(50% 0 0 0)" } as React.CSSProperties }
          >
            CLIENTS
          </span>
        </motion.div>
      </div>

      <div
        className={`hidden md:block absolute left-0 right-0 mx-auto px-4 w-full max-w-[1920px] text-white z-0 h-auto py-6 transition-opacity duration-300 ${
          isSplit ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="flex justify-center gap-[9px] scale-[var(--logo-scale)]"
          style={{
            "--logo-scale":
              windowWidth >= 1920
                ? "1"
                : windowWidth >= 1440
                ? "0.75"
                : windowWidth >= 1024
                ? "0.52"
                : windowWidth >= 768
                ? "0.42"
                : "0.6",
          } as React.CSSProperties }
        >
          <div className="flex flex-col gap-[9px]">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isSplit ? 1 : 0 }}
              transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
              className={`${logoBox} w-[170px] h-[170px]`}
            >
              <Image src={logo1} width={120} height={14} alt="Logo" />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isSplit ? 1 : 0 }}
              transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
              className={`${logoBox} w-[170px] h-[170px]`}
            >
              <Image src={logo2} width={120} height={70} alt="Logo" />
            </motion.div>
          </div>

          <div className="flex-none">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isSplit ? 1 : 0 }}
              transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
              className={`${logoBox} w-[350px] h-[350px]`}
            >
              <Image src={logo3} width={225} height={147} alt="Logo" />
            </motion.div>
          </div>

          <div className="flex flex-col gap-[9px]">
            <div className="flex gap-[9px]">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isSplit ? 1 : 0 }}
                transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
                className={`${logoBox} w-[170px] h-[170px]`}
              >
                <Image src={logo4} width={120} height={60} alt="Logo" />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isSplit ? 1 : 0 }}
                transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
                className={`${logoBox} w-[170px] h-[170px]`}
              >
                <Image src={logo6} width={130} height={34} alt="Logo" />
              </motion.div>
            </div>
            <div className="flex gap-[9px] justify-between">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isSplit ? 1 : 0 }}
                transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
                className={`${logoBox} w-[170px] h-[170px]`}
              >
                <Image src={logo5} width={54} height={71} alt="Logo" />
              </motion.div>
              <div className="grid grid-cols-2 gap-[9px]">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: isSplit ? 1 : 0 }}
                  transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
                  className={`${logoBox} w-[80px] h-[80px]`}
                >
                  <Image src={logo7} width={65} height={43} alt="Logo" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: isSplit ? 1 : 0 }}
                  transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
                  className={`${logoBox} w-[80px] h-[80px]`}
                >
                  <Image src={logo8} width={57} height={7} alt="Logo" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: isSplit ? 1 : 0 }}
                  transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
                  className={`${logoBox} w-[80px] h-[80px]`}
                >
                  <Image src={logo9} width={57} height={9} alt="Logo" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: isSplit ? 1 : 0 }}
                  transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
                  className={`${logoBox} w-[80px] h-[80px]`}
                >
                  <Image src={logo10} width={57} height={14} alt="Logo" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-[9px]">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isSplit ? 1 : 0 }}
              transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
              className={`${logoBox} w-[260px] h-[260px]`}
            >
              <Image src={logo11} width={185} height={32} alt="Logo" />
            </motion.div>
            <div className="flex gap-[9px]">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isSplit ? 1 : 0 }}
                transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
                className={`${logoBox} w-[80px] h-[80px]`}
              >
                <Image src={logo12} width={33} height={33} alt="Logo" />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isSplit ? 1 : 0 }}
                transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
                className={`${logoBox} w-[80px] h-[80px]`}
              >
                <Image src={logo13} width={57} height={9} alt="Logo" />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isSplit ? 1 : 0 }}
                transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
                className={`${logoBox} w-[80px] h-[80px]`}
              >
                <Image src={logo14} width={57} height={14} alt="Logo" />
              </motion.div>
            </div>
          </div>

          <div className="flex-none">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isSplit ? 1 : 0 }}
              transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
              className={`${logoBox} w-[350px] h-[350px]`}
            >
              <Image src={logo15} width={248} height={38} alt="Logo" />
            </motion.div>
          </div>

          {/* Column 6 */}
          <div className="flex flex-col gap-[9px]">
            <div className="flex gap-[9px]">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isSplit ? 1 : 0 }}
                transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
                className={`${logoBox} w-[170px] h-[170px]`}
              >
                <Image src={logo16} width={59} height={71} alt="Logo" />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isSplit ? 1 : 0 }}
                transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
                className={`${logoBox} w-[170px] h-[170px]`}
              >
                <Image src={logo18} width={120} height={62} alt="Logo" />
              </motion.div>
            </div>
            <div className="flex gap-[9px]">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isSplit ? 1 : 0 }}
                transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
                className={`${logoBox} w-[170px] h-[170px]`}
              >
                <Image src={logo17} width={64} height={71} alt="Logo" />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isSplit ? 1 : 0 }}
                transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
                className={`${logoBox} w-[170px] h-[170px]`}
              >
                <Image src={logo19} width={54} height={71} alt="Logo" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE Layout */}
      <div
        className={`block md:hidden absolute left-0 right-0 w-full px-4 py-10 z-0 transition-opacity duration-300 ${
          isSplit ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col gap-[4px] items-center justify-center">
          <div className="flex gap-[4px]">
            <div className="flex flex-col gap-[4px]">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isSplit ? 1 : 0 }}
                transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
                className={`${logoBox} w-[88px] h-[88px] rounded-[2px]`}
              >
                <Image src={logo1} width={60} height={7} alt="Logo" />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isSplit ? 1 : 0 }}
                transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
                className={`${logoBox} w-[88px] h-[88px] rounded-[2px]`}
              >
                <Image src={logo2} width={60} height={35} alt="Logo" />
              </motion.div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isSplit ? 1 : 0 }}
              transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
              className={`${logoBox} w-[180px] h-[180px] rounded-[2px]`}
            >
              <Image src={logo3} width={120} height={78} alt="Logo" />
            </motion.div>
            <div className="flex flex-col gap-[4px]">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isSplit ? 1 : 0 }}
                transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
                className={`${logoBox} w-[88px] h-[88px] rounded-[2px]`}
              >
                <Image src={logo4} width={60} height={30} alt="Logo" />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isSplit ? 1 : 0 }}
                transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
                className={`${logoBox} w-[88px] h-[88px] rounded-[2px]`}
              >
                <Image src={logo6} width={67} height={18} alt="Logo" />
              </motion.div>
            </div>
          </div>

          <div className="flex gap-[4px] mt-[4px]">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isSplit ? 1 : 0 }}
              transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
              className={`${logoBox} w-[88px] h-[88px] rounded-[2px]`}
            >
              <Image src={logo17} width={33} height={36} alt="Logo" />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isSplit ? 1 : 0 }}
              transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
              className={`${logoBox} w-[88px] h-[88px] rounded-[2px]`}
            >
              <Image src={logo18} width={62} height={32} alt="Logo" />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isSplit ? 1 : 0 }}
              transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
              className={`${logoBox} w-[88px] h-[88px] rounded-[2px]`}
            >
              <Image src={logo16} width={30} height={36} alt="Logo" />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isSplit ? 1 : 0 }}
              transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
              className={`${logoBox} w-[88px] h-[88px] rounded-[2px]`}
            >
              <Image src={logo19} width={28} height={36} alt="Logo" />
            </motion.div>
          </div>

          <div className="flex gap-[4px] mt-[4px]">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isSplit ? 1 : 0 }}
              transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
              className={`${logoBox} w-[180px] h-[180px] rounded-[2px]`}
            >
              <Image src={logo3} width={117} height={76} alt="Logo" />
            </motion.div>
            <div className="flex flex-col gap-[4px]">
              <div className="flex gap-[4px]">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: isSplit ? 1 : 0 }}
                  transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
                  className={`${logoBox} w-[88px] h-[88px] rounded-[2px]`}
                >
                  <Image src={logo19} width={28} height={36} alt="Logo" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: isSplit ? 1 : 0 }}
                  transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
                  className={`${logoBox} w-[88px] h-[88px] rounded-[2px]`}
                >
                  <Image src={logo19} width={28} height={36} alt="Logo" />
                </motion.div>
              </div>
              <div className="flex gap-[4px]">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: isSplit ? 1 : 0 }}
                  transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
                  className={`${logoBox} w-[88px] h-[88px] rounded-[2px]`}
                >
                  <Image src={logo19} width={28} height={36} alt="Logo" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: isSplit ? 1 : 0 }}
                  transition={{ duration: 1, ease: [0.82, 0, 0.21, 1] }}
                  className={`${logoBox} w-[88px] h-[88px] rounded-[2px]`}
                >
                  <Image src={logo19} width={28} height={36} alt="Logo" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
