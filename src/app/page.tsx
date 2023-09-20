import Image from "next/image";
import Navbar from "./components/navbar";
import Profile from "./components/profile";

export default async function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Profile />
    </main>
  );
}
