import React from 'react'
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div>
        <div className="bg-[#462d26] flex flex-col mt-5 pt-2 pl-2 pb-5 opacity-75 items-center">
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
            You can login with the Login with Steam button on the navigation bar using the Steam OpenID authentication system,
            this will allow the website to fetch & update any information we may
            have of the player already to ensure a player does not lose in-game
            items.
          </p>
        </div>
        {/* <div className="flex flex-col items-center font-mono mt-10 mr-20 ml-20">
          <Link
            href="/users"
            className="text-3xl text-white font-bold bg-[#5b7a8c] p-2"
          >
            Users Page
          </Link>
        </div> */}
      </div>
    </div>
  )
}

export default LoginPage


  