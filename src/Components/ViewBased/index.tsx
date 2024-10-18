"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ViewBase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "all" });

  useEffect(() => {}, [isInView]);

  return (
    <>
      <div className="w-full h-[150vh] place-content-center flex items-center flex-col" />
      <motion.div
        className="h-screen bg-cyan-800"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
      />
      <div
        ref={ref}
        className={`h-screen ${
          isInView ? "bg-emerald-800" : "bg-pink-800"
        }  duration-1000 transition-all`}
      />
    </>
  );
};

export default ViewBase;
