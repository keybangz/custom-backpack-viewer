"use client";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateWeaponForm = () => {
  const { register, handleSubmit } = useForm();

  const addWeapon = async (data: FieldValues) => {
    const res = await fetch("/api/weapons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status !== 200) {
      toast("Adding weapon failed!");
      throw res;
    }

    toast("Weapon added!");
    return res;
  };

  return (
    <div className="">
      <ToastContainer />
      <p className="flex text-white text-2xl font-mono m-2">Create Weapon:</p>
      <form onSubmit={handleSubmit(addWeapon)}>
        <input
          {...register("weaponId")}
          required={true}
          placeholder="Weapon Identifier"
          className="block text-gray-700 text-xl font-bold mb-2 text-center"
        />
        <input
          {...register("weaponName")}
          required={true}
          placeholder="Weapon Name"
          className="block text-gray-700 text-xl font-bold mb-2 text-center"
        />
        <input
          {...register("weaponClass")}
          required={true}
          placeholder="Weapon Classname"
          type="text"
          className="block text-gray-700 text-xl font-bold mb-2 text-center"
        />
        <input
          type="submit"
          className="pointer-events-auto block text-white text-xl font-bold mb-2 w-full bg-[#34302d] hover:bg-[#6b6a65] click:bg-[#34302d] p-2"
        />
      </form>
    </div>
  );
};

export default CreateWeaponForm;
