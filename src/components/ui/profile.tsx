import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

export async function Profile() {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}
