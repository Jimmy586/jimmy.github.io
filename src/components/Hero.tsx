"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-obsidian">
            {/* Background Particles Script/Canvas would go here, simplified with CSS for now */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div
                    className="absolute w-full h-full bg-[radial-gradient(circle_at_var(--x)_var(--y),_#00f6ff33_0%,_transparent_50%)]"
                    style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 text-center px-6"
            >
                <h2 className="text-cuda font-mono mb-4 tracking-widest uppercase">Initializing Intelligence...</h2>
                <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
                    Architecting the <br />
                    <span className="text-gradient">Future of AI</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 font-light">
                    AI Engineer | Cloud Expert | Tech Lead
                </p>

                <div className="flex gap-4 justify-center mt-8">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-cuda text-obsidian font-bold rounded-full shadow-[0_0_20px_#00f6ff] hover:shadow-[0_0_40px_#00f6ff] transition-all"
                    >
                        Explore the Vision
                    </motion.button>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 px-6 max-w-2xl text-center italic text-slate-500 text-sm"
            >
                "Nothing is out of reach, as long as you just sit down and take the time to read from the beginning" — Jimmy VATOSOA
            </motion.div>
        </section>
    );
}
