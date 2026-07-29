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
      className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-xl group"
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
            className="w-full h-[400px] object-cover shrink-0"
          />
        ))}
      </div>

      <button
        type="button"
        aria-label="Prejšnja slika"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground backdrop-blur transition-all duration-500 ease-in-out hover:bg-background"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Naslednja slika"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground backdrop-blur transition-all duration-500 ease-in-out hover:bg-background"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {IMAGES.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Pojdi na sliko ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-2 rounded-full transition-all duration-500 ease-in-out",
              i === index ? "w-6 bg-background" : "w-2 bg-background/50",
            )}
          />
        ))}
      </div>
    </div>
  );
}
