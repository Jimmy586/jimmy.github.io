"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Database } from "lucide-react";

const labs = [
    {
        title: "Autonomous Finance Agents",
        desc: "Deep learning models for predictive market analysis and automated risk mitigation.",
        icon: <Brain className="w-6 h-6" />,
        gradient: "from-blue-600/20 to-cuda/10"
    },
    {
        title: "5G Energy Optimization",
        desc: "AI-driven power management reducing radio network energy consumption by 20%.",
        icon: <Database className="w-6 h-6" />,
        gradient: "from-emerald-600/20 to-green-400/10"
    },
    {
        title: "Computer Vision QC",
        desc: "YOLO-based hardware component recognition for industrial quality assurance.",
        icon: <Cpu className="w-6 h-6" />,
        gradient: "from-purple-600/20 to-pink-400/10"
    }
];

export default function AILab() {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                <div>
                    <h2 className="text-cuda font-mono tracking-widest uppercase mb-4">Experimental Sector</h2>
                    <h3 className="text-5xl font-black">The AI Lab</h3>
                </div>
                <p className="text-slate-400 max-w-md text-right">
                    Where theoretical research meets scalable industrial deployment.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {labs.map((lab, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className={`glass-panel p-8 rounded-[2rem] bg-gradient-to-br ${lab.gradient} border-white/5`}
                    >
                        <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit border border-white/10">
                            {lab.icon}
                        </div>
                        <h4 className="text-2xl font-bold mb-4">{lab.title}</h4>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            {lab.desc}
                        </p>
                        <button className="mt-8 text-cuda text-xs font-bold uppercase tracking-widest hover:underline transition-all">
                            Initiate Diagnostic →
                        </button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
