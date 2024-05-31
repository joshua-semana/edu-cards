import DrawerCategories from "@/components/drawer-categories";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Quotes from "@/components/quotes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BadgeHoverProfile from "./_components/badge-hover-profile";

export default function Home() {
  return (
    <div className="flex flex-col min-h-svh text-pretty">
      <Navbar />
      <main className="container flex-1 py-12 lg:py-32 space-y-8">
        <div className="space-y-2 md:space-y-4 flex flex-col items-center">
          <BadgeHoverProfile />
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-center">
            Ma&apos;am Nica&apos;s EduCards
          </h1>
          <p className="md:text-xl md:max-w-screen-md text-center text-muted-foreground">
            Customizable words with definition flashcards to help you ace the board exam. Believe in
            yourself! You can do it, Fighting!
          </p>
          <div className="pt-8 space-y-4">
            <Quotes />
            <Card className="p-2 w-full md:max-w-screen-sm dark:bg-primary/5 text-center">
              <CardHeader className="pb-2">
                <CardTitle>Are you ready?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-lg text-muted-foreground mb-3">
                  Randomly selected words will flash before you. Gain your personal best today!
                </p>
                <DrawerCategories />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
