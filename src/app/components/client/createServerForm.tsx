"use client";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateServerForm = () => {
  const { register, handleSubmit } = useForm();

  const addServer = async (data: FieldValues) => {
    const res = await fetch("/api/servers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status !== 200) {
      toast("Adding server failed!");
      throw res;
    }

    toast("Server added!");
    return res;
  };

  return (
    <div className="">
      <ToastContainer />
      <form onSubmit={handleSubmit(addServer)}>
        <input
          {...register("serverIdentifier", { required: true, maxLength: 20 })}
          placeholder="Server Identifier"
          className="block text-gray-700 text-2xl font-bold mb-2 text-center"
        />
        <input
          {...register("serverName", { required: true, maxLength: 20 })}
          placeholder="Server Name"
          className="block text-gray-700 text-2xl font-bold mb-2 text-center"
        />
        <input
          {...register("serverIP", { required: true, maxLength: 20 })}
          placeholder="Server IP"
          type="text"
          className="block text-gray-700 text-2xl font-bold mb-2 text-center"
        />
        <input
          type="submit"
          className="block text-white text-2xl font-bold mb-2 w-full bg-[#34302d] hover:bg-[#6b6a65] p-2"
        />
      </form>
    </div>
  );
};

export default CreateServerForm;
