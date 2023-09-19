import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SignIn, SignOut } from "./userState"; // Clients interact with these buttons, define them seperately as client rendered.
import { getServerSession } from "next-auth"; // Get auth token as represented on server.

async function NavbarMain() {
  const session = await getServerSession();

  return (
    <div>
      <nav className="bg-[#34302d] shadow-lg">
        <div className="w-screen flex flex-wrap items-center justify-between p-4">
          <Link href="/" className="flex items-center drop-shadow-2xl">
            <Image
              className="pr-5"
              src="/icon.png"
              width="80"
              height="80"
              alt="icon"
            ></Image>
            <h1 className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white drop-shadow-2xl">
              [TF2] Custom Backpack Viewer
            </h1>
          </Link>
          <ul className="flex flex-row pr-10 ">
            <li className="pr-5">
              <UserManage/>
            </li>
            <li>
              <Image
                className="drop-shadow-2xl"
                src="/github-mark-white.png"
                width="80"
                height="80"
                alt="Github Logo"
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarMain;

<SignIn /> 

async function UserManage() {
  const session = await getServerSession();
  // Handle button client state if logged in or not
  if (!session) return <SignIn />;

  return <SignOut />;
}
