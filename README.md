# Community Page

This is a **React + TypeScript** project that allows users to create posts, comment on them, and reply to comments in a nested structure. The project is styled using **Tailwind CSS** and **Material-UI (MUI)** and uses **Zustand** for state management.

## Features

- 📝 **Post Creation** – Users can create new posts with images.
- 💬 **Commenting System** – Users can add comments to posts.
- 🔄 **Nested Replies** – Comments can be replied to, creating a threaded conversation.
- 🗑️ **Post & Comment Deletion** – Users can delete posts and comments.
- 📸 **Image Uploads** – Posts can include images.
- 🎨 **Responsive UI** – Designed with Tailwind CSS and Material-UI.
- 🗂 **State Management with Zustand** – All post and comment operations are handled through Zustand.

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
- **State Management:** Zustand
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
│   ├── store/              # Zustand store for state management
│   │   ├── postStore.ts     # Zustand store for posts and comments
│   ├── pages/              # Page components
│   ├── types/              # TypeScript types
│   ├── mocks/              # Mock data
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
- Check for the latest **Vite**, **React**, and **Zustand** versions.

---

## ✨ Contributors

- **Maks Korsun** ([@korsunmaks](https://github.com/korsunmaks))

Feel free to contribute! 🚀
