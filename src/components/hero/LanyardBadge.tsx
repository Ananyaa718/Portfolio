"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ButterflyMotif } from "@/components/background/ButterflyMotif";
import { Sparkles, Camera, ShieldCheck } from "lucide-react";

interface LanyardBadgeProps {
  customPhoto?: string | null;
  onPhotoChange?: (url: string) => void;
}

export function LanyardBadge({ customPhoto, onPhotoChange }: LanyardBadgeProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Default stylized duotone avatars for student profile
  const avatarStyles = [
    {
      label: "Duotone Crimson",
      gradient: "from-[#e63946]/30 via-neutral-900 to-black",
      accent: "#e63946",
    },
    {
      label: "Teal Cyan Glow",
      gradient: "from-[#00f2fe]/30 via-neutral-900 to-black",
      accent: "#2dd4bf",
    },
    {
      label: "Violet Purple",
      gradient: "from-[#a855f7]/30 via-neutral-900 to-black",
      accent: "#c084fc",
    },
  ];

  // Mouse physics for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 160, damping: 16 });
  const mouseYSpring = useSpring(y, { stiffness: 160, damping: 16 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["14deg", "-14deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-16deg", "16deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const toggleAvatarStyle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoIndex((prev) => (prev + 1) % avatarStyles.length);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 90, damping: 15, delay: 0.1 }}
      className="relative flex flex-col items-center select-none pt-2 z-20"
    >
      {/* 1. Lanyard Ribbon / String from Viewport Top */}
      <div className="flex flex-col items-center">
        {/* Top Anchor Mount */}
        <div className="w-14 h-3 bg-neutral-800 rounded-b-md border border-neutral-700/80 shadow-md" />
        
        {/* Woven Fabric Lanyard Strap */}
        <div className="relative w-4 h-16 md:h-24 bg-gradient-to-b from-neutral-900 via-[#1a1a20] to-[#121218] border-x border-neutral-800/80 shadow-inner flex items-center justify-center">
          <div className="w-[1px] h-full bg-[#e63946]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(#e63946_1px,transparent_1px)] [background-size:4px_4px] opacity-20" />
        </div>

        {/* 2. Metal Swivel Clip with Animated Butterfly/Moth */}
        <div className="relative flex flex-col items-center -my-2 z-30">
          {/* Metallic Clip Hook */}
          <div className="w-7 h-5 rounded-t-lg bg-gradient-to-r from-neutral-600 via-neutral-300 to-neutral-700 border border-neutral-400/50 shadow-sm" />
          <div className="w-9 h-3 rounded-full bg-neutral-800 border border-neutral-600 shadow" />
          
          {/* Butterfly / Moth Clip Centerpiece */}
          <div className="absolute -top-3 scale-90 md:scale-100 filter drop-shadow-[0_4px_12px_rgba(45,212,191,0.4)]">
            <ButterflyMotif size={44} glow={true} animateDrift={false} />
          </div>
        </div>
      </div>

      {/* 3. The 3D ID Badge Card Container */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="relative w-[310px] sm:w-[340px] md:w-[370px] mt-2 cursor-grab active:cursor-grabbing"
      >
        {/* Card Body - Dark Plastic Look with Holographic Sheen */}
        <div className="relative rounded-2xl bg-gradient-to-b from-[#18181f] via-[#101015] to-[#0c0c10] border border-white/15 p-5 md:p-6 id-badge-shadow overflow-hidden backdrop-blur-xl transition-all duration-300 hover:border-[#e63946]/40">
          
          {/* Holographic Watermark Sheen */}
          <div className="absolute inset-0 hologram-shimmer opacity-40 pointer-events-none" />

          {/* Lanyard Hole Cutout at Card Top */}
          <div className="flex justify-center mb-4">
            <div className="w-14 h-2.5 rounded-full bg-[#0a0a0d] border border-neutral-700/80 shadow-inner flex items-center justify-center">
              <div className="w-8 h-[2px] bg-neutral-800" />
            </div>
          </div>

          {/* Badge Top Header */}
          <div className="flex items-start justify-between border-b border-white/10 pb-3 mb-4">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#e63946] font-bold block">
                OFFICIAL STUDENT PASS
              </span>
              <h3 className="font-display text-xl md:text-2xl leading-tight font-black text-white tracking-tighter">
                STUDENT<br />
                <span className="text-neutral-400 font-light">PORTFOLIO</span>
              </h3>
            </div>
            <div className="text-right font-mono">
              <span className="text-[10px] text-neutral-500 block">ID: AR-2026</span>
              <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                VERIFIED
              </span>
            </div>
          </div>

          {/* Profile Photo Placeholder with Duotone / High Contrast Aesthetic */}
          <div className="relative group rounded-xl overflow-hidden mb-4 border border-white/10 bg-gradient-to-b from-neutral-900 to-black">
            <div className={`aspect-[4/3] w-full bg-gradient-to-br ${avatarStyles[photoIndex].gradient} relative flex items-center justify-center p-4`}>
              
              {/* Stylized Artistic Avatar Silhouette / Placeholder */}
              <div className="relative flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full border-2 border-white/20 bg-neutral-900/90 flex items-center justify-center shadow-lg mb-2 relative overflow-hidden group-hover:border-[#e63946] transition-colors">
                  {/* Decorative duotone gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#e63946]/40 via-transparent to-[#2dd4bf]/30 opacity-70 z-10 pointer-events-none" />
                  <img
                    src="/profile.jpg"
                    alt="Ananya Rastogi"
                    className="w-full h-full object-cover relative z-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute bottom-1 w-8 h-[2px] bg-[#e63946] z-20" />
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-neutral-300 bg-black/60 px-2.5 py-1 rounded-full border border-white/10">
                  <Camera className="w-3 h-3 text-[#e63946]" />
                  <span>ANANYA RASTOGI</span>
                </div>
              </div>

              {/* Photo Style Switcher Button */}
              <button
                onClick={toggleAvatarStyle}
                title="Click to cycle aesthetic filter"
                className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/70 border border-white/20 text-neutral-300 hover:text-white hover:border-[#e63946] transition-all text-xs flex items-center gap-1 backdrop-blur-md cursor-pointer"
              >
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span className="text-[9px] font-mono hidden sm:inline">THEME</span>
              </button>

              {/* Hologram Overlay Chip */}
              <div className="absolute bottom-2 left-2 flex items-center gap-1 text-[9px] font-mono text-neutral-400 bg-neutral-950/80 px-2 py-0.5 rounded border border-white/10">
                <ShieldCheck className="w-3 h-3 text-[#2dd4bf]" />
                <span>CS · 2026</span>
              </div>
            </div>
          </div>

          {/* Student Info Details */}
          <div className="space-y-1.5 mb-4">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
                NAME
              </span>
              <span className="font-mono text-[10px] text-neutral-400">
                DEPT OF CSE
              </span>
            </div>
            <h4 className="font-display text-2xl font-black text-white tracking-tight">
              Ananya Rastogi
            </h4>
            
            {/* Cursive / Handwritten Script Role Line */}
            <div className="pt-1">
              <span className="font-mono text-[10px] text-[#e63946] uppercase font-bold tracking-wider block">
                ROLE
              </span>
              <p className="font-script text-xl md:text-2xl text-red-200/90 leading-tight">
                CS Student · Building in Software, Data & ML
              </p>
            </div>
          </div>

          {/* Card Footer: Barcode & Microchips */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            {/* Realistic Barcode Graphic */}
            <div className="flex items-center gap-[2px] h-6 opacity-60">
              {[4, 2, 6, 1, 3, 5, 2, 7, 2, 4, 1, 6, 3, 2, 5, 1, 4, 3, 6, 2, 5].map((w, i) => (
                <div
                  key={i}
                  className="bg-white h-full"
                  style={{ width: `${w}px` }}
                />
              ))}
            </div>

            {/* Smart Card Chip Icon */}
            <div className="w-8 h-6 rounded bg-gradient-to-tr from-amber-500/80 via-amber-300/80 to-amber-600/80 border border-amber-200/60 flex items-center justify-center shadow-sm">
              <div className="w-6 h-4 border border-amber-900/60 grid grid-cols-2 gap-[2px] p-[1px]">
                <div className="border border-amber-900/40 rounded-[1px]" />
                <div className="border border-amber-900/40 rounded-[1px]" />
                <div className="border border-amber-900/40 rounded-[1px]" />
                <div className="border border-amber-900/40 rounded-[1px]" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
