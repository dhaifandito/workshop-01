"use client"

import React, { ReactNode } from 'react';
import { createClient } from '../supabase/client';

interface ProtectProps {
  children: ReactNode;
  // Tambahkan props yang diperlukan untuk wrapper di sini
}

const Protect: React.FC<ProtectProps> = ({ children }) => {
    const supabase = createClient();

    type userObject = { [key: string]: any };
    const [session, setSession] = React.useState<userObject>({});

    React.useEffect(() => {
        const getUser = async () => {
          try {
            const {
              data,
              error,
            } = await supabase.auth.getSession();
            if (error) throw error;
            if (data) {
              setSession(data);
            }
          } catch (error) {
            console.log("error: ", error);
          }
        };
    
        getUser();
      }, []);

      if(session?.session?.access_token){
      return (
        <div>
            {children}
        </div>
      )}else{
        return(
        <></>)
      }
};

export default Protect;
;
