"use client";

import { Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import Loading from "./ui/loading";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchQuote = () => {
    setIsLoading(true);

    fetch("https://api.quotable.io/random?tags=motivational")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch(() => {
        setQuote("Error fetching motivational quotes");
        setAuthor("Fetch Error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="w-full md:max-w-screen-sm flex flex-col items-center space-y-4">
      <Button
        onClick={fetchQuote}
        disabled={isLoading}
        variant={"outline"}
        className="rounded-full gap-2 dark:bg-primary/5">
        <Quote className="size-4" />
        <span className="hidden md:inline">Get Motivated</span>
      </Button>
      <Card className="w-full text-center p-4 space-y-2 dark:bg-primary/5">
        <CardContent className="p-0">
          {isLoading ? <Loading /> : <p className="md:text-lg md:leading-8">&quot;{quote}&quot;</p>}
        </CardContent>
        <CardFooter className="flex justify-center p-0">
          <p className="text-sm text-muted-foreground">{isLoading ? "Abracadabra!" : author}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Quotes;
