"use client";

import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { useLogin } from "@/lib/context/useLogin";
import Protect from "@/lib/hooks/Protected";

const HomePage = () => {
  const supabase = createClient();

  type userObject = { [key: string]: any };
  const [user, setUser] = React.useState<userObject>({});

  //get user via supabase
  React.useEffect(() => {
    const getUser = async () => {
      try {
        const {
          data: { user },
          error,
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

  return (
    
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="pb-24">
            {user.aud === "authenticated" ? 
            <p className="text-xl lg:text-4xl font-bold">Hi, {user?.user_metadata?.username} Welcome to</p> :
            
            <p className="text-xl lg:text-4xl font-bold">Welcome to</p>}
            <h1 className="text-6xl lg:text-8xl text-yellow-500 pb-4 pt-2">
              Partycipate.
            </h1>
            <p className="text-lg lg:text-xl font-bold">
              Let's{" "}
              <span className="text-yellow-500 font-bold">Partycipate.</span>in
              every party
            </p>
          </div>
          <div>
            <Button variant="warning" className="w-60 h-14 text-xl" asChild>
              <Link href={"/dashboard"}>Join Party!</Link>
            </Button>
          </div>
        </div>
  );
};

export default HomePage;
