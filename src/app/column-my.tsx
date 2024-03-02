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
      const eventId = row.original.id;
      const eventName = row.original.name;
      const eventHost = row.original.host;
      const eventDescription = row.original.description;
      const eventQuota = row.original.quota;
      const eventTime = row.original.time;
      const eventPlace = row.original.place;
      const eventCategory = row.original.category;
      return (
        <div className="text-blue-500 hover:text-blue-800">
          <Button variant="warning">
            <Link
              href={{
                pathname: `/edit/${eventId}`,
                query: {
                  name: eventName,
                  host: eventHost,
                  description: eventDescription,
                  quota: eventQuota,
                  time: eventTime,
                  place: eventPlace,
                  category: eventCategory,
                },
              }}
            >
              Edit
            </Link>
          </Button>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const statusCol = row.original.status;
      const eventName = row.original.name;
      return (
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="erase">Delete</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure to delete {eventName}?</DialogTitle>
                <DialogDescription>
                  <div className="flex justify-center items-center py-5 flex-col text-lg">
                    <p className="my-5">Yes, I'm sure to delete <span className="text-yellow-500 font-bold">{eventName}</span></p>
                    <Button variant="destructive">Delete</Button>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
];
