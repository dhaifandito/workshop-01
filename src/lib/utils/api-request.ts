// @ts-ignore
import SteinStore from 'stein-js-client';

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
  'https://api.steinhq.com/v1/storages/65df42124a64236312092cf1/event';

export async function getEventList() {
  const res = await fetch(getEventApi);
  const event = (await res.json()) as EventListProps[];
  return event;
}

export async function addEvent(newEvent: EventListProps): Promise<EventListProps> {
  const eventToAdd = { ...newEvent }; 

  const response = await fetch(getEventApi, {
    method: 'POST', // Adjust based on Stein's requirements for adding new entries
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([eventToAdd]), // Adjust based on Stein's API expectations
  });

  if (!response.ok) {
    throw new Error('Failed to create new event');
  }

  return await response.json();
}

export async function removeEvent(names: string): Promise<void> {
  const nameEvent = names
  const response = await fetch(`${getEventApi}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({condition: {name: nameEvent}}), 
  });

  if (!response.ok) {
    throw new Error('Failed to delete event');
  }
}

export async function editEvent(newEvent: EventListPropsEdit): Promise<EventListPropsEdit> {
  const eventToEdit = { ...newEvent }; 

  
  const response = await fetch(getEventApi, {
    method: 'PUT', // Adjust based on Stein's requirements for adding new entries
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({condition: {name: eventToEdit.name}, set: [eventToEdit]}), // Adjust based on Stein's API expectations
  });

  if (!response.ok) {
    throw new Error('Failed to edit event');
  }

  return await response.json();
}

