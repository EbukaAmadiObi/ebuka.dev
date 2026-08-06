"use client";

import { useEffect, useRef, useState } from "react";
import { SplitFlapDisplay } from "@/components/split-flap";

/**
 * The "Where is Ebuka?" board. Cities come from the caller (resolved on the
 * server from src/data/travel-calendar.js) so the markup hydrates cleanly; this
 * component only owns the scroll-into-view flap animation.
 */
export default function TravelBoard({ previous, current, next }) {
  const travelRef = useRef(null);
  const [travelTriggered, setTravelTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTravelTriggered(true); },
      { threshold: 0.25 }
    );
    if (travelRef.current) observer.observe(travelRef.current);
    return () => observer.disconnect();
  }, []);

  if (!current) return null;

  return (
    <div
      ref={travelRef}
      className="w-full border-y border-[#2a1308] bg-[#080300]"
      style={{ boxShadow: 'inset 0 4px 32px rgba(0,0,0,0.5)' }}
    >
      {/* Board header */}
      <div className="w-[80%] md:w-[62.5%] mx-auto py-4 md:py-5 flex items-center justify-between border-b border-[#2a1308]">
        <span className="font-mono text-xs md:text-sm tracking-[0.25em] text-[#ab795e] uppercase">
          Where is Ebuka?
        </span>
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-green-500 animate-live" />
          <span className="font-mono text-xs tracking-[0.2em] text-[#cd9272] uppercase">Live</span>
        </div>
      </div>

      {/* Previously row */}
      {previous && (
        <div className="w-[80%] md:w-[62.5%] mx-auto py-4 md:py-6 flex flex-col md:flex-row md:items-center gap-2 md:gap-16 opacity-35 border-b border-[#2a1308]">
          <span className="font-mono text-xs tracking-[0.2em] text-[#cd9272] uppercase md:w-28 shrink-0">
            Previously
          </span>
          <SplitFlapDisplay city={previous} isStatic={true} fontSize="clamp(1.4rem, 3.5vw, 2.8rem)" />
        </div>
      )}

      {/* Now row */}
      <div className={`w-[80%] md:w-[62.5%] mx-auto py-5 md:py-8 flex flex-col md:flex-row md:items-center gap-2 md:gap-16 ${next ? 'border-b border-[#2a1308]' : ''}`}>
        <span className="font-mono text-xs tracking-[0.2em] text-[#cd9272] uppercase md:w-28 shrink-0">
          Now
        </span>
        <SplitFlapDisplay city={current} triggered={travelTriggered} />
      </div>

      {/* Next row */}
      {next && (
        <div className="w-[80%] md:w-[62.5%] mx-auto py-4 md:py-6 flex flex-col md:flex-row md:items-center gap-2 md:gap-16 opacity-35">
          <span className="font-mono text-xs tracking-[0.2em] text-[#cd9272] uppercase md:w-28 shrink-0">
            Next
          </span>
          <SplitFlapDisplay city={next} isStatic={true} fontSize="clamp(1.4rem, 3.5vw, 2.8rem)" />
        </div>
      )}
    </div>
  );
}
