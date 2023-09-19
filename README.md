# [TF2] Custom Backpack Viewer

- **This project is developed with the Bun Runtime**
- **This README is intended to document everything in the project including it's aim, implementation, important details and design visions.**

Source Layout:
- `/app` - Entire project structure.
- `/app/api/auth/[...nextauth]/route.tsx` - NextAuth Steam Provider initialization.
- `/app/components` - All components related to displaying the app, usually responsible for login view.
- `/app/components/view` - All other functional view components. (Admin, backpack, profiles)
- `/app/view.tsx` - Main component responsible for login view.
- `/app/users/page.tsx` - Demo fetching page

# Dependencies

- [next-auth](https://next-auth.js.org/)
- [next-auth-steam](https://github.com/Nekonyx/next-auth-steam)
- [steamidconvert](https://www.npmjs.com/package/steamidconvert)
- [Prisma](https://www.prisma.io/)

# Preview

## Logged Out

![image](https://github.com/keybangz/custom-backpack-viewer/assets/23132897/4832e5b5-c7c3-49c6-953b-5c466d6013f1)

## Logged In

![image](https://github.com/keybangz/custom-backpack-viewer/assets/23132897/f4c81b9c-a42b-4f9d-a788-aed9b592beac)

## Class Preview

![image](https://github.com/keybangz/custom-backpack-viewer/assets/23132897/5507ebce-5a37-48f7-9d69-d2073173f369)

