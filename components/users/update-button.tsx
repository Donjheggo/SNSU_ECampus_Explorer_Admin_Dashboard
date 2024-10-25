import Link from "next/link";
import { PencilIcon } from "lucide-react";

export default function UpdateButton({ id }: { id: string | unknown }) {
  return (
    <Link
      href={`/users/${id}/update`}
      className="flex items-center text-base gap-2 w-full"
    >
      <PencilIcon width={18} /> Update
    </Link>
  );
}
