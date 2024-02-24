import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="font-robotomono justify-center flex-col flex">
      <h1 className="text-3xl my-7 text-center">Home Page</h1>
      <div className="flex justify-between px-56 items-center">
        <Link href="/event/1" className="border-2 border-black border-solid h-56 p-12">event 1</Link>
        <Link href="/event/2" className="border-2 border-black border-solid h-56 p-12">Event 2</Link>
        <Link href="/event/3" className="border-2 border-black border-solid h-56 p-12">Event 3</Link>
      </div>
    </div>
  );
}
