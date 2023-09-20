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

  const updateWeapon = async (data: FieldValues) => {
    const res = await fetch("/api/weapons/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status !== 200) {
      toast("Error updating weapon data!");
      throw res;
    }

    toast("Weapon updated!");
    return res;
  };

  const handleClick = () => {
    if (counter < 10) setCounter(counter + 1);
  };

  return (
    <div className="">
      <ToastContainer />
      <form onSubmit={handleSubmit(updateWeapon)} className="">
        <div className="text-black text-xl font-bold mb-2 mt-5 flex justify-around">
          <div className="flex flex-col text-center w-1/4">
            <p className="text-white text-2xl">Weapon ID:</p>
            <input
              {...register("weaponId")}
              value={wep.wepId}
              className="text-xl font-bold mb-2 text-center"
              type="text"
              readOnly={true}
            />
            <p className="text-white text-2xl">Weapon Name:</p>
            <input
              {...register("weaponName")}
              value={wep.weaponName}
              className="text-xl font-bold mb-2 text-center"
              type="text"
              readOnly={true}
            />
            <p className="text-white text-2xl">Weapon Class Name:</p>
            <input
              {...register("weaponClass")}
              required={true}
              placeholder={wep.weaponClass}
              type="text"
              className="text-xl font-bold mb-2 text-black text-center"
            />
            <input
              type="submit"
              className="text-white text-xl font-bold mb-2 bg-[#34302d] hover:bg-[#6b6a65] p-3"
            />
          </div>
          <div className="text-xl font-bold mb-2 w-1/4">
            <p className="text-white text-2xl text-center">
              Default Attribute Builder
            </p>
            <div className="flex flex-col mb-2">
              <input
                {...register("attributeId")}
                placeholder="Attribute ID"
                className="text-center mb-2"
                type="text"
              ></input>
              <input
                {...register("attributeValue")}
                placeholder="Attribute Value"
                className="text-center mb-2"
                type="text"
              ></input>
              <div
                className="bg-[#34302d] hover:bg-[#6b6a65] p-5 text-white text-center"
                onClick={handleClick}
              >
                <p>Add Attribute</p>
              </div>
            </div>
            {Array.from(Array(counter)).map((c, index) => {
              return (
                <div key={index} className="flex flex-col">
                  <input
                    {...register("attributeId" + index)}
                    placeholder={"attributeId" + index}
                    className="text-center mb-2"
                    type="text"
                  ></input>
                  <input
                    {...register("attributeValue" + index)}
                    placeholder={"attributeValue" + index}
                    className="text-center mb-2"
                    type="text"
                  ></input>
                </div>
              );
            })}
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateWeaponForm;
