import UsersTable from "@/components/users/users-table";
import SearchBar from "@/components/search-bar";
import CreateUserDialog from "@/components/users/create-dialog";

export default function Users({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  const searchQuery = searchParams?.query || "";
  const page = Number(searchParams?.page) || 1;

  return (
    <div className="p-4 lg:p-6 container max-w-screen-md mx-auto">
      <h1 className="text-center text-2xl">Users</h1>
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <SearchBar />
          <CreateUserDialog />
        </div>
        <div className="mt-2">
          <UsersTable searchQuery={searchQuery} page={page} />
        </div>
      </div>
    </div>
  );
}
