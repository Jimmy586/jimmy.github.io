"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-24 px-6 bg-black/50 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
                <div>
                    <h3 className="text-4xl font-black mb-8">Ready to build <br />the <span className="text-gradient">impossible?</span></h3>
                    <p className="text-slate-400 max-w-md leading-relaxed mb-12">
                        Currently available for strategic consulting, Ph.D. mentorship, and high-impact AI architecture.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-slate-300">
                            <Mail className="w-5 h-5 text-cuda" />
                            <span>contact@vatosoamananjara-jimmy.com</span>
                        </div>
                        <div className="flex items-center gap-4 text-slate-300">
                            <MapPin className="w-5 h-5 text-cuda" />
                            <span>Paris, France</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-between items-end">
                    <div className="flex gap-6">
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            href="https://linkedin.com/in/vatosoa-mananjara-jimmy"
                            className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-cuda/50 transition-colors"
                        >
                            <Linkedin className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            href="#"
                            className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-cuda/50 transition-colors"
                        >
                            <Github className="w-6 h-6" />
                        </motion.a>
                    </div>

                    <div className="text-slate-600 text-sm font-mono mt-16 md:mt-0">
                        © {new Date().getFullYear()} ARCHITECT OF INTELLIGENCE. <br className="md:hidden" />
                        [JIMMY VATOSOA CORE_SYSTEM_V.2.08]
                    </div>
                </div>
            </div>
        </footer>
    );
}
