import SideNav from "@/components/layout/sidenav";
import Header from "@/components/layout/header";
import UserProvider from "@/context/user-context";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <SideNav />
        <div className="flex flex-col">
          <Header />
          <main>
            {children}
          </main>
        </div>
      </div>
    </UserProvider>
  );
}
