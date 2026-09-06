"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";

export type Shot = { src: string; alt: string; caption?: string };

/**
 * Full-size viewer for a set of shots.
 *
 * Design exports are only readable at size, so every thumbnail opens here.
 * Keyboard: Esc closes, arrows page through. Focus moves to the dialog on open
 * and returns to the trigger on close, and the page behind is scroll-locked.
 */
function Modal({
  shots,
  index,
  onClose,
  onIndex,
}: {
  shots: Shot[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const shot = shots[index];
  const many = shots.length > 1;

  const prev = useCallback(() => onIndex((index - 1 + shots.length) % shots.length), [index, shots.length, onIndex]);
  const next = useCallback(() => onIndex((index + 1) % shots.length), [index, shots.length, onIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft" && many) prev();
      else if (e.key === "ArrowRight" && many) next();
      else if (e.key === "Tab") {
        // Trap focus: the dialog's controls are the only tab stops.
        const nodes = dialogRef.current?.querySelectorAll<HTMLElement>("button");
        if (!nodes || nodes.length === 0) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, prev, next, many]);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector("button")?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-[100] flex flex-col bg-ink/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Bar */}
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <p id={titleId} className="min-w-0 truncate text-[13px] text-white/70">
          <span className="text-white">{shot.alt}</span>
          {shot.caption ? <span className="hidden sm:inline"> — {shot.caption}</span> : null}
        </p>
        <div className="flex items-center gap-3">
          {many && (
            <span className="font-mono text-[11px] tabular-nums text-white/50">
              {index + 1} / {shots.length}
            </span>
          )}
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="rounded-full border border-white/20 px-3 py-1.5 text-[13px] text-white transition-colors hover:bg-white/10"
          >
            Close
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="flex flex-1 items-center justify-center overflow-auto px-3 pb-4 sm:px-6">
        {/* Plain img: the sources are already sized and this avoids a second
            optimisation pass on an image that is meant to be viewed 1:1. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={shot.src}
          src={shot.src}
          alt={shot.alt}
          onClick={(e) => e.stopPropagation()}
          className="max-h-full max-w-full rounded-lg object-contain"
        />
      </div>

      {many && (
        <div className="flex items-center justify-center gap-2 pb-5">
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="rounded-full border border-white/20 px-4 py-2 text-[13px] text-white transition-colors hover:bg-white/10"
          >
            ← Prev
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="rounded-full border border-white/20 px-4 py-2 text-[13px] text-white transition-colors hover:bg-white/10"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

/** Hook holding the open/close state for one set of shots. */
export function useLightbox() {
  const [index, setIndex] = useState<number | null>(null);
  const trigger = useRef<HTMLElement | null>(null);

  const open = (i: number, el?: HTMLElement | null) => {
    trigger.current = el ?? null;
    setIndex(i);
  };
  const close = () => {
    setIndex(null);
    trigger.current?.focus();
  };
  return { index, open, close, setIndex };
}

/**
 * A case study's media: one large cover plus a strip of supporting frames.
 * Every image opens the viewer at its own position.
 */
export function CaseStudyMedia({
  shots,
  bg,
  layout = "desktop",
  priority = false,
}: {
  shots: Shot[];
  bg: string;
  layout?: "desktop" | "phone";
  priority?: boolean;
}) {
  const { index, open, close, setIndex } = useLightbox();
  const [cover, ...rest] = shots;

  // Phone screens are 375pt wide. Stretching one to column width reads as a
  // mistake, so they get a device-sized grid instead of a hero cover.
  if (layout === "phone") {
    return (
      <>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {shots.map((shot, i) => (
            <li key={shot.src}>
              <button
                onClick={(e) => open(i, e.currentTarget)}
                aria-label={`View ${shot.alt} full size`}
                className="block w-full cursor-zoom-in overflow-hidden rounded-2xl p-1.5 transition-transform duration-200 hover:-translate-y-1"
                style={{ background: bg }}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={0}
                  height={0}
                  className="w-full rounded-xl"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 15vw"
                  priority={priority && i === 0}
                  loading={priority && i === 0 ? undefined : "lazy"}
                />
              </button>
              <p className="mt-2 truncate text-[12px] text-ink-50">{shot.alt}</p>
            </li>
          ))}
        </ul>

        {index !== null && (
          <Modal shots={shots} index={index} onClose={close} onIndex={setIndex} />
        )}
      </>
    );
  }

  return (
    <>
      <button
        onClick={(e) => open(0, e.currentTarget)}
        aria-label={`View ${cover.alt} full size`}
        className="group block w-full cursor-zoom-in rounded-[20px] p-2 text-left transition-shadow duration-300 hover:shadow-xl md:p-3"
        style={{ background: bg }}
      >
        <Image
          src={cover.src}
          alt={cover.alt}
          width={0}
          height={0}
          className="w-full rounded-xl md:rounded-2xl"
          sizes="(max-width: 1024px) 100vw, 58vw"
          priority={priority}
          loading={priority ? undefined : "lazy"}
        />
      </button>

      {rest.length > 0 && (
        <ul className={`mt-3 grid gap-3 ${rest.length > 2 ? "grid-cols-3" : "grid-cols-2"}`}>
          {rest.map((shot, i) => (
            <li key={shot.src}>
              <button
                onClick={(e) => open(i + 1, e.currentTarget)}
                aria-label={`View ${shot.alt} full size`}
                className="block w-full cursor-zoom-in rounded-xl p-1.5 transition-transform duration-200 hover:-translate-y-0.5"
                style={{ background: bg }}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={0}
                  height={0}
                  className="w-full rounded-lg"
                  sizes="(max-width: 1024px) 33vw, 19vw"
                  loading="lazy"
                />
              </button>
            </li>
          ))}
        </ul>
      )}

      {index !== null && (
        <Modal shots={shots} index={index} onClose={close} onIndex={setIndex} />
      )}
    </>
  );
}

/** The daily-practice wall: staggered tiles, each opening the viewer. */
export function GalleryWall({
  shots,
  tiles,
}: {
  shots: Shot[];
  tiles: { bg: string; offset: string }[];
}) {
  const { index, open, close, setIndex } = useLightbox();

  return (
    <>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3 md:gap-y-4">
        {shots.map((shot, i) => (
          <li key={shot.src} className={tiles[i]?.offset}>
            <figure>
              <button
                onClick={(e) => open(i, e.currentTarget)}
                aria-label={`View ${shot.alt} full size`}
                className="block w-full cursor-zoom-in rounded-2xl p-2 transition-transform duration-300 hover:-translate-y-1"
                style={{ background: tiles[i]?.bg }}
              >
                {/* Fixed ratio: some of these are full-page exports 12,000px
                    tall, which would tear a hole in the grid. The crop is only
                    the thumbnail — the viewer shows the whole thing. */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={0}
                    height={0}
                    className="h-full w-full object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
              </button>
              <figcaption className="mt-3 flex items-baseline gap-2">
                <span className="text-[14px] font-medium text-ink">{shot.alt}</span>
                <span className="text-[13px] text-ink-50">{shot.caption}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      {index !== null && (
        <Modal shots={shots} index={index} onClose={close} onIndex={setIndex} />
      )}
    </>
  );
}
