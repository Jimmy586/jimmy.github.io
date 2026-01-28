"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        date: "2024 - Present",
        company: "ESSEC Business School",
        role: "AI Project Lead & Professor",
        desc: "Leading LLM deployment for Finance and teaching AI/Data stacks.",
        current: true
    },
    {
        date: "2024 - Present",
        company: "AZ+ Madagascar",
        role: "CTO",
        desc: "Microservices migration & AI Agent integration for Madagascar's SuperApp.",
        current: true
    },
    {
        date: "2024",
        company: "SERMA Safety",
        role: "ML Engineer",
        desc: "RAG implementation & Computer Vision for industrial safety."
    },
    {
        date: "2022",
        company: "IMT Atlantique / U-Rennes",
        role: "MSc Cloud Computing",
        desc: "Valedictorian / Major de Promotion highlighting academic excellence."
    }
];

export default function Timeline() {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
            <h3 className="text-4xl font-bold mb-16 text-center">Path of the Architect</h3>
            <div className="relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden md:block" />
                <div className="flex flex-col md:flex-row gap-12 relative z-10">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex-1 glass-panel p-8 rounded-2xl relative"
                        >
                            {exp.current && (
                                <div className="absolute -top-3 left-8 px-4 py-1 bg-cuda text-obsidian text-xs font-black rounded-full">
                                    ACTIVE
                                </div>
                            )}
                            <div className="text-cuda font-mono text-sm mb-4">{exp.date}</div>
                            <h4 className="text-xl font-bold mb-2">{exp.company}</h4>
                            <div className="text-slate-300 font-medium mb-4">{exp.role}</div>
                            <p className="text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
