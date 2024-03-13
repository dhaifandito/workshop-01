'use client'

import React from "react";
import { columns } from "./column";
import { DataTable } from "./data-table";
import { columnsMy} from "./column-my";
import { DataTableMy } from "./data-table-my";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useAddEventMutation } from "@/lib/hooks/useAddMutationEvent";

export default function EventPage() {
  const addBookMutation = useAddEventMutation();
 
  const { isPending, error, data  } = useQuery({
    queryKey: ['eventData'],
    queryFn: () =>
      fetch('https://api.steinhq.com/v1/storages/65df42124a64236312092cf1/Event').then((res) =>
        res.json(),
      ),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
 
  return (
    <div className="grid grid-cols-5 gap-4">
    <div className="font-robotomono flex justify-center items-center m-10 flex-col col-span-4">
      <h1 className="my-16 text-5xl font-bold">let's <span className="text-yellow-500">PartyCipate.</span> in every party</h1>

      <div className="container mx-auto py-10">
        <h1 className="font-bold text-3xl text-yellow-500">My Party</h1>
        <DataTableMy columns={columnsMy} data={data} />
      </div>

     <div className="container mx-auto py-10">
        <h1 className="font-bold text-3xl text-yellow-500">All Party</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
    <div className="border-l-2 border-solid border-gray-300 p-5 bg-gray-200">
        <div className="font-bold text-2xl text-yellow-500 pb-5">My Schedule</div>
          {data.map((event: any)=>{
            if(event.host === "laugh factory"){
              return (
            <div className="w-full h-24 flex flex-col justify-center border-t-2 border-solid border-gray-800">
            <p className="font-bold text-lg">{event.name}</p>
            <p>{event.time}</p>
          </div>
              )
            }
            
          })}
      </div>
    </div>
  );
}
