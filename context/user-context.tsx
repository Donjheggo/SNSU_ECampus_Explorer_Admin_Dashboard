'use client';

import { createContext, useContext, useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { Tables } from "@/database.types";

type UserT = Tables<'users'>

type UserContextT = {
  user: UserT | null;
  loading: boolean;
};

const UserContext = createContext<UserContextT>({ user: null, loading: true });

export const useUser = () => {
  return useContext(UserContext);
};

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const [user, setUser] = useState<UserT | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: userAuthData } = await supabase.auth.getUser();

      if (userAuthData) {
        const { data: userData, error } = await supabase
          .from("users")
          .select("*")
          .eq("id", userAuthData.user?.id)
          .single();

        if (error) {
          console.error("Error fetching user data: ", error);
        } else {
          setUser(userData);
        }
      }

      setLoading(false);
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
}
