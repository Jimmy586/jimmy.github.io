"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, GraduationCap } from "lucide-react";

const expertises = [
    {
        title: "Leadership",
        description: "Directing 13+ devs, transitioning monolithic architectures to Microservices, and leading Ph.D. teams at ESSEC Metalab.",
        icon: <Briefcase className="w-8 h-8 text-cuda" />,
        color: "from-cuda/20 to-transparent"
    },
    {
        title: "Engineering",
        description: "High-performance computing (NVIDIA CUDA), Generative AI, RAG implementation, and GCP/AWS Cloud Architecture.",
        icon: <Code className="w-8 h-8 text-cuda-purple" />,
        color: "from-cuda-purple/20 to-transparent"
    },
    {
        title: "Education",
        description: "External Professor at ESSEC Business School, teaching the next generation of leaders about Python, Data, and AI.",
        icon: <GraduationCap className="w-8 h-8 text-gold" />,
        color: "from-gold/20 to-transparent"
    }
];

export default function Trinity() {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <h3 className="text-4xl font-bold mb-16 text-center">The Trinity of Expertise</h3>
            <div className="grid md:grid-cols-3 gap-8">
                {expertises.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className={`glass-panel p-10 rounded-3xl relative overflow-hidden group`}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        <div className="relative z-10">
                            <div className="mb-6 p-4 w-fit rounded-2xl bg-white/5 border border-white/10">
                                {exp.icon}
                            </div>
                            <h4 className="text-2xl font-bold mb-4">{exp.title}</h4>
                            <p className="text-slate-400 leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
