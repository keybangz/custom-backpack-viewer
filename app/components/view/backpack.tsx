import React from "react";
import Link from 'next/link'

const BackpackView = () => {
  return (
    <div className="">
      <div className="flex flex-col text-white items-center text-3xl font-mono">
        <p className="flex p-2">Pick a class: </p>
        <ul className="flex flex-grow flex-row">
          <li className="p-2">
            <Link href="/class/scout" className="bg-[#34302d] hover:bg-[#c1a18a] p-3 rounded-full">Scout</Link>
          </li>
          <li className="p-2">
            <Link href="/class/soldier" className="bg-[#34302d] hover:bg-[#c1a18a] p-3 rounded-full">Soldier</Link>
          </li>
          <li className="p-2">
            <Link href="/class/pyro" className="bg-[#34302d] hover:bg-[#c1a18a] p-3 rounded-full">Pyro</Link>
          </li>
          <li className="p-2">
            <Link href="/class/demoman" className="bg-[#34302d] hover:bg-[#c1a18a] p-3 rounded-full">Demoman</Link>
          </li>
          <li className="p-2">
            <Link href="/class/heavy" className="bg-[#34302d] hover:bg-[#c1a18a] p-3 rounded-full">Heavy</Link>
          </li>
          <li className="p-2">
            <Link href="/class/engineer" className="bg-[#34302d] hover:bg-[#c1a18a] p-3 rounded-full">Engineer</Link>
          </li>
          <li className="p-2">
            <Link href="/class/medic" className="bg-[#34302d] hover:bg-[#c1a18a] p-3 rounded-full">Medic</Link>
          </li>
          <li className="p-2">
            <Link href="/class/sniper" className="bg-[#34302d] hover:bg-[#c1a18a] p-3 rounded-full">Sniper</Link>
          </li>
          <li className="p-2">
            <Link href="/class/spy" className="bg-[#34302d] hover:bg-[#c1a18a] p-3 rounded-full">Spy</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BackpackView;
