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
      className="fixed inset-0 z-[80] cursor-pointer bg-ink/95"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onPointerDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        onPointerDown={(e) => e.stopPropagation()}
        className="absolute top-6 right-6 z-20 flex cursor-pointer items-center gap-2 border border-bone/40 bg-ink/60 px-5 py-3 text-xs uppercase tracking-[0.25em] text-bone transition-colors hover:bg-bone hover:text-ink"
      >
        <X className="h-4 w-4" />
        Zapri
      </button>

      {hasNav && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev?.();
            }}
            onPointerDown={(e) => e.stopPropagation()}
            aria-label="Prejšnja slika"
            className="absolute top-1/2 left-2 z-20 -translate-y-1/2 cursor-pointer border-none bg-transparent p-2 text-white transition-all duration-200 hover:scale-110 hover:opacity-70 md:left-6"
          >
            <ChevronLeft className="h-10 w-10 md:h-12 md:w-12" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext?.();
            }}
            onPointerDown={(e) => e.stopPropagation()}
            aria-label="Naslednja slika"
            className="absolute top-1/2 right-2 z-20 -translate-y-1/2 cursor-pointer border-none bg-transparent p-2 text-white transition-all duration-200 hover:scale-110 hover:opacity-70 md:right-6"
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
          <div
            className="pointer-events-auto h-full w-full"
            onClick={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
          >
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
              onTransform={(_ref, state) => {
                scaleRef.current = state.scale;
                setZoomed(state.scale > 1.01);
              }}
            >
              <TransformComponent
                wrapperClass="!h-full !w-full"
                contentClass="!h-full !w-full !flex !items-center !justify-center"
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
                  style={{ touchAction: zoomed ? "none" : "pan-y" }}
                  className="inline-flex max-h-[88vh] max-w-[92vw] items-center justify-center"
                >
                  <img
                    src={src}
                    alt={alt}
                    draggable={false}
                    className="max-h-[88vh] w-auto max-w-[92vw] object-contain select-none"
                  />
                </motion.div>
              </TransformComponent>
            </TransformWrapper>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
