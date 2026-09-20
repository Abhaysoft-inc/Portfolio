"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

interface ExperienceItemProps {
  year: string;
  title: string;
  company: string;
  logoUrl: string;
  logoAlt: string;
  descriptionItems?: string[];
}

export function ExperienceItem({
  year,
  title,
  company,
  logoUrl,
  logoAlt,
  descriptionItems,
}: ExperienceItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative flex items-start group py-4">
      {/* Company Logo Badge */}
      <div
        className={`absolute left-0 flex items-center justify-center w-10 h-10 rounded-full border bg-white shadow-sm z-10 shrink-0 overflow-hidden transition-all duration-300 select-none pointer-events-none p-1.5 ${
          isExpanded
            ? "border-emerald-400 ring-2 ring-emerald-500/20 shadow-emerald-500/10 shadow-lg scale-105"
            : "border-zinc-200 group-hover:border-zinc-300"
        }`}
      >
        <Image
          src={logoUrl}
          alt={logoAlt}
          width={40}
          height={40}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="w-full pl-16 flex flex-col border-b border-white/5 pb-6 hover:border-white/10 transition-colors">
        {/* Clickable Header Trigger */}
        <button
          type="button"
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex justify-between items-start gap-6 text-left cursor-pointer select-none focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500/50 rounded-lg group/btn"
        >
          <div className="flex flex-col space-y-1">
            <span className="text-xs text-zinc-500 font-medium">{year}</span>
            <h3
              className={`text-lg font-bold transition-colors duration-200 ${
                isExpanded
                  ? "text-white"
                  : "text-zinc-200 group-hover/btn:text-white"
              }`}
            >
              {title}
            </h3>
            <span className="text-sm text-zinc-400">{company}</span>
          </div>
          <div className="px-4 pt-1 flex shrink-0 items-center">
            <FaChevronDown
              className={`text-sm transition-transform duration-300 ease-in-out ${
                isExpanded
                  ? "rotate-180 text-emerald-400"
                  : "text-zinc-500 group-hover/btn:text-zinc-300"
              }`}
            />
          </div>
        </button>

        {/* Collapsible Content */}
        {descriptionItems && descriptionItems.length > 0 && (
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              isExpanded
                ? "grid-rows-[1fr] opacity-100 mt-4"
                : "grid-rows-[0fr] opacity-0 mt-0 pointer-events-none"
            }`}
          >
            <div className="overflow-hidden min-h-0">
              <ul className="text-xs text-zinc-400 list-disc list-outside pl-4 space-y-1.5 leading-relaxed pt-1 select-text">
                {descriptionItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

