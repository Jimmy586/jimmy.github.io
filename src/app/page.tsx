import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import Trinity from "@/components/Trinity";
import Timeline from "@/components/Timeline";
import AILab from "@/components/AILab";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <div className="space-y-32">
                <ImpactStats />
                <Trinity />
                <Timeline />
                <AILab />
            </div>
            <Footer />
        </main>
    );
}
