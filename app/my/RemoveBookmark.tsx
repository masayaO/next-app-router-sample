"use client";

import { Button } from "@/app/_components/Button";
import { useTransition } from "react";
import { remove } from "@/app/my/action";

export const RemoveBookmark = ({ id }: { id: number }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <Button
      type="button"
      onClick={() => {
        startTransition(async () => {
          await remove(id);
        });
      }}
    >
      {isPending ? "Sending..." : "Delete"}
    </Button>
  );
};
