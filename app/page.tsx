import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-pretty">
      <main className="flex-1">
        <section className="container py-12 lg:py-32 text-center space-y-2 md:space-y-4">
          <Badge className="text-sm md:text-lg">
            📢 Soon to be&nbsp;<strong>Nica L. Deladia, LPT</strong>
          </Badge>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Ma&apos;am Nica&apos;s EduCards
          </h1>
          <h2 className="md:text-2xl text-muted-foreground">
            Flashcards to Ace the Board Exam. You can do it, <strong>Fighting!</strong>
          </h2>
          <div className="flex justify-center pt-10">
            <Card className="max-w-lg lg:max-w-xl text-center">
              <CardContent className="md:text-xl p-4">
                <p className="md:leading-8 font-bold">
                  &quot;A good plan violently executed now is better than a perfect plan executed
                  next week.&quot;
                </p>
              </CardContent>
              <CardFooter className="flex justify-center p-4 pt-0">
                <p className="md:text-lg text-muted-foreground italic">George S. Patton</p>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
