"use client";
import { useRef, useEffect } from "react";

interface CertItem {
  name: string;
  desc: string;
  img: string;
}

interface CertMarqueeProps {
  items: CertItem[];
  speed?: number; // pixels per second, default 40
}

export function CertMarquee({ items, speed = 40 }: CertMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);
  const doubled = [...items, ...items]; // duplicate for seamless loop

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const totalWidth = track.scrollWidth / 2; // width of one set

    function tick() {
      posRef.current -= speed / 60;
      if (Math.abs(posRef.current) >= totalWidth) {
        posRef.current = 0;
      }
      if (track) track.style.transform = `translateX(${posRef.current}px)`;
      animRef.current = requestAnimationFrame(tick);
    }

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [speed]);

  return (
    <div className="overflow-hidden w-full" onMouseEnter={() => cancelAnimationFrame(animRef.current)}>
      <div ref={trackRef} className="flex gap-8 md:gap-12 whitespace-nowrap will-change-transform">
        {doubled.map((cert, i) => (
          <div
            key={i}
            className="flex items-center gap-3 flex-shrink-0 group"
          >
            <div className="w-8 h-8 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
              <img src={cert.img} alt={cert.name} className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-[0.625rem] font-bold uppercase tracking-[0.12em] text-[var(--text-cream)] opacity-80 group-hover:opacity-100 group-hover:text-[var(--gold)] transition-all duration-300">
                {cert.name}
              </div>
              <div className="text-[0.5625rem] text-[var(--text-muted)] hidden md:block">{cert.desc}</div>
            </div>
            <div className="w-px h-6 bg-[var(--border-subtle)] flex-shrink-0 mx-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
