# [TF2] Custom Backpack Viewer

**This README is intended to document everything in the project including it's aim, implementation, important details and design visions.**

Source Layout:
- `/app` - Entire project structure.
- `/app/api/auth/[...nextauth]/route.tsx` - NextAuth Steam Provider initialization.
- `/app/components` - All components related to displaying the app, usually responsible for login view.
- `/app/components/view` - All other functional view components. (Admin, backpack, profiles)
- `/app/view.tsx` - Main component responsible for login view.
- `/app/users/page.tsx` - Demo fetching page
