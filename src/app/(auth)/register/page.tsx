import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Register() {
  return <div className="font-robotomono flex justify-center items-center m-10 flex-col">
  <h1 className="text-3xl my-7">Register</h1>
  <div className="grid w-full max-w-sm items-center gap-1.5 my-5">
    <Label htmlFor="name">Name</Label>
    <Input type="name" id="name" placeholder="Name" />
  </div>
  <div className="grid w-full max-w-sm items-center gap-1.5 my-5">
    <Label htmlFor="email">Email</Label>
    <Input type="email" id="email" placeholder="Email" />
  </div>
  <div className="grid w-full max-w-sm items-center gap-1.5 my-5">
    <Label htmlFor="password">Password</Label>
    <Input type="password" id="password" placeholder="Password" />
  </div>
  <div></div>
  <Button className="w-40 my-5">Register</Button>
  </div>;;
}
