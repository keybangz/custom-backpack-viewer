import React from "react";
import Link from "next/link";
import Image from "next/image"
import ScoutSVG from "../assets/tf2-class-icons/leaderboard_class_scout.svg"
import SoldierSVG from "../assets/tf2-class-icons/leaderboard_class_soldier.svg"
import PyroSVG from "../assets/tf2-class-icons/leaderboard_class_pyro.svg"
import HeavySVG from "../assets/tf2-class-icons/leaderboard_class_heavy.svg"
import DemoSVG from "../assets/tf2-class-icons/leaderboard_class_demo.svg"
import EngieSVG from "../assets/tf2-class-icons/leaderboard_class_engineer.svg"
import MedicSVG from "../assets/tf2-class-icons/leaderboard_class_medic.svg"
import SniperSVG from "../assets/tf2-class-icons/leaderboard_class_sniper.svg"
import SpySVG from "../assets/tf2-class-icons/leaderboard_class_spy.svg"

const ClassSelector = () => {
  return (
    <div className="flex flex-col mt-10 text-white text-2xl first-letter font-mono items-center">
        <p className="p-2 text-center font-bold text-3xl">Pick a class: </p>
        <ul className="flex flex-row">
          <li className="p-2">
            <Link
              href="/class/scout"
              className="rounded-full"
            >
              <div className="flex flex-col items-center">
                <Image src={ScoutSVG} alt="Scout class image." className="bg-[#34302d] hover:bg-[#6b6a65] rounded-full p-2" />
                <p>Scout</p>
              </div>
            </Link>
          </li>
          <li className="p-2">
            <Link
              href="/class/soldier"
              className="rounded-full"
            >
              <div className="flex flex-col items-center">
                <Image src={SoldierSVG} alt="Soldier class image." className="bg-[#34302d] hover:bg-[#6b6a65] rounded-full p-2" />
                <p>Soldier</p>
              </div>

            </Link>
          </li>
          <li className="p-2">
            <Link
              href="/class/pyro"
              className="rounded-full"
            >
              <div className="flex flex-col items-center">
                <Image src={PyroSVG} alt="Pyro class image." className="bg-[#34302d] hover:bg-[#6b6a65] rounded-full p-2" />
                <p>Pyro</p>
              </div>
            </Link>
          </li>
          <li className="p-2">
            <Link
              href="/class/demoman"
              className="rounded-full"
            >
              <div className="flex flex-col items-center">
                <Image src={DemoSVG} alt="Demoman class image." className="bg-[#34302d] hover:bg-[#6b6a65] rounded-full p-2" />
                <p>Demoman</p>
              </div>
            </Link>
          </li>
          <li className="p-2">
            <Link
              href="/class/heavy"
              className="rounded-full"
            >
              <div className="flex flex-col items-center">
                <Image src={HeavySVG} alt="Heavy class image." className="bg-[#34302d] hover:bg-[#6b6a65] rounded-full p-2" />
                <p>Heavy</p>
              </div>
            </Link>
          </li>
          <li className="p-2">
            <Link
              href="/class/engineer"
              className="rounded-full"
            >
              <div className="flex flex-col items-center">
                <Image src={EngieSVG} alt="Engineer class image." className="bg-[#34302d] hover:bg-[#6b6a65] rounded-full p-2" />
                <p>Engineer</p>
              </div>
            </Link>
          </li>
          <li className="p-2">
            <Link
              href="/class/medic"
              className="rounded-full"
            >
              <div className="flex flex-col items-center">
                <Image src={MedicSVG} alt="Medic class image." className="bg-[#34302d] hover:bg-[#6b6a65] rounded-full p-2" />
                <p>Medic</p>
              </div>
            </Link>
          </li>
          <li className="p-2">
            <Link
              href="/class/sniper"
              className="rounded-full"
            >
              <div className="flex flex-col items-center">
                <Image src={SniperSVG} alt="Sniper class image." className="bg-[#34302d] hover:bg-[#6b6a65] rounded-full p-2" />
                <p>Sniper</p>
              </div>
            </Link>
          </li>
          <li className="p-2">
            <Link
              href="/class/spy"
              className="rounded-full"
            >
              <div className="flex flex-col items-center">
                <Image src={SpySVG} alt="Spy class image." className="bg-[#34302d] hover:bg-[#6b6a65] rounded-full p-2" />
                <p>Spy</p>
              </div>
            </Link>
          </li>
        </ul>
    </div>
  );
};

export default ClassSelector;
