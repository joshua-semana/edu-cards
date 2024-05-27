import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-pretty">
      <main className="flex-1">
        <section className="container py-12 lg:py-32 text-center space-y-2 md:space-y-4">
          <Badge className="text-sm md:text-lg">
            📢 Soon to be&nbsp;<span className="font-bold">Nica L. Deladia, LPT</span>
          </Badge>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Ma&apos;am Nica&apos;s EduCards
          </h1>
          <h2 className="md:text-2xl text-muted-foreground">
            Flashcards to Ace the Board Exam. You can do it, <strong>Fighting!</strong>
          </h2>
        </section>
      </main>
    </div>
  );
}
