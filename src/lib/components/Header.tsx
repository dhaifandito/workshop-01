import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex justify-around items-center bg-slate-200 p-4">
      <Link href="/">Home</Link>
      <Link href="/user/1">User</Link>
      <Link href="/login">Login</Link>
    </div>
  );
}
