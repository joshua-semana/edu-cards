"use client";

import { useState } from "react";
import DrawerCount from "./drawer-count";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { ScrollArea } from "./ui/scroll-area";

const DrawerCategories = () => {
  const Categories = [
    { name: "Subject A", description: "Easy" },
    { name: "Subject B", description: "Medium" },
    { name: "Subject C", description: "Hard" },
  ];

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size={"lg"} className="w-full">
          I&apos;m ready!
        </Button>
      </DrawerTrigger>
      <DrawerContent className="mx-auto w-full max-w-lg">
        <DrawerHeader>
          <DrawerTitle className="text-center">Categories</DrawerTitle>
          <DrawerDescription className="text-center">Choose a subject below.</DrawerDescription>
        </DrawerHeader>
        <ScrollArea>
          <div className="flex flex-col gap-2 max-h-[26rem] px-4">
            {Categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === index ? "secondary" : "outline"}
                className="text-left py-8"
                onClick={() => setSelectedCategory(index)}>
                <div className="flex flex-col w-full gap-1">
                  <p>{category.name}</p>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </Button>
            ))}
          </div>
        </ScrollArea>
        <DrawerFooter className="flex-row">
          <DrawerClose asChild className="flex-1">
            <Button variant="outline" onClick={() => setSelectedCategory(null)}>
              Cancel
            </Button>
          </DrawerClose>
          <DrawerCount isDisabled={selectedCategory === null} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerCategories;
