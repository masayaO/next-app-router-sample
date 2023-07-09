"use client";

import { Button } from "@/app/_components/Button";
import { Dialog, DialogButtonWrapper } from "@/app/_components/Dialog";
import { ExternalLink } from "@/app/_components/ExternalLink";
import { useRef } from "react";
import { CommentInput } from "@/app/_components/CommentInput";
import { SubmitButton } from "@/app/_components/SubmitButton";
import { add } from "@/app/action";

export const AddBookMark = ({ title, url }: { title: string; url: string }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <Button onClick={() => dialogRef.current?.show()}>Save</Button>
      <Dialog title="Save to bookmark" ref={dialogRef}>
        <ExternalLink href={url}>{title}</ExternalLink>
        <form action={add}>
          <CommentInput type="text" name="comment" label="Comment" autoFocus />
          <input type="hidden" name="title" value={title} />
          <input type="hidden" name="url" value={url} />
          <DialogButtonWrapper>
            <SubmitButton label="Save" pendingLabel="Sending..." />
          </DialogButtonWrapper>
        </form>
      </Dialog>
    </>
  );
};
