"use client";
import React from "react";
import { motion, MotionConfig } from "framer-motion";

const Gestures = () => {
  return (
    <div className="w-full h-screen place-content-center flex items-center flex-col gap-6">
      <MotionConfig
        transition={{
          duration: 0.125,
          ease: "easeInOut",
        }}
      >
        <motion.button
          className="bg-purple-900 text-white w-36 p-2 rounded-3xl"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
            rotate: "2.5deg",
          }}
        >
          Click
        </motion.button>

        <motion.button
          className="bg-pink-800 text-slate-200 w-36 p-2 rounded-3xl"
          whileHover={{
            scale: 1.15,
          }}
          whileTap={{
            scale: 0.95,
            rotate: "2.5deg",
          }}
        >
          Click
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
