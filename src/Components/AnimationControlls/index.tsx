"use client";
import React from "react";
import { motion, useAnimationControls } from "framer-motion";

const AnimationControlls = () => {
  const controls = useAnimationControls();

  const handleFlip = async () => {
    // await controls.start("initial");
    controls.start("flip");
  };

  return (
    <div className="w-full h-screen place-content-center flex items-center flex-col gap-6">
      <button
        className="p-4 rounded-full bg-amber-800 w-40 text-white font-bold"
        onClick={handleFlip}
      >
        Flip it!
      </button>

      <motion.div
        className="w-40 h-40 bg-slate-900"
        variants={{
          initial: {
            rotate: 0,
          },
          flip: {
            rotate: "360deg",
          },
        }}
        // whileHover="flip"
        initial="initial"
        animate={controls}
      />
    </div>
  );
};

export default AnimationControlls;
