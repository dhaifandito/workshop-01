import React from "react";

export default function Page({ params }: { params: { slug: string } }) {

  const username = decodeURIComponent(params.slug)
  
  return <div className="font-robotomono flex justify-center items-center m-10 flex-col">
  <h1 className="text-3xl my-7">Hi, {username}!</h1>
  </div>
}
