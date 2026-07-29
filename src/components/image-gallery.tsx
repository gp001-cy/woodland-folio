import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const IMAGES = ["/IMG_8680.jpeg", "/IMG_9636.jpeg", "/IMG_9640.jpeg"];
const INTERVAL = 3500;

export function ImageGallery() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % IMAGES.length), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(next, INTERVAL);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, next]);

  return (
    <div
      className="relative w-full overflow-hidden group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex transition-all duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Mizarstvo Šetina — galerija ${i + 1}`}
            loading={i === 0 ? "eager" : "lazy"}
            className="w-full h-[400px] md:h-[70vh] object-cover shrink-0"
          />
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
        {IMAGES.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Pojdi na sliko ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-2.5 cursor-pointer rounded-full transition-all duration-500 ease-in-out",
              i === index
                ? "w-8 bg-background"
                : "w-2.5 bg-background/50 hover:bg-background/80",
            )}
          />
        ))}
      </div>
    </div>

  );
}
