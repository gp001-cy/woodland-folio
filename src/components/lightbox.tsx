import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { AnimatePresence, motion } from "framer-motion";

interface LightboxProps {
  src: string;
  alt: string;
  open: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

function isTouchDevice() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: none)").matches || window.innerWidth < 768;
}

export function Lightbox({ src, alt, open, onClose, onPrev, onNext }: LightboxProps) {
  const scaleRef = useRef(1);
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

  const hasNav = Boolean(onPrev || onNext);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 cursor-pointer bg-black/95"
        style={{ touchAction: "manipulation" }}
        onClick={onClose}
        onPointerUp={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        aria-label="Zapri galerijo"
      />

      <div className="pointer-events-none relative z-10 flex h-full w-full items-center justify-center">
        <button
          type="button"
          onClick={onClose}
          onPointerUp={(e) => e.stopPropagation()}
          style={{ touchAction: "manipulation" }}
          className="pointer-events-auto absolute top-6 right-6 z-20 flex cursor-pointer items-center gap-2 border border-bone/40 bg-ink/60 px-5 py-3 text-xs uppercase tracking-[0.25em] text-bone transition-colors hover:bg-bone hover:text-ink"
        >
          <X className="h-4 w-4" />
          Zapri
        </button>

        {hasNav && (
          <>
            <button
              type="button"
              onClick={onPrev}
              aria-label="Prejšnja slika"
              className="pointer-events-auto absolute top-1/2 left-2 z-20 -translate-y-1/2 cursor-pointer border-none bg-transparent p-2 text-white transition-all duration-200 hover:scale-110 hover:opacity-70 md:left-6"
            >
              <ChevronLeft className="h-10 w-10 md:h-12 md:w-12" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Naslednja slika"
              className="pointer-events-auto absolute top-1/2 right-2 z-20 -translate-y-1/2 cursor-pointer border-none bg-transparent p-2 text-white transition-all duration-200 hover:scale-110 hover:opacity-70 md:right-6"
            >
              <ChevronRight className="h-10 w-10 md:h-12 md:w-12" strokeWidth={1.5} />
            </button>
          </>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="pointer-events-none h-full w-full"
          >
            <TransformWrapper
              key={src}
              initialScale={1}
              minScale={1}
              maxScale={5}
              doubleClick={
                isTouchDevice()
                  ? { disabled: true }
                  : { mode: "toggle", step: 1.6 }
              }
              wheel={{ step: 0.12 }}
              pinch={{ step: 5 }}
              panning={{ disabled: !zoomed }}
              centerOnInit
              onTransform={(_ref, state) => {
                scaleRef.current = state.scale;
                setZoomed(state.scale > 1.01);
              }}
            >
              <TransformComponent
                wrapperClass="!pointer-events-none !h-full !w-full"
                contentClass="!pointer-events-none !h-full !w-full !flex !items-center !justify-center"
              >
                <motion.div
                  key={`drag-${src}`}
                  drag={!zoomed ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (zoomed) return;
                    if (info.offset.x < -50 || info.velocity.x < -500) {
                      onNext?.();
                    } else if (info.offset.x > 50 || info.velocity.x > 500) {
                      onPrev?.();
                    }
                  }}
                  onClick={(e) => e.stopPropagation()}
                  onPointerDown={(e) => e.stopPropagation()}
                  style={{ touchAction: zoomed ? "none" : "pan-y" }}
                  className="pointer-events-auto inline-flex max-h-[88vh] max-w-[92vw] items-center justify-center"
                >
                  <img
                    src={src}
                    alt={alt}
                    draggable={false}
                    onClick={(e) => e.stopPropagation()}
                    onPointerDown={(e) => e.stopPropagation()}
                    className="max-h-[88vh] w-auto max-w-[92vw] object-contain select-none"
                  />
                </motion.div>
              </TransformComponent>
            </TransformWrapper>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
