"use client";

import { ArrowUpDown } from "lucide-react";
import React from "react";

import { useRemoveEventMutation } from "../hooks/useRemoveMutation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const RemoveEvent = (props: any) => {
  const removeEventMutation = useRemoveEventMutation();

  const removingEvent = async (data: string) => {
    await removeEventMutation.mutateAsync(data, {
      onSuccess: () => {
        alert("Party Removed");
        window.location.reload();
      },
      onError: (error) => {
        // Handle error case as needed
        console.error("Error delete party:", error);
      },
    });
    // Additional success/error handling can be done here
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="erase">Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure to delete {props.eventName}?</DialogTitle>
          <DialogDescription>
            <div className="flex justify-center items-center py-5 flex-col text-lg">
              <p className="my-5">
                Yes, I'm sure to delete{" "}
                <span className="text-yellow-500 font-bold">
                  {props.eventName}
                </span>
              </p>
              <Button
                variant="destructive"
                onClick={() => removingEvent(props.eventName)}
              >
                Delete
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default RemoveEvent;
