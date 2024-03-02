import { useMutation, useQueryClient } from '@tanstack/react-query';
import { EventListProps } from '../utils/api-request';
import { editEvent } from '../utils/api-request';

export function useEditEventMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editEvent,
    onSuccess: () => {
      console.log("success");
    },
    onError: (error) => {
      console.error('Error create new event:', error);
    },
  });
}