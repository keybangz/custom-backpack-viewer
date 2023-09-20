import React from "react";

/*Display user information, if not logged in will display "User not logged in!"*/
const LoginPage = () => {
  return (
    <div>
      <div className="bg-black flex flex-col mt-2 pt-5 opacity-75 h-screen p-5 font-mono text-white">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">
            What is custom backpack viewer?
          </h1>
          <p className="text-xl pt-2">
            Custom backpack viewer is a web panel + plugin combo which allows
            for gameserver administrators easily manage the custom weapons they
            have on their server.
          </p>
          <p className="text-xl pt-2">
            Custom backpack viewer also has the goal in mind to create a user
            experience which allows players to change their weapons and apply
            different stats through the use of item modifiers, as if they were
            doing it inside the game itself.
          </p>
          <p className="text-xl pt-2">
            Please keep in mind the project is developed by a single person as a
            hobby project, and if you wish to see the project improved, you can
            by contribute on Github
          </p>
          <h1 className="text-3xl font-bold pt-2">Login</h1>
          <p className="text-xl pt-2">
            You can login with the Login with Steam button on the navigation bar
            using the Steam OpenID authentication system, this will allow the
            website to fetch & update any information we may have of the player
            already to ensure a player does not lose in-game items.
          </p>
          <div className="flex flex-col font-mono">
            <h1 className="text-3xl font-bold pt-2">Changelog:</h1>
            <p className="text-xl pt-2 italic">VERSION 1.0.0 - (20/09/23)</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
