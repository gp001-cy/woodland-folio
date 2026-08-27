import { useEffect } from "react";
import { X } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface LightboxProps {
  src: string;
  alt: string;
  open: boolean;
  onClose: () => void;
}

export function Lightbox({ src, alt, open, onClose }: LightboxProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open || !src) return null;

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

      <TransformWrapper
        key={src}
        initialScale={1}
        minScale={1}
        maxScale={5}
        doubleClick={{ mode: "toggle", step: 1.6 }}
        wheel={{ step: 0.12 }}
        pinch={{ step: 5 }}
        centerOnInit
      >
        <TransformComponent
          wrapperClass="!h-full !w-full"
          contentClass="!h-full !w-full !flex !items-center !justify-center"
        >
          <img
            src={src}
            alt={alt}
            draggable={false}
            className="max-h-[88vh] w-auto max-w-[92vw] object-contain select-none"
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
