"use client";

import { getRandomRange } from "@/utilities/random";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const Quotes = () => {
  const [skeletonCount, setSkeletonCount] = useState(2);
  const [skeletonWidths, setSkeletonWidths] = useState<number[]>([]);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("ᓚᘏᗢ");
  const [isLoading, setIsLoading] = useState(true);

  const fetchQuote = () => {
    setIsLoading(true);

    const count = getRandomRange(1, 5);
    setSkeletonCount(count);

    const temp = new Array();
    for (let i = 0; i <= count; i++) {
      temp.push(getRandomRange(180, 240));
    }
    setSkeletonWidths(temp);

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
    <div className="flex flex-col justify-center space-y-4">
      <div className="flex justify-center">
        <Button
          onClick={fetchQuote}
          disabled={isLoading}
          variant={"secondary"}
          className="rounded-full gap-2">
          <Quote className="size-4" />
          <span className="hidden md:inline">Get Motivated</span>
        </Button>
      </div>
      <Card className="max-w-lg lg:max-w-screen-sm text-center shadow-md">
        <CardContent className="md:text-xl p-4">
          {isLoading ? (
            <div className="space-y-2 flex flex-col items-center">
              {skeletonWidths.map((width, index) => (
                <Skeleton key={index} className="h-4" style={{ width: `${width}px` }} />
              ))}
            </div>
          ) : (
            <p className="md:leading-8">&quot;{quote}&quot;</p>
          )}
        </CardContent>
        <CardFooter className="flex justify-center p-4 pt-0">
          {isLoading ? (
            <p>ᓚᘏᗢ</p>
          ) : (
            <p className="md:text-lg text-muted-foreground italic">{author}</p>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Quotes;
