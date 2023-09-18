import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignIn, SignOut } from "../components/userState"; // Clients interact with these buttons, define them seperately as client rendered.

import { getServerSession } from "next-auth"; // Get auth token as represented on server.

const ViewPage = () => {
  return (
    <div>
      <ShowMainView />{" "}
      {/* Calls ShowMainView() main view function. I don't know why I like to do my views like this but it makes more sense to me?, probably a bad habit.*/}
    </div>
  );
};

export default ViewPage;

// ShowMainView() - responsible for displaying basic info and login or straight to web panel itself.
async function ShowMainView() {
  const session = await getServerSession();

  if (!session) {
    // If server does not recognize or have a session token from client, then show information / login view, probaly should move to different file or move session vertification to main page.tsx.
    return (
      <div className="bg-[#462d26] flex flex-col mt-5 pt-2 pl-2 pb-5 opacity-75 items-center">
        <UserInfo />{" "}
        {/*Display user information, if not logged in will display "User not logged in!"*/}
        <div className="flex flex-col items-center font-mono mr-20 ml-20">
          <h1 className="text-3xl text-white font-bold">
            What is custom backpack viewer?
          </h1>
          <p className="text-white text-xl pt-2">
            Custom backpack viewer is a web panel + plugin combo which allows
            for gameserver administrators easily manage the custom weapons they
            have on their server.
          </p>
          <p className="text-white text-xl pt-2">
            Custom backpack viewer also has the goal in mind to create a user
            experience which allows players to change their weapons and apply
            different stats through the use of item modifiers, as if they were
            doing it inside the game itself.
          </p>
          <p className="text-white  text-xl pt-2">
            Please keep in mind the project is developed by a single person as a
            hobby project, and if you wish to see the project improved, you can
            by contribute on Github
          </p>
        </div>
        <div className="flex flex-col items-center font-mono mt-20 mr-20 ml-20">
          <h1 className="text-3xl text-white font-bold">Login</h1>
          <p className="text-white text-xl pt-2">
            You can login below by using the Steam OpenID authentication system,
            this will allow the website to fetch & update any information we may
            have of the player already to ensure a player does not lose in-game
            items.
          </p>
          <UserManage />
        </div>
        <div className="flex flex-col items-center font-mono mt-10 mr-20 ml-20">
          <Link
            href="/users"
            className="text-3xl text-white font-bold bg-[#5b7a8c] p-2"
          >
            Users Page
          </Link>
        </div>
      </div>
    );
  }

  // Here we call the UserInfo() & UserManage() functions, responsible for displaying the profile name and image of the currently logged in user at the moment.
  // Also handles client side button state
  return (
    <div className="bg-[#462d26] flex flex-col mt-5 pt-2 pl-2 pb-5 opacity-75 items-center">
      <UserInfo />
      <UserManage />
    </div>
  );
}

async function UserInfo() {
  const session = await getServerSession();
  // User info, if not logged in
  if (!session) {
    return (
      <p className="text-white text-3xl p-5 font-mono font-bold">
        User not logged in!
      </p>
    );
  }

  const { user } = session;
  // If logged in, display name and profile image
  return (
    <div>
      <p className="text-white text-3xl p-5 font-mono font-bold">
        User logged in as: {user?.name}
      </p>
      {user?.image && (
        <Image
          className="w-full"
          src={user?.image}
          width="100"
          height="100"
          alt="Profile Picture"
        />
      )}
    </div>
  );
}

async function UserManage() {
  const session = await getServerSession();
  // Handle button client state if logged in or not
  if (!session) return <SignIn />;

  return <SignOut />;
}
