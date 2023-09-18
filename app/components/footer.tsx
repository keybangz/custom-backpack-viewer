import React from "react";
import Link from "next/link";

const FooterMain = () => {
  return (
    <div className="">
      <footer className="fixed bottom-0 left-0 z-20 w-full p-4 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:border-gray-600 bg-[#34302d]">
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6 float-right">
              Github Page
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default FooterMain;
