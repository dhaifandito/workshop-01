"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { z } from "zod";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EventListProps } from "@/lib/utils/api-request";
import { useEditEventMutation } from "@/lib/hooks/useEditMutation";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  description: z.string(),
  time: z.date(),
  place: z.string(),
  quota: z.number(),
  category: z.string(),
});

export type EventListPropsEdit = {
  id: string | null;
  name: string | null;
  host: string | null;
  description: string | null;
  time: any | null;
  place: string | null;
  filled_quota: number | null;
  quota: number | null;
  category: string | null;
  status: string | null;
};

export default function Page({ params }: { params: { slug: string } }) {
  const editEventMutation = useEditEventMutation();

  const searchParams = useSearchParams();
  const eventName = searchParams.get("name");
  const eventHost = searchParams.get("host");
  const eventDescription = searchParams.get("description")
  const eventPlace = searchParams.get("place")
  const eventQuota = Number(searchParams.get("quota"))
  const eventCategory = searchParams.get("category")
  const eventTime = searchParams.get("time")
  const eventStatus = searchParams.get("status")
  
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      id: "",
      host: searchParams.get("host"),
      filled_quota: Number(searchParams.get("filled_quota")),
      status: `${eventStatus}`,
      name: `${eventName}`,
      description: `${eventDescription}`,
      place: `${eventPlace}`,
      quota:  eventQuota,
      category: `${eventCategory}`,
      time: new Date(`${eventTime}`)
    },
  })

  const onSubmit: SubmitHandler<EventListPropsEdit> = async (data) => {
    console.log(data)
    
 await editEventMutation.mutateAsync(
       data
         ,
         {
           onSuccess: () => {
                
             reset({
               id: "",
               host: searchParams.get("host"),
               filled_quota: Number(searchParams.get("filled_quota")),
               status: `${eventStatus}`,
               name: `${eventName}`,
               description: `${eventDescription}`,
               place: `${eventPlace}`,
               quota:  eventQuota,
               category: `${eventCategory}`,
               time: new Date(`${eventTime}`)
             });
             alert("Party Created successfully");
           },
           onError: (error) => {
                
             console.error("Error create party:", error);
           },
         }
       );
  }


  return (
    <div>
      <div className="font-robotomono flex justify-center items-center mt-10 flex-col">
        <h1 className="text-3xl my-3 font-bold text-yellow-500">{eventName}</h1>
        <p>By {eventHost}</p>
      </div>
      <div className="px-96 mt-12 pb-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <div className="my-6">
              <Label>Party Name</Label>
              <Input className="bg-white" {...field} />
            </div>
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <div className="my-6">
              <Label>Description</Label>
              <Input className="bg-white" {...field} />
            </div>
          )}
        />
        <Controller
          name="place"
          control={control}
          render={({ field }) => (
            <div className="my-6">
              <Label>Place</Label>
              <Input className="bg-white" {...field} />
            </div>
          )}
        />
        <Controller
          name="time"
          control={control}
          render={({ field }) => (
            <div className="my-6 flex flex-col">
              <Label>Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          )}
        />
        <Controller
          name="quota"
          control={control}
          render={({ field }) => (
            <div className="my-6">
              <Label>Quota</Label>
              <Input type="number" className="bg-white" {...field} />
            </div>
          )}
        />
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <div className="my-6">
              <Label>Category</Label>
              <Select onValueChange={field.onChange} defaultValue={field.value} >
                <SelectTrigger className="w-[280px] bg-white">
                  <SelectValue  placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="music">music</SelectItem>
                  <SelectItem value="comedy">comedy</SelectItem>
                  <SelectItem value="culinary">culinary</SelectItem>
                  <SelectItem value="sport">sport</SelectItem>
                  <SelectItem value="education">education</SelectItem>
                  <SelectItem value="other">other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        />
         <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <div className="my-6">
              <Label>Status</Label>
              <Select onValueChange={field.onChange} defaultValue={field.value} >
                <SelectTrigger className="w-[280px] bg-white">
                  <SelectValue  placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="soon">soon</SelectItem>
                  <SelectItem value="canceled">canceled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        />
        <div>
          <Button variant="warning" type="submit">
            Edit
          </Button>
        </div>
      </form>
      </div>
    </div>
  );
}
