"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signin } from "@/lib/actions/auth";
import { useState } from "react";
import { Loader } from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    setLoading(true);
    try {
      const { error, success } = await signin(formData);
      if (error) {
        toast.error(`Error: ${error}`);
      } else if (success) router.push("/");
    } catch (error) {
      if (error instanceof Error) toast.error(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSumbit}>
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Sign in</h1>
          <p className="text-balance text-muted-foreground">
            Enter your credentials to login to your account
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="sample@gmail.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input
              name="password"
              id="password"
              type="password"
              placeholder="*************"
              required
            />
          </div>
          <Button disabled={loading} type="submit" className="w-full">
            {loading ? <Loader className="animate-spin" /> : "Login"}
          </Button>
        </div>
      </div>
    </form>
  );
}
