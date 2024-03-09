import { useMutation} from "@tanstack/react-query";

import { removeEvent } from "../utils/api-request";

export function useRemoveEventMutation() {
 

  return useMutation({
    mutationFn: removeEvent,
    onSuccess: () => {
      console.log("success");
    },
    onError: (error) => {
      console.error("Error create new event:", error);
    },
  });
}
