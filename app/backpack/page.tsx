import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

// To demonstrate what weapons the client has according to the database, for show pretty much at the moment.
// Later down the line if UI isn't too buggy, let's try add some cooler functionality to the backpack.

const BackpackPage = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="flex opacity-75">
        <div className="grid grid-cols-4 pt-5 w-screen h-screen text-center gap-4">
          <p className="p-5 bg-black text-white mr-2 hover:bg-slate-600">
            slot
          </p>
          <p className="p-5 bg-black text-white mr-2 hover:bg-slate-600">
            slot
          </p>
          <p className="p-5 bg-black text-white mr-2 hover:bg-slate-600">
            slot
          </p>
          <p className="p-5 bg-black text-white mr-2 hover:bg-slate-600">
            slot
          </p>
          <p className="p-5 bg-black text-white mr-2 hover:bg-slate-600">
            slot
          </p>
          <p className="p-5 bg-black text-white mr-2 hover:bg-slate-600">
            slot
          </p>
          <p className="p-5 bg-black text-white mr-2 hover:bg-slate-600">
            slot
          </p>
          <p className="p-5 bg-black text-white mr-2 hover:bg-slate-600">
            slot
          </p>
          <p className="p-5 bg-black text-white mr-2 hover:bg-slate-600">
            slot
          </p>
          <p className="p-5 bg-black text-white mr-2 hover:bg-slate-600">
            slot
          </p>
          <p className="p-5 bg-black text-white mr-2 hover:bg-slate-600">
            slot
          </p>
          <p className="p-5 bg-black text-white mr-2 hover:bg-slate-600">
            slot
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BackpackPage;
