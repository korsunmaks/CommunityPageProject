import { Post } from "../types";

export const initialPosts: Post[] = [
  {
    id: crypto.randomUUID(),
    title: "Welcome to the Community!",
    content: "This is the first post. Feel free to comment!",
    image:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    comments: [],
  },
];
