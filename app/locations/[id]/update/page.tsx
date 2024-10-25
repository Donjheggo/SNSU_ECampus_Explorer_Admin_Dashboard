import Link from "next/link";
import UpdateLocationForm from "@/components/locations/update-form";
import { ArrowLeft } from "lucide-react";
import { GetLocationById } from "@/lib/actions/locations";

export default async function UpdateProduct({
  params,
}: {
  params: { id: string };
}) {
  const item = await GetLocationById(params.id);

  return (
    <div className="p-4 lg:p-6">
      <Link href="../" className="flex gap-2 hover:underline">
        <ArrowLeft />
        Back
      </Link>
      <h1 className="text-center text-2xl">Update</h1>
      <div className="mt-5">
        <UpdateLocationForm item={item} />
      </div>
    </div>
  );
}
