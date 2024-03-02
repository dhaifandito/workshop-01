"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import ActionEvent from "@/lib/components/ActionEvent";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type EventMy = {
  id: string;
  name: string;
  host: string;
  description: string;
  time: string;
  place: string;
  filled_quota: number;
  quota: number;
  category:
    | "music"
    | "comedy"
    | "education"
    | "theater"
    | "culinary"
    | "sport"
    | "other";
  status: "soon" | "ended" | "canceled";
};

export const columnsMy: ColumnDef<EventMy>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Party
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "host",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Host
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    accessorKey: "place",
    header: "Place",
  },
  {
    header: "Quota",
    cell: ({ row }) => {
      const filledQuota = row.original.filled_quota;
      const allQuota = row.original.quota;
      return (
        <div
          className={filledQuota >= allQuota ? "text-red-500" : "text-black"}
        >
          {filledQuota}/{allQuota}
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    header: "Status",
    cell: ({ row }) => {
      const statusCol = row.original.status;
      return (
        <div
          className={
            statusCol === "soon"
              ? "text-green-500"
              : statusCol === "canceled"
                ? "text-red-500"
                : "text-white"
          }
        >
          {statusCol}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const eventName = row.original.name;
      return (
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="warning">Action</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Choose your action for {eventName}?</DialogTitle>
                <DialogDescription>
                  <ActionEvent
                    eventId={row.original.id}
                    eventName={row.original.name}
                    eventHost={row.original.host}
                    eventDescription={row.original.description}
                    eventQuota={row.original.quota}
                    eventTime={row.original.time}
                    eventPlace={row.original.place}
                    eventCategory={row.original.category}
                    eventStatus={row.original.status}
                  />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
];
