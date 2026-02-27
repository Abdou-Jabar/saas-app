import { SignUp } from '@clerk/nextjs'

const Page = () => {
  return (
    <main className="flex min-h-[calc(100vh-100px)] items-center justify-center p-6">
      <SignUp />
    </main>
  )
}

export default Page
