import React from "react";

const BackpackView = () => {
  return (
    <div className="">
      <div className="flex flex-col text-white items-center text-3xl font-mono">
        <p className="flex p-2">Pick a class: </p>
        <ul className="flex flex-grow flex-row">
          <li className="p-2">
            <button className="bg-[#34302d] hover:bg-[#c1a18a] p-3 rounded-full">Scout</button>
          </li>
          <li className="p-2">
            <button className="bg-[#34302d] hover:bg-[#c1a18a] p-3 rounded-full">Soldier</button>
          </li>
          <li className="p-2">
            <button className="bg-[#34302d] hover:bg-[#c1a18a] p-3 rounded-full">Pyro</button>
          </li>
          <li className="p-2">
            <button className="bg-[#34302d] hover:bg-[#c1a18a] p-3 rounded-full">Demoman</button>
          </li>
          <li className="p-2">
            <button className="bg-[#34302d] hover:bg-[#c1a18a] p-3 rounded-full">Heavy</button>
          </li>
          <li className="p-2">
            <button className="bg-[#34302d] hover:bg-[#c1a18a] p-3 rounded-full">Engineer</button>
          </li>
          <li className="p-2">
            <button className="bg-[#34302d] hover:bg-[#c1a18a] p-3 rounded-full">Medic</button>
          </li>
          <li className="p-2">
            <button className="bg-[#34302d] hover:bg-[#c1a18a] p-3 rounded-full">Sniper</button>
          </li>
          <li className="p-2">
            <button className="bg-[#34302d] hover:bg-[#c1a18a] p-3 rounded-full">Spy</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BackpackView;
