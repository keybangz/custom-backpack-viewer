'use client'

import { signIn, signOut } from 'next-auth/react'

export function SignIn() {
  return <button className="bg-[#395c78] p-2 mt-5 text-white" onClick={() => signIn()}>Login with Steam</button>
}

export function SignOut() {
  return <button className="bg-[#395c78] p-2 mt-5 text-white" onClick={() => signOut()}>Sign Out</button>
}