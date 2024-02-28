import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="font-robotomono flex justify-between items-center bg-gray-800 shadow-md text-yellow-500 p-4">
      <div className="mx-10"><Link href="/">PartyCipate.</Link></div>
      <div className="mx-10">
      <Link href="/user/Laugh%20Factory" className="px-5">User</Link>
      <Link href="/login" className="px-5">Login</Link>
      </div>
    </div>
  );
}
