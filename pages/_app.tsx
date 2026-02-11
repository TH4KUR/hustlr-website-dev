"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { AppProps } from "next/app";
import "@/styles/globals.css"; // Ensure global styles are imported
import { Toaster } from "sonner";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize ScrollSmoother
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true,
    });

    return () => {
      // Cleanup on unmount
      ScrollSmoother.getAll().forEach((smoother) => smoother.kill());
    };
  }, []);

  return (
    // <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <>
      <Toaster richColors closeButton />
      <Component {...pageProps} />
    </>
    // </ThemeProvider>
  );
}
