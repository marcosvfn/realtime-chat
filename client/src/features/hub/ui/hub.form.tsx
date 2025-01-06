"use client";

import { Loader2 } from "lucide-react";

import { CreateRoomFormViewProps } from "@/features/hub";

import { Button } from "@/shared/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";

export default function CreateRoomForm({ form, isPending, onCreateRoom }: CreateRoomFormViewProps) {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onCreateRoom)}
        className="w-full font-sans flex gap-2"
        data-testid="register-form"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="Room name" {...field} className="w-full" />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isPending}>
          {isPending ? <Loader2 className="animate-spin" /> : "Create Room"}
        </Button>
      </form>
    </Form>
  );
}
