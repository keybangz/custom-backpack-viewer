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

# Preview

## Logged Out

![image](https://github.com/keybangz/custom-backpack-viewer/assets/23132897/5899db5e-eb42-4d00-a9c6-efae5148458d)

## Logged In

![image](https://github.com/keybangz/custom-backpack-viewer/assets/23132897/049993f5-de5a-4897-8f27-5b785dffa2d8)
