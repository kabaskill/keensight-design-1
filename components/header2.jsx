"use client";
import { motion } from "framer-motion";
import { header2 } from "@/utils/siteData";

export default function Header2() {
  return (
    <section className="max-w-screen-lg mx-auto px-4 py-12 my-12 gap-4 md:px-8 flex flex-col justify-center items-center text-center">
      <motion.h2
        initial={{ y: 5, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text"
      >
        {header2.title}
      </motion.h2>
      <span className=" mx-auto text-foreground/80">{header2.content}</span>
    </section>
  );
}
