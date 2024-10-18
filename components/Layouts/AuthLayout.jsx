import { redirect } from "next/navigation"
import { cookies } from "next/headers"
//components
import NavBarUser from "../NavBar/NavBarUser"

function AuthLayout({ children }) {

  const token = cookies().get('token')
  /* if (!token) {
    redirect('/auth/login')
  } */

  return (
    <div className="h-screen w-full flex">
      <div className="flex flex-col w-full">
        <NavBarUser></NavBarUser>
        <main className="w-full flex-grow p-4">
          {children}
        </main>

      </div>
    </div>
  )
}

export default AuthLayout