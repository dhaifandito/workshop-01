import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { EventListProps } from "../utils/api-request";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";

import { CalendarIcon } from "@radix-ui/react-icons";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useAddEventMutation } from "../hooks/useAddMutationEvent";
import { format } from "date-fns";



const CreateEvent = () => {
  const addEventMutation = useAddEventMutation();

  const newId = Math.random().toString(36).substring(7);
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      id: "",
      name: "",
      host: "laugh factory",
      description: "",
      time: new Date(),
      place: "",
      filled_quota: 0,
      quota: 0,
      category: "",
      status: "soon",
    },
  });

  const onSubmit = async (data: EventListProps) => {
    await addEventMutation.mutateAsync(
      {
        ...data,
        quota: Number(data.quota),
        id: newId
      },
      {
        onSuccess: () => {
          // Reset form fields to initial state after successful mutation
          reset({
            id: "",
            name: "",
            host: "laugh factory",
            description: "",
            time: new Date(),
            place: "",
            filled_quota: 0,
            quota: 0,
            category: "",
            status: "soon",
          });
          alert("Party Created successfully");
        },
        onError: (error) => {
          // Handle error case as needed
          console.error("Error create party:", error);
        },
      }
    );
    // Additional success/error handling can be done here
  };

  return (
    <div>
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Select category" />
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
        <div>
          <Button variant="warning" type="submit">
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
