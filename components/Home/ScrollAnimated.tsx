"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimated() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const data = [
    {
      title: "Strategy",
      number: "01",
      description:
        "Experts in Building and Zoning Code, guiding your project with confidence.",
    },
    {
      title: "Communication",
      number: "02",
      description:
        "Trustworthy, quick, accountable, and fluent in all things related to the Department of Buildings.",
    },
    {
      title: "Navigation",
      number: "03",
      description:
        "Turning city agency hurdles into on-time project milestones.",
    },
    {
      title: "Results",
      number: "04",
      description:
        "Fast, compliant, and precise—powered by our proprietary technologies",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemRefs.current.forEach((item, index) => {
        if (!item) return;

        const totalItems = data.length;
        const middleIndex = (totalItems - 1) / 2;
        const rotationDirection = index < middleIndex ? -1 : 1;
        const rotationAmount = Math.abs(index - middleIndex) * 3 * rotationDirection;

        // Set initial state
        gsap.set(item, {
          
          rotation: rotationAmount,
          scale: 0.95,
        });

        // Create scroll-triggered animation
        gsap.to(item, {
          x: 0,
          rotation: 0,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "top 40%",
            scrub: 1,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div  className="flex flex-col gap-10">
      {data.map((item, index) => (
        <div
          key={index}
          className="text-blue-900 font-[PPFONT] py-5 bg-white flex flex-col w-150 px-2"
        >
          <div className="flex justify-between px-5 py-2 text-5xl border-b border-blue-900">
            <h1>{item.title}</h1>
            <p>{item.number}</p>
          </div>
          <p className="py-10 px-5 pr-30 border-b border-blue-900 font-mono w-full text-sm">
            {item.description.toUpperCase()}
          </p>
        </div>
      ))}
    </div>
  );
}