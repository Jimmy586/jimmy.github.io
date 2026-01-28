"use client";

import { motion } from "framer-motion";
import { Users, Zap, Shield, Heart } from "lucide-react";

const stats = [
    { label: "Developers Managed", value: "13+", icon: <Users />, color: "from-blue-500 to-cyan-500", size: "col-span-2 row-span-2" },
    { label: "Error Reduction", value: "35%", icon: <Shield />, color: "from-purple-500 to-pink-500", size: "col-span-2 row-span-1" },
    { label: "Energy Savings", value: "20%", icon: <Zap />, color: "from-green-500 to-emerald-500", size: "col-span-1 row-span-1" },
    { label: "Client Satisfaction", value: "95%", icon: <Heart />, color: "from-orange-500 to-red-500", size: "col-span-1 row-span-1" },
];

export default function ImpactStats() {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <h3 className="text-4xl font-bold mb-12 text-center">Quantifiable Impact</h3>
            <div className="bento-grid">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className={`glass-panel p-8 rounded-3xl flex flex-col justify-between ${stat.size}`}
                    >
                        <div className={`p-3 w-fit rounded-2xl bg-gradient-to-br ${stat.color} mb-4`}>
                            {stat.icon}
                        </div>
                        <div>
                            <div className="text-5xl font-black mb-2">{stat.value}</div>
                            <div className="text-slate-400 font-medium">{stat.label}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
