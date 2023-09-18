import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavbarMain = () => {
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
          <ul className="flex flex-col pr-10 ">
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
