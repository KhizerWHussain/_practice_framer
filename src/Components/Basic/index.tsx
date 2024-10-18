"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BasicFramer = () => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <div className="w-full h-screen place-content-center flex items-center flex-col gap-6">
      <motion.button
        className="p-2 rounded-full bg-slate-400 w-32"
        onClick={() => setShow((prev) => !prev)}
        layout={true}
      >
        {show ? "Hide" : "Show"}
      </motion.button>
      <AnimatePresence mode="popLayout">
        {show ? (
          <motion.div
            className="h-32 w-32 bg-slate-200"
            initial={{
              rotate: "0deg",
              scale: 1,
              y: 0,
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 150, -150, -150, 0],
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default BasicFramer;
