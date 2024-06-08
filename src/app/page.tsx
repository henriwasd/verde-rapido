import Link from "next/link";

import { getServerAuthSession } from "~/server/auth";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#013604] to-[#031400] text-white">
      <h1 className="text-4xl">
        Salve{" "}
        <span className="font-bold text-green-500">{session?.user.name}</span>
      </h1>
      <p className="mt-4 text-lg">
        {session ? (
          <Link href="/dashboard" legacyBehavior>
            Go to dashboard
          </Link>
        ) : (
          <Link href="/api/auth/signin">Log in</Link>
        )}
      </p>

      {session ? (
        <Link
          href="/api/auth/signout"
          className="mt-4 rounded-2xl bg-black p-2 px-4 transition-colors duration-500 hover:bg-red-500 hover:shadow-lg"
          type="button"
          aria-label="Log out"
        >
          Log out
        </Link>
      ) : null}
    </main>
  );
}
