import { Minus, Plus } from "lucide-react";
import { useState } from "react";
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

interface Props {
  isDisabled?: boolean;
}

const DrawerCount: React.FC<Props> = ({ isDisabled }) => {
  const [itemCount, setItemCount] = useState<number>(10);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="flex-1" disabled={isDisabled}>
          Next
        </Button>
      </DrawerTrigger>
      <DrawerContent className="mx-auto w-full max-w-lg">
        <DrawerHeader>
          <DrawerTitle className="text-center">Item Count</DrawerTitle>
          <DrawerDescription className="text-center">
            Choose how many items you&apos;ll take.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex items-center justify-evenly p-4">
          <Button
            onClick={() => setItemCount(itemCount - 5)}
            variant={"outline"}
            size={"icon"}
            className="rounded-full"
            disabled={itemCount === 5}>
            <Minus size={16} />
          </Button>
          <div className="flex flex-col items-center">
            <h2 className="text-6xl font-extrabold">{itemCount}</h2>
            <p className="text-xs text-muted-foreground">
              ITEMS {itemCount === 50 ? "(MAX)" : itemCount === 5 ? "(MIN)" : ""}
            </p>
          </div>
          <Button
            onClick={() => setItemCount(itemCount + 5)}
            variant={"outline"}
            size={"icon"}
            className="rounded-full"
            disabled={itemCount === 50}>
            <Plus size={16} />
          </Button>
        </div>
        <DrawerFooter className="flex-row">
          <DrawerClose asChild className="flex-1">
            <Button variant="outline">Back</Button>
          </DrawerClose>
          <Button className="flex-1">Let&apos;s Go!</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerCount;
