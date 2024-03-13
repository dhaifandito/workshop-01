"use client";

import { Button } from "@/components/ui/button";
import { type ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type Props = ComponentProps<"button"> & {
  pendingText?: string;
};

export function SubmitButton({ children, pendingText, ...props }: Props) {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction;

  return (
    <div className="py-7">
    <Button>
    <button type="submit" {...props} aria-disabled={pending}>
      {isPending ? pendingText : children}
    </button>
    </Button>
    </div>
  );
}