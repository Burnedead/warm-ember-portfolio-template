"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollContext = createContext<Lenis | null>(null);

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

export function SmoothScrollProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const scrollPaddingTop = Number.parseFloat(
      window.getComputedStyle(document.documentElement).scrollPaddingTop,
    );
    const instance = new Lenis({
      autoRaf: false,
      anchors: {
        offset: Number.isFinite(scrollPaddingTop) ? -scrollPaddingTop : 0,
      },
    });
    const updateScrollTrigger = () => ScrollTrigger.update();
    const updateLenis = (time: number) => instance.raf(time * 1000);
    const unsubscribe = instance.on("scroll", updateScrollTrigger);

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();
    setLenis(instance);

    return () => {
      unsubscribe();
      gsap.ticker.remove(updateLenis);
      instance.destroy();
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenis}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
