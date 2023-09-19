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

# Preview

## Logged Out

![image](https://github.com/keybangz/custom-backpack-viewer/assets/23132897/daf9218c-e243-49b0-af1e-b36543719fd7)

## Logged In

![image](https://github.com/keybangz/custom-backpack-viewer/assets/23132897/94673a4c-fa30-4a62-bcd2-a56d19624909)

