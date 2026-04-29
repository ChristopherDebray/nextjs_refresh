import { redirect } from 'next/navigation'
import { NavBar } from '../__components/NavBar'
import { getAccessToken } from '../__lib/auth/session'

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const token = await getAccessToken()
  if (!token) redirect('/login')

  return (
    <>
      <NavBar />
      {children}
    </>
  )
}