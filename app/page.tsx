import DashboardCard from "@/components/dashboard/dashboard-card";
import { MapPinHouse, Users } from "lucide-react";
import { GetTotalLocations } from "@/lib/actions/locations";
import { GetTotalUsers } from "@/lib/actions/users";
import LocationsTable from "@/components/dashboard/locations-table";
import UsersTable from "@/components/dashboard/users-table";

export default async function Dashboard() {
  const [locations, users] = await Promise.all([
    GetTotalLocations(),
    GetTotalUsers(),
  ]);

  const cards = [
    {
      title: "Total Locations",
      number: locations,
      icon: <MapPinHouse size={25} className="text-primary" />,
    },
    {
      title: "Total Users",
      number: users,
      icon: <Users size={25} className="text-primary" />,
    },
  ];

  return (
    <div className="container mx-auto max-w-screen-2xl p-4 lg:p-6">
      <h1 className="text-center text-2xl">Dashboard</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 mt-4">
        {cards.map((item, index) => (
          <DashboardCard key={index} item={item} />
        ))}
      </div>
      <div className="flex flex-1 flex-col lg:flex-row gap-4 mt-4">
        <div className="w-full">
          <LocationsTable searchQuery="" page={1} />
        </div>
        <div className="w-full lg:w-[50%]">
          <UsersTable searchQuery="" page={1} />
        </div>
      </div>
    </div>
  );
}
