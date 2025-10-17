# [TF2] Custom Backpack Viewer

- **This project is developed with the Bun Runtime**
- **This README is intended to document everything in the project including it's aim, implementation, important details and design visions.**

Source Layout:
- `/src/app/` - Root project structure.
- `/app/api/auth/[...nextauth]/route.tsx` - NextAuth Steam Provider initialization.
- `/app/components` - All components related to displaying the app.
- `/app/components/client` - All client side components.
- `/app/users/page.tsx` - Demo fetching page

# Dependencies

## External
- [MariaDB/MySQL Database](https://mariadb.org/)

## Node Modules
- [next-auth](https://next-auth.js.org/)
- [next-auth-steam](https://github.com/Nekonyx/next-auth-steam)
- [steamidconvert](https://www.npmjs.com/package/steamidconvert)
- [Prisma](https://www.prisma.io/)

# Setup

## MariaDB (Required)
- Setup a MariaDB / MySQL server.
- Create a database with a name of your choice.
- Create a user & password with privileges to the new database.
- Fill the connection details laid out in your `.env` file. 

## Project
- *Install [bun-runtime](https://bun.sh/)*
- *Clone repository at your preferred directory*
- *Enter `bun install` in the top-level project directory.*
- *Copy `.env.example` to `.env` and fill as required.*
- *Enter `prisma generate` && `prisma migrate dev` to ensure prisma establishes a connection to the MySQL server & automatically inputs the schema from the project.*
- *Enter `bun run dev` to start the project & navigate to `https://localhost:3000` or the URL set in your `.env` file.*

# Preview

## Logged Out

![image](https://github.com/keybangz/custom-backpack-viewer/assets/23132897/9aef9887-40a9-41c9-8d51-82ad6f9d535d)

## Logged In

![image](https://github.com/keybangz/custom-backpack-viewer/assets/23132897/b26eb4c6-17a3-4361-8766-8cfb7c7567f1)

## Class Preview

![image](https://github.com/keybangz/custom-backpack-viewer/assets/23132897/7d2c6455-abc5-410e-b7d6-09e3580a037b)

## Gameserver Manager Preview

![image](https://github.com/keybangz/custom-backpack-viewer/assets/23132897/37049c91-95e8-4024-994f-84b40734575b)

## Custom Weapon Manager Preview

![image](https://github.com/keybangz/custom-backpack-viewer/assets/23132897/ec21d872-8267-4270-a511-ac97dac9d079)




