import React from "react";

import { createClient } from "../supabase/client";

export default function Try(): any {
  // const supabase = createClient();
  // type userObject = { [key: string]: any };
  // const [user, setUser] = React.useState<userObject>({});
  // React.useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       const {
  //         data: { user },
  //         error,
  //       } = await supabase.auth.getUser();
  //       if (error) throw error;
  //       if (user) {
  //         console.log("userData", user);

  //         setUser(user);
  //       }
  //     } catch (error) {
  //       console.log("error: ", error);
  //     }
  //   };

  //   getUser();
  // }, []);

  // return user;
}
