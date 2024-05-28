"use client";

import { Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

const Quotes = () => {
  const [quote, setQuote] = useState("Meow, prr...");
  const [author, setAuthor] = useState("ᓚᘏᗢ");

  const fetchQuote = () => {
    fetch("https://api.quotable.io/random?tags=motivational")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch(() => {
        setQuote("Error fetching motivational quotes");
        setAuthor("Fetch Error");
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="flex flex-col justify-center space-y-4">
      <div>
        <Button onClick={fetchQuote} variant={"secondary"} className="rounded-full gap-2">
          <Quote className="size-4" />
          <span className="hidden md:inline">Get Motivated</span>
        </Button>
      </div>
      <Card className="max-w-lg lg:max-w-screen-sm text-center shadow-md">
        <CardContent className="md:text-xl p-4">
          <p className="md:leading-8">&quot;{quote}&quot;</p>
        </CardContent>
        <CardFooter className="flex justify-center p-4 pt-0">
          <p className="md:text-lg text-muted-foreground italic">{author}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Quotes;
