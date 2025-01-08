import type { Metadata } from "next";
import "../globals.css";
import { SanityLive } from "@/sanity/lib/live";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Header } from "@/components/Header";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="en">
        <body>
          <main>
            <Header>

            </Header>
          {children}
          </main>
          <SanityLive/>
        </body>
      </html>
    </ClerkProvider>
  );
}
