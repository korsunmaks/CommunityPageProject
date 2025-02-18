import { useState } from "react";
import { Post } from "../types";
import { initialPosts } from "../mocks/mockData";
import PostForm from "../components/post-form";
import PostList from "../components/post-list";
import Navbar from "../components/navbar";

const CommunityPage = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 mt-6 flex flex-col md:flex-row md:justify-between gap-6">
        <div className="md:w-1/3 w-full">
          <PostForm setPosts={setPosts} />
        </div>
        <div className="md:w-1/2 w-full">
          <PostList posts={posts} setPosts={setPosts} />
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
