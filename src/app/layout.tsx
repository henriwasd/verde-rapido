import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "@/trpc/react";

import { ClerkProvider } from "@clerk/nextjs";
import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { Profile } from "@/components/ui/profile";

export const metadata = {
  title: "Verde Rápido",
  description: "Delivery do Verde",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="pt" className={`${GeistSans.variable}`}>
        <body className="bg-gradient-to-b from-[#013604] to-[#031400] ">
          <Menubar className="justify-end border-transparent bg-transparent text-white">
            <MenubarMenu>
              <Profile />
            </MenubarMenu>
          </Menubar>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
