'use client'

import { SignInButton, UserButton, useUser, SignedIn } from "@clerk/nextjs"
import Link from "next/link"
import { PackageIcon, TrolleyIcon } from "@sanity/icons"
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export function Header() {
  const { user } = useUser()

  const createClerkPasskey = async () => {
    try {
      const response = await user?.createPasskey()
      console.log(response)
    } catch (err) {
      console.error('Error:', JSON.stringify(err, null, 2))
    }
  }

  return (
    <header className="flex flex-col sm:flex-row items-center justify-between p-4 bg-background">
      <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors mb-4 sm:mb-0">
        E-commerce Sanity
      </Link>

      <form action="/search" className="w-full sm:w-auto sm:flex-1 sm:mx-4 mb-4 sm:mb-0">
        <input className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-opacity-50 border w-full max-w-4xl"
          type="search"
          placeholder="Buscar Productos....."
          name="query"
        />
      </form>

      <div className="flex items-center space-x-4">
        <Link href="/basket">
          <Button variant="outline" className="flex items-center space-x-2">
            <TrolleyIcon className="w-4 h-4" />
            <span>Mi Cesta</span>
          </Button>
        </Link>

        <ClerkLoading>
          <Button disabled variant="outline">Loading...</Button>
        </ClerkLoading>

        <ClerkLoaded>
          <SignedIn>
            <Link href="/orders">
              <Button variant="outline" className="flex items-center space-x-2">
                <PackageIcon className="w-4 h-4" />
                <span>Mi Orden</span>
              </Button>
            </Link>
          </SignedIn>

          {user ? (
            <div className="flex items-center space-x-2">
              <UserButton afterSignOutUrl="/" />
              <div className="hidden sm:block text-xs">
                <p className="text-muted-foreground">Bienvenido</p>
                <p className="font-bold">{user.fullName}</p>
              </div>
            </div>
          ) : (
            <SignInButton mode="modal">
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          )}

          {user && user.passkeys && user.passkeys.length === 0 && (
            <Button onClick={createClerkPasskey} variant="outline" className="animate-pulse">
              Create a passkey now
            </Button>
          )}
        </ClerkLoaded>
      </div>
    </header>
  )
}