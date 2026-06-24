"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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
      <div className="absolute left-0 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#111315] text-white shadow z-10 shrink-0 overflow-hidden">
        <Image
          src={logoUrl}
          alt={logoAlt}
          width={40}
          height={40}
          className="w-full h-full object-contain p-1.5"
        />
      </div>
      <div
        className="w-full pl-16 flex flex-col border-b border-white/5 pb-6 hover:border-white/10 transition-colors cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-start gap-6">
          <div className="flex flex-col space-y-1">
            <span className="text-xs text-zinc-500 font-medium">{year}</span>
            <h3 className="text-lg font-bold text-zinc-200">{title}</h3>
            <span className="text-sm text-zinc-400">{company}</span>
          </div>
          <div className="px-4 pt-1 flex shrink-0">
            {isExpanded ? (
              <FaChevronUp className="text-zinc-500" />
            ) : (
              <FaChevronDown className="text-zinc-500" />
            )}
          </div>
        </div>

        {isExpanded && descriptionItems && descriptionItems.length > 0 && (
          <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <ul className="text-xs text-zinc-400 list-disc list-outside pl-4 space-y-1">
              {descriptionItems.map((item, idx) => (
                <li key={idx} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
