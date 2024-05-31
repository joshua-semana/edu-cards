"use client";

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
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size={"lg"} className="w-full">
          I&apos;m ready!
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Categories</DrawerTitle>
          <DrawerDescription>Choose a subject below.</DrawerDescription>
        </DrawerHeader>
        <ScrollArea className="p-4 h-52">
          <div className="flex flex-col gap-2">
            <Button variant={"outline"} className="text-left py-8">
              <div className="flex flex-col w-full gap-1">
                <p>Category A</p>
                <p className="text-sm text-muted-foreground">Example texts</p>
              </div>
            </Button>
            <Button variant={"outline"} className="text-left py-8">
              <div className="flex flex-col w-full gap-1">
                <p>Category A</p>
                <p className="text-sm text-muted-foreground">Example texts</p>
              </div>
            </Button>
            <Button variant={"outline"} className="text-left py-8">
              <div className="flex flex-col w-full gap-1">
                <p>Category A</p>
                <p className="text-sm text-muted-foreground">Example texts</p>
              </div>
            </Button>
            <Button variant={"outline"} className="text-left py-8">
              <div className="flex flex-col w-full gap-1">
                <p>Category A</p>
                <p className="text-sm text-muted-foreground">Example texts</p>
              </div>
            </Button>
          </div>
        </ScrollArea>
        <DrawerFooter>
          <Button>Let&apos;s Go!</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerCategories;
