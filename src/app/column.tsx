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
export type Event = {
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

export const columns: ColumnDef<Event>[] = [
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
      )
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
      )
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
        <div className={filledQuota >= allQuota ? "text-red-500" : "text-black"}>
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
      const statusCol = row.original.status;
      const eventName = row.original.name;
      const eventDescription = row.original.description;
      const eventTime = row.original.time;
      const eventPlace = row.original.place;

      if(row.original.host === 'Laugh Factory'){
        return (
          <Button variant="ghost" className="text-green-500"> 
            Host
          </Button>
        )
      } else
      if(row.original.filled_quota >= row.original.quota || row.original.status !== 'soon'){
        return (
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button disabled>
                Join
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>
        );
      }else{
        return (
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="warning">
                Join
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Let's party on {eventName}?</DialogTitle>
                  <DialogDescription>
                    <div className="flex flex-col justify-center py-5">
                      <div className="mb-12">
                      <h1 className="font-bold text-2xl text-yellow-500">{eventName}</h1>
                      <p className="font-bold text-xl">{eventDescription}</p>
                      <div className="flex justify-between">
                        <p>{eventPlace}</p>
                        <p>{eventTime}</p>
                      </div>
                      </div>
                      <Button variant="warning">Join</Button>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        );}
    },
  }
];
