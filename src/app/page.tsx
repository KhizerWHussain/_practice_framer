"use client";
import dynamic from "next/dynamic";
import { useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

// const BasicFramer = dynamic(() => import("@/Components/Basic"), { ssr: false });
// const Gestures = dynamic(() => import("@/Components/Gestures"), { ssr: false });
// const AnimationControlls = dynamic(
//   () => import("@/Components/AnimationControlls"),
//   { ssr: false }
// );
// const ViewBased = dynamic(() => import("@/Components/ViewBased"), {
//   ssr: false,
// });
const ScrollBased = dynamic(() => import("@/Components/ScrollBased"), {
  ssr: false,
});

function Home() {
  const lenisRef = useRef<Lenis | undefined>(undefined);
  const rafHandleRef = useRef<number | null>(null);

  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        smoothWheel: true,
        duration: 1.5,
        infinite: false,
        autoResize: true,
        lerp: 0.05,
        easing: (t) => t * (2 - t),
      });
      const raf = (time: number) => {
        lenisRef.current?.raf(time);
        rafHandleRef.current = requestAnimationFrame(raf);
      };
      rafHandleRef.current = requestAnimationFrame(raf);
    }

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = undefined;
      }
      if (rafHandleRef.current) {
        cancelAnimationFrame(rafHandleRef.current);
        rafHandleRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-full">
      {/* <BasicFramer /> */}
      {/* <Gestures /> */}
      {/* <AnimationControlls /> */}
      {/* <ViewBased /> */}
      <ScrollBased />
    </div>
  );
}

export default Home;
