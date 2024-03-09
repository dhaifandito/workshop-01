export type EventListPropsEdit = {
  id: string | null;
  name: string | null;
  host: string | null;
  description: string | null;
  time: any | null;
  place: string | null;
  filled_quota: number | null;
  quota: number | null;
  category: string | null;
  status: string | null;
};

export type EventListProps = {
  id: string;
  name: string;
  host: string;
  description: string;
  time: any;
  place: string;
  filled_quota: number;
  quota: number;
  category: string;
  status: string;
};

const getEventApi =
  "https://api.steinhq.com/v1/storages/65df42124a64236312092cf1/event";
  

export async function getEventList() {
  const res = await fetch(getEventApi);
  return (await res.json()) as EventListProps[];
}

export async function addEvent(
  newEvent: EventListProps,
): Promise<EventListProps> {
  const eventToAdd = { ...newEvent };

  const response = await fetch(getEventApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([eventToAdd]),
  });

  if (!response.ok) {
    throw new Error("Failed to create new event");
  }

  return response.json();
}

export async function removeEvent(names: string): Promise<void> {
  const nameEvent = names;
  const response = await fetch(`${getEventApi}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ condition: { name: nameEvent } }),
  });

  if (!response.ok) {
    throw new Error("Failed to delete event");
  }
}

export async function editEvent(
  newEvent: EventListPropsEdit,
): Promise<EventListPropsEdit> {
  const eventToEdit = { ...newEvent };

  const response = await fetch(getEventApi, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      condition: { name: eventToEdit.name },
      set: [eventToEdit],
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to edit event");
  }

  return response.json();
}
