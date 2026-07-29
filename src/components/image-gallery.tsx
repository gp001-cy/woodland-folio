import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const IMAGES = ["/IMG_9640.jpeg", "/IMG_9636.jpeg", "/IMG_8680.jpeg"];
const INTERVAL = 3500;
const SWIPE_THRESHOLD = 50;

export function ImageGallery() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % IMAGES.length), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length),
    [],
  );

  useEffect(() => {
    if (paused || dragging) return;
    timer.current = setInterval(next, INTERVAL);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, dragging, next]);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    deltaX.current = 0;
    setDragging(true);
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    deltaX.current = e.clientX - startX.current;
  };

  const onPointerUp = () => {
    if (startX.current === null) return;
    if (deltaX.current <= -SWIPE_THRESHOLD) next();
    else if (deltaX.current >= SWIPE_THRESHOLD) prev();
    startX.current = null;
    deltaX.current = 0;
    setDragging(false);
  };

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden select-none touch-pan-y",
        dragging ? "cursor-grabbing" : "cursor-grab",
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
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
            draggable={false}
            loading={i === 0 ? "eager" : "lazy"}
            className="w-full h-[calc(100svh-4rem)] md:h-[calc(100svh-5rem)] object-cover shrink-0"
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
