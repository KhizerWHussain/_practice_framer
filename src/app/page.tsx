"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
// import { requestFcm } from "@/utils/firebase";

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

  // const [fcm, setFcm] = useState<any>(null);

  // const getFcm = async () => {
  //   try {
  //     if (typeof window !== "undefined") {
  //       if ("serviceWorker" in navigator) {
  //         const registration = await navigator.serviceWorker.register(
  //           "/firebase-messaging-sw.js"
  //         );
  //         console.log("Service Worker registered successfully:", registration);

  //         const token = await requestFcm();
  //         setFcm(token);
  //         console.log("FCM Token:", token);
  //       } else {
  //         console.error("Service Worker not supported in this browser.");
  //       }
  //     }
  //   } catch (error) {
  //     console.log(
  //       "Error registering service worker or fetching FCM token:",
  //       error
  //     );
  //   }
  // };
  // useEffect(() => {
  //   getFcm();
  // }, []);

  return (
    <div className="w-full h-full">
      {/* <BasicFramer /> */}
      {/* <Gestures /> */}
      {/* <AnimationControlls /> */}
      {/* <ViewBased /> */}
      <ScrollBased />

      {/* <p>{fcm}</p> */}
    </div>
  );
}

export default Home;
