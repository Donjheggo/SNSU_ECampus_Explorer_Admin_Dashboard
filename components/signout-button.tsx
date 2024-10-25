"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { signout } from "@/lib/actions/auth";
import { Loader } from "lucide-react";

export default function SignOutButton() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signout();
    } catch (error) {
      console.error("Signout error: ", error);
    }
  };

  return (
    <Button variant="secondary" onClick={handleSignOut} disabled={loading}>
      {loading ? <Loader className="animate-spin" /> : "Sign out"}
    </Button>
  );
}
