import { useMutation } from "@tanstack/react-query";

import { editEvent } from "../utils/api-request";

export function useEditEventMutation() {

  return useMutation({
    mutationFn: editEvent,
    onSuccess: () => {
      console.log("success");
    },
    onError: (error) => {
      console.error("Error create new event:", error);
    },
  });
}
