import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Quotes from "@/components/quotes";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-pretty">
      <Navbar />
      <main className="flex-1">
        <section className="container py-12 lg:py-32 space-y-8 flex flex-col items-center">
          <div className="space-y-2 md:space-y-4 flex flex-col items-center">
            <HoverCard>
              <HoverCardTrigger>
                <Badge className="text-sm md:text-base">
                  <p>
                    📢 Soon to be&nbsp;<span className="font-bold">Nica L. Deladia, LPT</span>
                  </p>
                </Badge>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex space-x-4">
                  <Avatar>
                    <AvatarFallback>ND</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Nica L. Deladia</h4>
                    <p className="text-sm">
                      Cum Laude graduate of University of Caloocan City &#40;UCC&#41;.
                    </p>
                    <div className="flex items-center pt-1 space-x-2">
                      <GraduationCap className="h-5 w-5 opacity-70" />
                      <p className="text-xs text-muted-foreground">BTLE Major in Home Economics</p>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>

            <h1 className="text-3xl md:text-6xl text-center font-bold tracking-tight">
              Ma&apos;am Nica&apos;s EduCards
            </h1>
            <h2 className="md:text-xl text-muted-foreground text-center">
              Flashcards to Ace the Board Exam. You can do it, Fighting!
            </h2>
          </div>
          <Quotes />
        </section>
      </main>
      <Footer />
    </div>
  );
}
