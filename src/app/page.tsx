import Link from "next/link";
import React from "react";
import { Event, columns } from "./column";
import { DataTable } from "./data-table";
import { EventMy, columnsMy} from "./column-my";
import { DataTableMy } from "./data-table-my";


async function getData(): Promise<Event[]> {
  // Fetch data from your API here.
  return [
    {
      id: "c58a1fb4",
      name: "Music Festival",
      host: "John Doe",
      description: "A musical experience for everyone",
      time: "02/28/2024",
      place: "Town Hall",
      filled_quota: 56,
      quota: 100,
      category: "music",
      status: "soon",
    },
    {
      id: "d12b3a45",
      name: "Comedy Night",
      host: "Jane Smith",
      description: "Laugh out loud with top comedians",
      time: "02/28/2024",
      place: "City Theater",
      filled_quota: 72,
      quota: 100,
      category: "comedy",
      status: "canceled",
    },
    {
      id: "e23c4d56",
      name: "Educational Workshop",
      host: "Educate Pro",
      description: "Learn new skills and knowledge",
      time: "02/29/2024",
      place: "Community Center",
      filled_quota: 40,
      quota: 100,
      category: "education",
      status: "soon",
    },
    {
      id: "f34e5f67",
      name: "Culinary Delights",
      host: "Foodie Paradise",
      description: "A feast for your taste buds",
      time: "03/01/2024",
      place: "Culinary Hall",
      filled_quota: 88,
      quota: 100,
      category: "culinary",
      status: "soon",
    },
    {
      id: "g45h6g78",
      name: "Sports Extravaganza",
      host: "Sports Nation",
      description: "Witness thrilling sports action",
      time: "03/02/2024",
      place: "Stadium Arena",
      filled_quota: 100,
      quota: 100,
      category: "sport",
      status: "soon",
    },
    {
      id: "h56i7h89",
      name: "Diverse Showcase",
      host: "Event Hub",
      description: "A mix of performances and activities",
      time: "03/03/2024",
      place: "Art Center",
      filled_quota: 30,
      quota: 100,
      category: "other",
      status: "soon",
    },
    {
      id: "i67j8i90",
      name: "Live Music Jam",
      host: "Sound Vibes",
      description: "Feel the rhythm with live music performances",
      time: "03/04/2024",
      place: "Club Lounge",
      filled_quota: 20,
      quota: 100,
      category: "music",
      status: "soon",
    },
    {
      id: "j78k9j01",
      name: "Stand-Up Comedy Show",
      host: "Comedy Central",
      description: "Hilarious stand-up acts for a night of laughter",
      time: "03/05/2024",
      place: "Laugh Arena",
      filled_quota: 45,
      quota: 100,
      category: "comedy",
      status: "soon",
    },
    {
      id: "k89l0k12",
      name: "Educational Symposium",
      host: "Knowledge Quest",
      description: "Explore the latest trends in various fields",
      time: "03/06/2024",
      place: "Conference Hall",
      filled_quota: 60,
      quota: 100,
      category: "education",
      status: "soon",
    },
    {
      id: "l90m1l23",
      name: "Gourmet Cooking Class",
      host: "Chef's Haven",
      description: "Master the art of gourmet cooking",
      time: "03/07/2024",
      place: "Culinary School",
      filled_quota: 75,
      quota: 100,
      category: "culinary",
      status: "soon",
    },
    {
      id: "m01n2m34",
      name: "Soccer Championship",
      host: "Kickoff Masters",
      description: "Intense soccer battles for the championship",
      time: "03/08/2024",
      place: "Soccer Stadium",
      filled_quota: 85,
      quota: 100,
      category: "sport",
      status: "soon",
    },
    {
      id: "n12o3n45",
      name: "Art and Culture Expo",
      host: "Cultural Society",
      description: "Experience a diverse showcase of art and culture",
      time: "03/09/2024",
      place: "Culture Center",
      filled_quota: 50,
      quota: 100,
      category: "other",
      status: "soon",
    },
    {
      id: "o23p4o56",
      name: "Acoustic Night",
      host: "Melody Masters",
      description: "An intimate evening with acoustic performances",
      time: "03/10/2024",
      place: "Cozy Lounge",
      filled_quota: 40,
      quota: 100,
      category: "music",
      status: "soon",
    },
    {
      id: "p34q5p67",
      name: "Happy Comedy Show",
      host: "Laugh Factory",
      description: "Spontaneous and hilarious improv acts",
      time: "03/11/2024",
      place: "Comedy Hub",
      filled_quota: 55,
      quota: 120,
      category: "comedy",
      status: "soon",
    },
    {
      id: "q45r6q78",
      name: "Science Symposium",
      host: "Tech Explorers",
      description: "Delve into the latest advancements in science",
      time: "03/12/2024",
      place: "Science Center",
      filled_quota: 70,
      quota: 100,
      category: "education",
      status: "soon",
    },
    {
      id: "r56s7r89",
      name: "Sushi Making Workshop",
      host: "Sushi Sensei",
      description: "Learn the art of making delicious sushi",
      time: "03/13/2024",
      place: "Culinary Studio",
      filled_quota: 80,
      quota: 100,
      category: "culinary",
      status: "soon",
    },
    {
      id: "s67t8s90",
      name: "Basketball Tournament",
      host: "Dunk Nation",
      description: "High-flying basketball action in the tournament",
      time: "03/14/2024",
      place: "Basketball Arena",
      filled_quota: 100,
      quota: 100,
      category: "sport",
      status: "soon",
    },
    {
      id: "t78u9t01",
      name: "Tech Innovation Expo",
      host: "Innovate Tech",
      description: "Explore the latest in technology and innovation",
      time: "03/15/2024",
      place: "Innovation Hall",
      filled_quota: 65,
      quota: 100,
      category: "other",
      status: "soon",
    },
    {
      id: "u89v0u12",
      name: "Jazz Night",
      host: "Smooth Jazz Society",
      description: "Experience the soulful sounds of jazz",
      time: "03/17/2024",
      place: "Jazz Lounge",
      filled_quota: 100,
      quota: 100,
      category: "music",
      status: "soon",
    },
    {
      id: "v90w1v23",
      name: "Magic Comedy Show",
      host: "Mystical Laughter",
      description: "Combining magic and comedy for an enchanting night",
      time: "03/17/2024",
      place: "Magic Theater",
      filled_quota: 48,
      quota: 100,
      category: "comedy",
      status: "soon",
    },
    {
      id: "w01x2w34",
      name: "History Lecture Series",
      host: "Historical Insights",
      description: "Journey through fascinating historical topics",
      time: "03/17/2024",
      place: "Historical Auditorium",
      filled_quota: 55,
      quota: 100,
      category: "education",
      status: "soon",
    },
    {
      id: "x12y3x45",
      name: "Italian Cooking Class",
      host: "Culinary Delights",
      description: "Learn the secrets of authentic Italian cuisine",
      time: "03/19/2024",
      place: "Italian Kitchen",
      filled_quota: 75,
      quota: 100,
      category: "culinary",
      status: "soon",
    },
    {
      id: "y23z4y56",
      name: "Table Tennis Championship",
      host: "Ping Pong Masters",
      description: "Fast-paced table tennis matches for the championship",
      time: "03/20/2024",
      place: "Table Tennis Arena",
      filled_quota: 82,
      quota: 100,
      category: "sport",
      status: "soon",
    },
    {
      id: "z34a5z67",
      name: "Artistic Expression Exhibition",
      host: "Creative Minds",
      description: "Showcasing diverse artistic expressions",
      time: "03/21/2024",
      place: "Art Gallery",
      filled_quota: 40,
      quota: 100,
      category: "other",
      status: "soon",
    },
    {
      id: "a45b6a78",
      name: "Reggae Night",
      host: "Island Vibes",
      description: "Groove to the reggae beats under the stars",
      time: "03/22/2024",
      place: "Reggae Beach",
      filled_quota: 50,
      quota: 100,
      category: "music",
      status: "soon",
    },
    {
      id: "b56c7b89",
      name: "Immersive Comedy Experience",
      host: "Laugh Factory",
      description: "A comedic journey through immersive experiences",
      time: "03/23/2024",
      place: "Immersive Theater",
      filled_quota: 65,
      quota: 100,
      category: "comedy",
      status: "soon",
    },
  ];
}

export default async function EventPage() {
  const data = await getData();

  return (
    <div className="grid grid-cols-5 gap-4">
    <div className="font-robotomono flex justify-center items-center m-10 flex-col col-span-4">
      <h1 className="my-16 text-5xl font-bold">let's <span className="text-yellow-500">PartyCipate.</span> in every party</h1>

      <div className="container mx-auto py-10">
        <h1 className="font-bold text-3xl text-yellow-500">My Party</h1>
        <DataTableMy columns={columnsMy} data={data} />
      </div>

     <div className="container mx-auto py-10">
        <h1 className="font-bold text-3xl text-yellow-500">All Party</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
    <div className="border-l-2 border-solid border-gray-300 p-5 bg-gray-200">
        <div className="font-bold text-2xl text-yellow-500 pb-5">My Schedule</div>
          {data.map((event)=>{
            if(event.host === "Laugh Factory"){
              return (
            <div className="w-full h-24 flex flex-col justify-center border-t-2 border-solid border-gray-800">
            <p className="font-bold text-lg">{event.name}</p>
            <p>{event.time}</p>
          </div>
              )
            }
            
          })}
      </div>
    </div>
  );
}
