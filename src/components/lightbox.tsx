import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface LightboxProps {
  src: string;
  alt: string;
  open: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export function Lightbox({ src, alt, open, onClose, onPrev, onNext }: LightboxProps) {
  const scaleRef = useRef(1);
  const startX = useRef<number | null>(null);
  const startY = useRef(0);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    scaleRef.current = 1;
    setZoomed(false);
  }, [src]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose, onPrev, onNext]);

  if (!open || !src) return null;

  const handlePointerDown = (e: React.PointerEvent) => {
    if (scaleRef.current > 1.01) {
      startX.current = null;
      return;
    }
    startX.current = e.clientX;
    startY.current = e.clientY;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (startX.current === null || scaleRef.current > 1.01) return;
    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;
    startX.current = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) onNext?.();
      else onPrev?.();
    }
  };

  const hasNav = Boolean(onPrev || onNext);

  return (
    <div
      className="fixed inset-0 z-[80] bg-ink/95"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 z-20 flex cursor-pointer items-center gap-2 border border-bone/40 bg-ink/60 px-5 py-3 text-xs uppercase tracking-[0.25em] text-bone transition-colors hover:bg-bone hover:text-ink"
      >
        <X className="h-4 w-4" />
        Zapri
      </button>

      {hasNav && (
        <>
          <button
            type="button"
            onClick={() => onPrev?.()}
            aria-label="Prejšnja slika"
            className="absolute top-1/2 left-2 z-20 -translate-y-1/2 cursor-pointer border border-bone/30 bg-ink/50 p-3 text-bone transition-colors hover:bg-bone hover:text-ink md:left-6"
          >
            <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
          </button>
          <button
            type="button"
            onClick={() => onNext?.()}
            aria-label="Naslednja slika"
            className="absolute top-1/2 right-2 z-20 -translate-y-1/2 cursor-pointer border border-bone/30 bg-ink/50 p-3 text-bone transition-colors hover:bg-bone hover:text-ink md:right-6"
          >
            <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
          </button>
        </>
      )}

      <TransformWrapper
        key={src}
        initialScale={1}
        minScale={1}
        maxScale={5}
        doubleClick={{ mode: "toggle", step: 1.6 }}
        wheel={{ step: 0.12 }}
        pinch={{ step: 5 }}
        panning={{ disabled: !zoomed }}
        centerOnInit
        onTransformed={(_ref, state) => {
          scaleRef.current = state.scale;
          setZoomed(state.scale > 1.01);
        }}
      >
        <TransformComponent
          wrapperClass="!h-full !w-full"
          contentClass="!h-full !w-full !flex !items-center !justify-center"
        >
          <img
            src={src}
            alt={alt}
            draggable={false}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            className="max-h-[88vh] w-auto max-w-[92vw] object-contain select-none"
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
