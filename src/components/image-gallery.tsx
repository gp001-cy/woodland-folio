import { useCallback, useEffect, useRef, useState } from "react";

import { Lightbox } from "@/components/lightbox";
import { cn } from "@/lib/utils";

const IMAGES = ["/IMG_9640.jpeg", "/IMG_9636.jpeg", "/IMG_8680.jpeg"];
const MOBILE_IMAGES = ["/IMG_8749.jpeg", "/IMG_8872.jpeg", "/IMG_9455.jpeg"];
const INTERVAL = 3500;
const SWIPE_THRESHOLD = 50;
const CLICK_DRAG_THRESHOLD = 10;

export function ImageGallery() {
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string>(IMAGES[0]);
  const [lightboxAlt, setLightboxAlt] = useState<string>("");
  const startX = useRef<number | null>(null);
  const startY = useRef(0);
  const startTime = useRef(0);
  const deltaX = useRef(0);
  const didDragRef = useRef(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % IMAGES.length), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length),
    [],
  );

  useEffect(() => {
    if (dragging || lightboxOpen) return;
    const id = setTimeout(next, INTERVAL);
    return () => clearTimeout(id);
  }, [index, dragging, lightboxOpen, next]);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    startY.current = e.clientY;
    startTime.current = Date.now();
    deltaX.current = 0;
    didDragRef.current = false;
    setDragging(true);
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    deltaX.current = e.clientX - startX.current;
    const dy = e.clientY - startY.current;
    if (
      Math.abs(deltaX.current) > CLICK_DRAG_THRESHOLD ||
      Math.abs(dy) > CLICK_DRAG_THRESHOLD
    ) {
      didDragRef.current = true;
    }
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const dx = deltaX.current;
    const dy = e.clientY - startY.current;
    const moved = Math.hypot(dx, dy);
    const duration = Date.now() - startTime.current;
    const isTap =
      !didDragRef.current && moved <= CLICK_DRAG_THRESHOLD && duration < 500;

    if (dx <= -SWIPE_THRESHOLD) {
      next();
    } else if (dx >= SWIPE_THRESHOLD) {
      prev();
    } else if (isTap && !(e.target as HTMLElement).closest("button")) {
      const isMobile = window.innerWidth < 768;
      const src = isMobile ? MOBILE_IMAGES[index] : IMAGES[index];
      setLightboxSrc(src);
      setLightboxAlt(`Mizarstvo Šetina — galerija ${index + 1}`);
      setLightboxOpen(true);
    }
    startX.current = null;
    deltaX.current = 0;
    setDragging(false);
  };




  return (
    <>
      <div
        className={cn(
          "relative w-full overflow-hidden select-none touch-pan-y",
          dragging ? "cursor-grabbing" : "cursor-grab",
        )}
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
            <div key={src} className="w-full shrink-0">
              <img
                src={src}
                alt={`Mizarstvo Šetina — galerija ${i + 1}`}
                draggable={false}
                loading={i === 0 ? "eager" : "lazy"}
                className="hidden md:block w-full h-[calc(100svh-4rem)] md:h-[calc(100svh-5rem)] object-cover cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:opacity-95"
              />
              <img
                src={MOBILE_IMAGES[i]}
                alt={`Mizarstvo Šetina — galerija ${i + 1}`}
                draggable={false}
                loading={i === 0 ? "eager" : "lazy"}
                className="block md:hidden w-full h-[calc(100svh-4rem)] object-cover cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:opacity-95"
              />
            </div>
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

      <Lightbox
        src={lightboxSrc}
        alt={lightboxAlt}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
