// Hero.js
"use client";

import Link from "next/link";
import Image from "next/image";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#FF3385", "#00FFCC"];

export default function Hero() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
 
      style={{
        backgroundImage,
        transition: "background-image 10s ease-in-out infinite",
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center max-w-3xl text-center px-4">
        <Image
          src="/logo.png"
          alt="Code & Play Logo"
          width={200}
          height={200}
          className="mb-4 rounded-full"
        />
        <h1 id="hero" className="bg-gradient-to-br from-[#FF3385] to-[#00FFCC] bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Vista o poder do código e da cultura gamer
        </h1>
        <p className="my-6 text-base leading-relaxed text-gray-300 md:text-lg">
          Roupas estilosas para programadores, gamers e fãs de anime. Seu estilo, seu universo.
        </p>
        <Link href="#categorias" passHref>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit cursor-pointer items-center gap-2 rounded-full bg-gray-950/10 px-6 py-3 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Nossa Categoria
          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
        </motion.button>
        </Link>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section >
  );
}

