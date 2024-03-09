"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";

import { Button } from "@/components/ui/button";
import { useAddEventMutation } from "@/lib/hooks/useAddMutationEvent";
import { createClient } from "@/lib/supabase/client";

import { columns } from "./column";
import { columnsMy } from "./column-my";
import { DataTable } from "./data-table";
import { DataTableMy } from "./data-table-my";

export default function EventPage() {
  const supabase = createClient();
  type userObject = { [key: string]: any };
  const [user, setUser] = React.useState<userObject>({});
  React.useEffect(() => {
    const getUser = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (error) throw error;
        if (user) {
          setUser(user);
        }
      } catch (error) {
        console.log("error: ", error);
      }
    };

    getUser();
  }, []);

  const addBookMutation = useAddEventMutation();

  const { isPending, error, data } = useQuery({
    queryKey: ["eventData"],
    queryFn: () =>
      fetch(
        "https://api.steinhq.com/v1/storages/65df42124a64236312092cf1/Event",
      ).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return `An error has occurred: ${error.message}`;
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="font-robotomono flex justify-center items-center m-10 flex-col col-span-4">
        <h1 className="my-16 text-5xl font-bold">
          let's <span className="text-yellow-500">PartyCipate.</span> in every
          party
        </h1>

        {user.aud === "authenticated" && (
          <div className="container mx-auto py-10">
            <h1 className="font-bold text-3xl text-yellow-500">
              {user?.user_metadata?.username}'s Party
            </h1>
            <DataTableMy columns={columnsMy} data={data} />
          </div>
        )}

        <div className="container mx-auto py-10">
          <h1 className="font-bold text-3xl text-yellow-500">All Party</h1>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
      <div className="border-l-2 border-solid border-gray-300 p-5 bg-gray-200">
        <div className="font-bold text-2xl text-yellow-500 pb-5">
          My Schedule
        </div>
        {data.map((event: any) => {
          if (event.host === "laugh factory") {
            return (
              <div className="w-full h-24 flex flex-col justify-center border-t-2 border-solid border-gray-800">
                <p className="font-bold text-lg">{event.name}</p>
                <p>{event.time}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
