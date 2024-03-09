import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addEvent } from "../utils/api-request";

export function useAddEventMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["eventData"] });
    },
    onError: (error) => {
      console.error("Error create new event:", error);
    },
  });
}
