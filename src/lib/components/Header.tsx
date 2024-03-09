"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import { createClient } from "../supabase/client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

// import Try from "./Try";

export default function Header() {
  const supabase = createClient();

  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error);
    } else {
      setOpen(false);
      toast({
        description: "You are logged out",
      });
      router.push("/login");
    }
  };

  return (
    <div className="font-robotomono flex justify-between items-center bg-gray-800 shadow-md text-yellow-500 p-4">
      <div className="mx-10">
        <Link href="/">PartyCipate.</Link>
      </div>
       
        <div className="mx-10 flex justify-end items-center">
          <Link href="/user/Laugh%20Factory" className="px-5">
            User
          </Link>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="bg-gray-800 border-yellow-500 hover:text-gray-800 hover:bg-yellow-500"
              >
                Logout
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Logout</DialogTitle>
                <DialogDescription>
                  Are you sure you want to logout?
                </DialogDescription>
              </DialogHeader>
              <Button variant="destructive" onClick={handleSubmit}>
                Log out
              </Button>
            </DialogContent>
          </Dialog>

          <Toaster />
        </div>
     
        <div>
          <Link href="/login" className="px-5">
            Login
          </Link>

          <Toaster />
        </div>
      
    </div>
  );
}
