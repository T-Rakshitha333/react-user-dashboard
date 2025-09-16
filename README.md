# react-user-dashboard
A responsive User Dashboard built with React.js as part of an intern assignment.
The app fetches user data from an API, displays it in a searchable card layout, allows client-side user creation, and shows detailed user info with routing.
Features

# Dashboard Page:
Fetch and display list of users from API (https://jsonplaceholder.typicode.com/users)
Show Name, Email, Phone, and Company in card layout
Search/filter users by name
Add new users (client-side only, no backend)

# User Details Page:
Clicking a user card shows full details
Includes address and geo-location

# Responsive Design:
Works on mobile, tablet, and desktop
Implemented with Flexbox/Grid and/or Tailwind CSS

# Global State Management:
Users are stored with React Context API / Redux

# Tech Stack
React.js (Functional Components + Hooks)
React Router DOM
Axios (for API calls)
React Context API / Redux
Tailwind CSS
# Project Structure
react-user-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── UserCard.js
│   │   ├── UserForm.js
│   │   └── SearchBar.js
│   ├── context/
│   │   └── UserContext.js
│   ├── pages/
│   │   ├── Dashboard.js
│   │   └── UserDetails.js
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json

# Dashboard - Desktop View (https://drive.google.com/file/d/13752UXA1ZnL60rTRlI9agoyq6wkOBgIj/view?usp=sharing)
# User Details - Desktop View (https://drive.google.com/file/d/1dpSKvC2PnW6JXU2juZ4Ny9RYI3aQh7z0/view?usp=sharing)
# Dashboard - Mobile View (https://drive.google.com/file/d/1QwZVmGC1O0V3Pt6kg-k8d0A7I3y1JphO/view?usp=sharing)
