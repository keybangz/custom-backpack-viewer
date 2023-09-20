"use client";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateWeaponForm = (wep: {
  wepId: string;
  weaponName: string;
  weaponClass: string;
}) => {
  const { register, handleSubmit } = useForm();
  const [counter, setCounter] = useState(0);

  const addWeapon = async (data: FieldValues) => {
    // const res = await fetch("/api/weapons", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
    // if (res.status !== 200) {
    //   toast("Adding weapon failed!");
    //   throw res;
    // }
    // toast("Weapon added!");
    // return res;
  };

  const handleClick = () => {
    if (counter < 10) setCounter(counter + 1);
  };

  return (
    <div className="p-5">
      <ToastContainer />
      <form onSubmit={handleSubmit(addWeapon)} className="">
        <div className="flex flex-col flex-grow">
          <input
            placeholder={"Weapon ID: " + wep.wepId}
            className="text-xl font-bold mb-2 text-center"
            disabled={true}
          />
          <input
            {...register("weaponName")}
            required={true}
            placeholder={"Weapon Name: " + wep.weaponName}
            className="text-xl font-bold mb-2 text-center"
            disabled={true}
          />
          <input
            {...register("weaponClass")}
            required={true}
            placeholder={"Weapon Classname: " + wep.weaponClass}
            type="text"
            className="text-xl font-bold mb-2 text-center text-black"
          />
          <div className="text-center text-xl font-bold mb-2">
            <p>Attribute Builder</p>
            {Array.from(Array(counter)).map((c, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row justify-around m-5 text-black"
                >
                  <input
                    {...register("attributeName" + counter)}
                    placeholder="Attribute Name"
                    className="flex text-center"
                    type="text"
                  ></input>
                  <input
                    {...register("attributeID" + counter)}
                    placeholder="Attribute ID"
                    className="flex text-center"
                    type="text"
                  ></input>
                </div>
              );
            })}
            <div
              className="bg-[#34302d] hover:bg-[#6b6a65] p-5"
              onClick={handleClick}
            >
              Add Attribute
            </div>
          </div>
          <input
            type="submit"
            className="pointer-events-auto text-white text-xl font-bold mb-2 bg-[#34302d] hover:bg-[#6b6a65] click:bg-[#34302d] p-2"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateWeaponForm;
