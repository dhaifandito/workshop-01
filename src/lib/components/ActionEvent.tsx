import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EventListProps } from "../utils/api-request";
import Link from "next/link";
import RemoveEvent from "./RemoveEvent";

const ActionEvent = ( props: any )  => {
    return ( 
    <div className="flex items-center justify-around mt-7">
          <RemoveEvent eventName={props.eventName}/>
          <div className="text-blue-500 hover:text-blue-800">
            <Button variant="warning">
              <Link
                href={{
                  pathname: `/edit/${props.eventId}`,
                  query: {
                    name: props.eventName,
                    host: props.eventHost,
                    description: props.eventDescription,
                    quota: props.eventQuota,
                    time: props.eventTime,
                    place: props.eventPlace,
                    category: props.eventCategory,
                    status: props.eventStatus
                  },
                }}
              >
                Edit
              </Link>
            </Button>
          </div>
    </div> );
}

export default ActionEvent;