import { currentUser } from "@clerk/nextjs/server";

export async function Salve() {
  const user = await currentUser();

  return (
    <div>
      <h1 className="text-4xl">
        Salve <span className="font-bold text-green-500">{user?.fullName}</span>
      </h1>
    </div>
  );
}
