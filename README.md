# Community Page

This is a **React + TypeScript** project that allows users to create posts, comment on them, and reply to comments in a nested structure. The project is styled using **Tailwind CSS** and **Material-UI (MUI)**.

## Features

- 📝 **Post Creation** – Users can create new posts with images.
- 💬 **Commenting System** – Users can add comments to posts.
- 🔄 **Nested Replies** – Comments can be replied to, creating a threaded conversation.
- 🗑️ **Post & Comment Deletion** – Users can delete posts and comments.
- 📸 **Image Uploads** – Posts can include images.
- 🎨 **Responsive UI** – Designed with Tailwind CSS and Material-UI.

---

## 🚀 Getting Started

### 1️⃣ **Clone the Repository**

```sh
git clone https://github.com/korsunmaks/CommunityPageProject
```

### 2️⃣ **Install Dependencies**

```sh
npm install
```

### 3️⃣ **Run the Development Server**

```sh
npm run dev
```

Then, open **[http://localhost:5173](http://localhost:5173)** in your browser.

---

## 🛠️ Tech Stack

- **Frontend:** React + TypeScript
- **Styling:** Tailwind CSS + Material-UI
- **State Management:** React Hooks (useState, useEffect)
- **Validation:** Zod + React Hook Form

---

## 🏗️ Project Structure

```
community-page/
│── src/
│   ├── components/          # Reusable React components
│   │   ├── post-list.tsx    # Displays list of posts
│   │   ├── navbar.tsx       # Navbar for main page
│   │   ├── post-form.tsx    # Form for creating posts
│   │   ├── post-item.tsx    # Single post component
│   │   ├── comment-list.tsx # Displays list of comments
│   │   ├── comment-item.tsx # Single comment component
│   ├── pages/              # Page components
│   ├── types/              # TypeScript types
│   ├── mocks/              # Mock data (if applicable)
│── public/                 # Static assets
│── package.json            # Project metadata & scripts
│── vite.config.ts          # Vite configuration
│── tailwind.config.js      # Tailwind configuration
```

---

## 🏁 Building for Production

To create an optimized production build, run:

```sh
npm run build
```

Then, serve the build using:

```sh
npm run preview
```

---

## ❓ Troubleshooting

- Ensure **Node.js** and **npm** are installed.
- If dependencies fail, try running:
  ```sh
  rm -rf node_modules package-lock.json && npm install
  ```
- Check for the latest **Vite** and **React** versions.

---

## ✨ Contributors

- **Maks Korsun** ([@korsunmaks](https://github.com/korsunmaks))

Feel free to contribute! 🚀
