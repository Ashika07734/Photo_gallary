# 📷 React Photo Gallery

A responsive photo gallery web application built using **React, Vite, and Tailwind CSS**.  
The app fetches images from the **Picsum Photos API**, displays them in a responsive grid, allows searching by author name, and lets users mark photos as favourites.

---

## 🚀 Features

- Fetches **30 photos from the Picsum API**
- Responsive image grid layout
- Real-time search filter by author
- Favourite photos using **useReducer**
- Favourites persist using **localStorage**
- Custom hook for API fetching
- Performance optimization with **useMemo** and **useCallback**

---

## 🛠 Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript (ES6)
- Picsum Photos API

---

## 📂 Project Structure
```
photo-gallery-react
│
├── src
│   ├── components
│   │   ├── Gallery.jsx
│   │   └── PhotoCard.jsx
│   │
│   ├── hooks
│   │   └── useFetchPhotos.js
│   │
│   ├── reducers
│   │   └── favouritesReducer.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```
---

## 👩‍💻 Author

Ashika  
Frontend Intern Assignment
