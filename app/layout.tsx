import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import './globals.css'
import NavBar from '@/components/NavBar'

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Converso',
  description: 'Real-time AI Teaching Platform',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${bricolage.variable} antialiased`}
          suppressHydrationWarning
        >
          <header className="flex justify-between items-center p-4">
            <NavBar />
            <div className="flex gap-4">
              <SignedOut>
                  <SignInButton>
                    <button className='btn-signin'>SignIn</button>
                  </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
