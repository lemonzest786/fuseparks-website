"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface Card {
  title: string;
  description: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
}

export function ExpandableCard({ cards }: { cards: Card[] }) {
  const [active, setActive] = useState<Card | boolean | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-gray-800 border border-gray-700 rounded-full h-7 w-7"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[560px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-gray-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`} className="relative">
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-72 object-cover object-top opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="px-3 py-1 bg-brand text-gray-900 text-xs font-bold rounded-full uppercase tracking-wide">
                    {active.description}
                  </span>
                </div>
              </motion.div>

              <div className="p-6">
                <div className="mb-4">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-bold text-white text-xl md:text-2xl"
                  >
                    {active.title}
                  </motion.h3>

                </div>

                <div className="w-12 h-0.5 bg-brand mb-4" />

                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-gray-400 text-sm md:text-base h-36 md:h-fit pb-4 flex flex-col items-start gap-4 overflow-auto [scrollbar-width:none] [-ms-overflow-style:none]"
                >
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-gray-900 ${
              index === 0 || index === cards.length - 1 ? "md:col-span-2" : ""
            }`}
          >
            <motion.div layoutId={`image-${card.title}-${id}`}>
              <img
                src={card.src}
                alt={card.title}
                className={`w-full object-cover object-top opacity-75 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500 ${
                  index === 0 || index === cards.length - 1 ? "h-80 md:h-96" : "h-64 md:h-72"
                }`}
              />
            </motion.div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/30 to-transparent" />

            {/* Category chip */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1.5 bg-brand text-gray-900 text-xs font-bold rounded-full uppercase tracking-wide">
                {card.description}
              </span>
            </div>

            {/* Project number */}
            <div className="absolute top-4 right-4">
              <span className="text-white/30 text-xs font-mono">
                0{index + 1}
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-bold text-white text-xl md:text-2xl mb-1"
              >
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-white/50 text-sm sr-only"
              >
                {card.description}
              </motion.p>
              <div className="flex items-center gap-2 text-brand text-sm font-semibold mt-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span>View Project</span>
                <span className="text-base">↗</span>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
