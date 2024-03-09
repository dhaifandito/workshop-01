import { redirect, useRouter } from "next/navigation";
import React from "react";

import { Toaster } from "@/components/ui/toaster";
import { createClient } from "@/lib/supabase/server";

import { SubmitButton } from "./button-submit";

const Register = () => {
  const signUp = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const username = formData.get("username") as string;
    const supabase = createClient();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
      },
    });
    if (error) {
      console.log("error");
    }
    redirect("/login");
  };

  return (
    <div className="flex justify-center items-center flex-col m-12">
      <Toaster />
      <form>
        <div>
          <p>email</p>
          <input name="email" required />
        </div>
        <div>
          <p>password</p>
          <input name="password" required />
        </div>
        <div>
          <p>username</p>
          <input name="username" required />
        </div>
        <SubmitButton formAction={signUp} pendingText="Signing up...">
          Submit
        </SubmitButton>
      </form>
    </div>
  );
};

export default Register;
