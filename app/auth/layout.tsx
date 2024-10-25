import Image from "next/image";
import placeholder from "@/app/auth.png";
export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full lg:grid lg:grid-cols-2 min-h-screen">
      <div className="flex items-center justify-center py-12">{children}</div>
      <div className="hidden lg:block">
        <Image
          src={placeholder}
          alt="Image"
          width="1920"
          height="1080"
          className="h-screen w-full object-cover"
        />
      </div>
    </div>
  );
}
