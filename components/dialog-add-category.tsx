"use client";

import { api } from "@/convex/_generated/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "convex/react";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { toast } from "./ui/use-toast";

const schema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Must be at least 2 characters.",
    })
    .max(20, {
      message: "Should not exceed 20 characters.",
    }),
  description: z.string().max(50, { message: "Maximum of 50 characters." }),
});

const DailogAddCategory = () => {
  const createCategory = useMutation(api.categories.create);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    try {
      await createCategory({
        name: values.name,
        description: values.description,
      });
      toast({
        title: "Success ",
        description: "You have successfully added a new category.",
      });
    } catch (error) {
      toast({
        title: "Error ",
        description: "error",
      });
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xs sm:max-w-lg">
        <DialogHeader className="mb-2">
          <DialogTitle>Add Category</DialogTitle>
          <DialogDescription>Create new category for you to review.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="grid gap-2 sm:grid-cols-4 sm:gap-4 sm:items-center sm:space-y-0">
                    <FormLabel className="sm:text-right">Name</FormLabel>
                    <FormControl className="sm:col-span-3">
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="grid gap-2 sm:grid-cols-4 sm:gap-4 sm:items-center sm:space-y-0">
                    <FormLabel className="sm:text-right">Description</FormLabel>
                    <FormControl className="sm:col-span-3">
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="flex-row space-x-2 sm:grid sm:grid-cols-4">
              <DialogClose asChild className="flex-1 sm:col-start-3">
                <Button variant={"outline"}>Cancel</Button>
              </DialogClose>
              <Button type="submit" className="flex-1">
                Create
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DailogAddCategory;
