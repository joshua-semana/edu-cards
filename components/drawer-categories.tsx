"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useState } from "react";
import DialogAddCategory from "./dialog-add-category";
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
  const categories = useQuery(api.categories.fetch);

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size={"lg"} className="w-full">
          I&apos;m ready!
        </Button>
      </DrawerTrigger>
      <DrawerContent className="mx-auto w-full max-w-lg">
        <DrawerHeader className="flex items-center justify-between">
          <div>
            <DrawerTitle>Categories</DrawerTitle>
            <DrawerDescription>Choose a subject below.</DrawerDescription>
          </div>
          <DialogAddCategory></DialogAddCategory>
        </DrawerHeader>
        <ScrollArea>
          <div className="flex flex-col gap-2 max-h-[26rem] px-4">
            {categories?.map((category, index) => {
              return (
                <Button
                  key={category._id}
                  variant={selectedCategory === index ? "secondary" : "outline"}
                  className="text-left py-8"
                  onClick={() => setSelectedCategory(index)}>
                  <div className="flex flex-col w-full gap-1">
                    <p>{category.name}</p>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </Button>
              );
            })}
          </div>
        </ScrollArea>
        <DrawerFooter className="flex-row">
          <DrawerClose asChild className="flex-1">
            <Button variant={"outline"} onClick={() => setSelectedCategory(null)}>
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
