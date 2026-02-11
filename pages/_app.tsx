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
    // Initialize ScrollSmoother for smooth scroll effect
    try {
      console.log("[v0] Initializing ScrollSmoother");
      
      // ScrollSmoother works automatically without needing a wrapper in many cases
      const smoother = ScrollSmoother.create({
        smooth: 1.5,
        effects: true,
        normalizeScroll: false,
      });
      
      console.log("[v0] ScrollSmoother initialized successfully");

      return () => {
        console.log("[v0] Cleaning up ScrollSmoother");
        smoother?.kill();
      };
    } catch (error) {
      console.warn("[v0] ScrollSmoother initialization note:", error);
      // Fall back to CSS smooth scroll if needed
      return () => {};
    }
  }, []);

  return (
    <>
      <Toaster richColors closeButton />
      <Component {...pageProps} />
    </>
  );
}
