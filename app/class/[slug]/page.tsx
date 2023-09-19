import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function ClassPage({ params }: { params: { slug: string } }) {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="text-white font-mono">
        <div className="flex text-3xl p-20 w-1/2">
          <div className="flex justify-evenly">
            <ul className="flex w-1/2 m-auto">
              <li className="p-2">
              <div className="w-60 p-10 text-3xl mt-10 hover:bg-[#6b6a65]">
                  Class: <DrawClass params={params}/>
                </div>
              </li>
              <li className="p-2">
                <div className="w-60 p-10 bg-[#34302d] text-3xl mt-10 hover:bg-[#6b6a65]">
                  Primary Slot
                </div>
              </li>
              <li className="p-2">
                <div className="w-60 p-10 bg-[#34302d] text-3xl mt-10 hover:bg-[#6b6a65]">
                  Secondary Slot
                </div>
              </li>
              <li className="p-2">
                <div className="w-60 p-10 bg-[#34302d] text-3xl mt-10 hover:bg-[#6b6a65]">
                  Melee Slot
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function DrawClass({ params }: { params: { slug: string } }) {
  var slug = params.slug;
  if (slug === "scout") {
    return <div>Scout</div>;
  } else if (slug === "soldier") {
    return <div>Soldier</div>;
  } else if (slug === "pyro") {
    return <div>Pyro</div>;
  } else if (slug === "demoman") {
    return <div>Demoman</div>;
  } else if (slug === "heavy") {
    return <div>Heavy</div>;
  } else if (slug === "engineer") {
    return <div>Engineer</div>;
  } else if (slug === "medic") {
    return <div>Medic</div>;
  } else if (slug === "sniper") {
    return <div>Sniper</div>;
  } else if (slug === "spy") {
    return <div>Spy</div>;
  }

  return <div>INVALID CLASS</div>;
}
