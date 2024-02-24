import React from "react";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  return <div className="font-robotomono flex justify-center items-center m-10 flex-col">
  <h1 className="text-3xl my-7">Event {params.slug}</h1>
  <p>By <Link href={`/user/${params.slug}`}>User {params.slug}</Link></p>
  </div>
}
