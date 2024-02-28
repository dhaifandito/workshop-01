import React from "react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  return <div className="font-robotomono flex justify-center items-center m-10 flex-col">
    <h1 className="text-3xl mb-7">Login</h1>
     <div className="grid w-full max-w-sm items-center gap-1.5 my-5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" className="bg-white"/>
    </div>
    <div className="grid w-full max-w-sm items-center gap-1.5 my-5">
      <Label htmlFor="password">Password</Label>
      <Input type="password" id="password" placeholder="Password" className="bg-white"/>
    </div>
    <div></div>
    <Button className="w-40 my-5" variant="warning">Login</Button>
    <p>Don't Have an Account yet?<span className="text-yellow-500">  <Link href="/register">Register Now!</Link></span></p>
  </div>;
}
