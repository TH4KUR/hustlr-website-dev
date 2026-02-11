import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ImageShowcaseProps {
  images: Array<{ src: string; alt: string; delay?: number }>;
  title?: string;
  description?: string;
}

const ImageShowcase: React.FC<ImageShowcaseProps> = ({
  images,
  title,
  description,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    imagesRef.current.forEach((img, i) => {
      if (!img) return;

      // Staggered fade in and scale animation
      gsap.fromTo(
        img,
        {
          opacity: 0,
          scale: 0.8,
          y: 60,
          rotation: -5 + i * 2,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotation: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "top 25%",
            scrub: 1.5,
            markers: false,
          },
          delay: (i * 0.1) / 2,
        }
      );

      // Parallax effect on scroll
      gsap.to(img, {
        y: -30 + i * 10,
        rotation: i % 2 === 0 ? 1 : -1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 0.5,
          markers: false,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative py-16 sm:py-24 flex flex-col items-center gap-12"
    >
      {(title || description) && (
        <div className="text-center max-w-2xl mx-auto px-4">
          {title && (
            <h3 className="font-serif text-2xl sm:text-3xl font-normal mb-4 text-white">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-lg text-white/70">{description}</p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 w-full max-w-5xl mx-auto px-4">
        {images.map((image, i) => (
          <div
            key={i}
            ref={(el) => {
              imagesRef.current[i] = el;
            }}
            className="relative group overflow-hidden rounded-2xl shadow-2xl"
            style={{
              perspective: "1000px",
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageShowcase;
