import Navbar from "@/components/navbar";
import Quotes from "@/components/quotes";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-pretty">
      <Navbar />
      <main className="flex-1">
        <section className="container py-12 lg:py-32 text-center space-y-8 flex flex-col items-center">
          <div className="space-y-2 md:space-y-4">
            <Badge className="text-sm md:text-base">
              📢 Soon to be&nbsp;<strong>Nica L. Deladia, LPT</strong>
            </Badge>
            <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
              Ma&apos;am Nica&apos;s EduCards
            </h1>
            <h2 className="md:text-xl text-muted-foreground">
              Flashcards to Ace the Board Exam. You can do it, Fighting!
            </h2>
          </div>
          <Quotes />
        </section>
      </main>
    </div>
  );
}
