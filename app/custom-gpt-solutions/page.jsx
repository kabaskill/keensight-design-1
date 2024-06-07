"use client";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import { motion } from "framer-motion";
import { details } from "@/utils/siteData";
import { Button } from "@nextui-org/react";
import Link from "next/link"

export default function Details() {
  const product = details.gptStore;

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        <section className="relative justify-center items-center bg-[url('/logo-circles.png')] bg-no-repeat bg-center bg-[length:75%]">
          <div className="max-w-screen-xl mx-auto  px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center ">
            <motion.div
              initial={{ y: 5, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col gap-12 justify-start items-start w-full text-center  md:gap-24 md:items-center md:text-left"
            >
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-extrabold  md:text-6xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text">
                  {product.title}
                </h1>

                <p className="max-w-2xl  text-xl md:text-4xl text-foreground/60">
                  {product.content}
                </p>
              </div>

              <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button as={Link} color="primary" href="" variant="solid">
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <Faq />
      </main>
      <Footer />
    </div>
  );
}
