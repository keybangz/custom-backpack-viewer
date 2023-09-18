import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  }); // nextjs get fresh data from backend every 10 seconds
  const users: User[] = await res.json();
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <div className="w-screen flex flex-col flex-wrap items-center justify-between mx-auto p-4 text-white font-mono text-2xl text-align-left">
          <h1>Users:</h1>
          <p>{new Date().toLocaleTimeString()}</p>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default UsersPage;
