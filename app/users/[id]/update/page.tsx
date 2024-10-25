import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { GetUserById } from "@/lib/actions/users";
import UpdateUserForm from "@/components/users/update-form";

export default async function UpdateEvent({
  params,
}: {
  params: { id: string };
}) {
  const user = await GetUserById(params.id);

  return (
    <div className="p-4 lg:p-6">
      <Link href="/users" className="flex gap-2 hover:underline">
        <ArrowLeft />
        Back
      </Link>
      <h1 className="text-center text-2xl">Update Role</h1>
      <div className="mt-5">
        <UpdateUserForm item={user} />
      </div>
    </div>
  );
}
