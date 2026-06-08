<div align="center">

# 🌌 Chatterbox - Real-Time Chat App

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=40&pause=1000&color=8A2BE2&center=true&vCenter=true&width=800&lines=Welcome+to+Chatterbox;Real-Time+MERN+Chat+Application;Built+with+Socket.io+and+Tailwind+CSS" alt="Typing SVG" />

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](#)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](#)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](#)
[![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](#)

### 🌍 **[Live Demo: https://chatterbox-frontend-nine.vercel.app](https://chatterbox-frontend-nine.vercel.app/)**

*A beautiful, lightning-fast, and responsive real-time messaging application with a gorgeous glassmorphic UI.*

</div>

<br />

---

## ✨ Crazy Features
- 🚀 **Real-Time Messaging**: Instant message delivery with zero delay using `Socket.io`.
- 🟢 **Live Online Status**: See who's currently online and ready to chat.
- 📸 **Image Uploads**: Native integration with `Cloudinary` for seamless image messaging (with a built-in automated base64 fallback so your messages *never* fail!).
- 🎨 **Stunning UI/UX**: Built with `Tailwind CSS`, featuring vibrant gradients, sleek glassmorphism, and smooth animations.
- 🔐 **Bulletproof Auth**: Secure JSON Web Token (JWT) authentication & authorization.
- 📱 **Fully Responsive**: Looks incredible on both desktop and mobile devices.

---

## 🛠️ Tech Stack

<details>
  <summary><b>Frontend (Client)</b></summary>
  <ul>
    <li>⚡ <b>Vite + React</b>: Extremely fast frontend tooling.</li>
    <li>🎨 <b>Tailwind CSS</b>: Utility-first CSS framework for rapid UI styling.</li>
    <li>🔗 <b>Axios</b>: Promise-based HTTP client for the browser.</li>
    <li>💬 <b>Socket.io-client</b>: Connecting the frontend to the real-time websocket server.</li>
    <li>🍞 <b>React-Hot-Toast</b>: Beautiful pop-up notifications.</li>
  </ul>
</details>

<details>
  <summary><b>Backend (Server)</b></summary>
  <ul>
    <li>🟢 <b>Node.js & Express</b>: Fast and minimalist web framework.</li>
    <li>🍃 <b>MongoDB & Mongoose</b>: NoSQL database and elegant object modeling.</li>
    <li>🔐 <b>JWT & BcryptJS</b>: Secure password hashing and authentication protocols.</li>
    <li>☁️ <b>Cloudinary</b>: Remote cloud storage for user profile pictures and message images.</li>
    <li>💬 <b>Socket.io</b>: Bi-directional event-based communication.</li>
  </ul>
</details>

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/chatterbox.git
cd chatterbox
```

### 2. Setup the Backend Server
Navigate to the server directory and install dependencies:
```bash
cd server
npm install
```
Create a `.env` file in the `server` folder with the following variables:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
PORT=5000
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```
Run the development server in watch mode:
```bash
npm run server
```

### 3. Setup the Frontend Client
Open a new terminal, navigate to the client directory, and install dependencies:
```bash
cd client
npm install
```
Create a `.env` file in the `client` folder:
```env
VITE_BACKEND_URL=http://localhost:5000
```
Start the Vite development server:
```bash
npm run dev
```

---

## 🌍 Deployment on Vercel

Both the frontend and backend can be deployed independently onto Vercel using the Vercel CLI.

1. **Deploying the Backend**: Navigate to `server/`, run `vercel --prod`, and add your `.env` variables to the Vercel dashboard.
2. **Deploying the Frontend**: Navigate to `client/`, run `vercel --prod`, and set `VITE_BACKEND_URL` to your newly deployed backend URL.

---

<div align="center">
  <img src="https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif" alt="Coding GIF" width="300" />
  
  ### Made with ❤️ and lots of coffee.
</div>
