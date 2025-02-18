import { Typography } from "@mui/material";
import PostItem from "./post-item";
import usePostStore from "../store/postStore";

const PostList = () => {
  const { posts } = usePostStore();
  if (posts.length === 0) {
    return (
      <Typography variant="h6" className="text-center text-gray-500">
        No posts available
      </Typography>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <Typography variant="h6" className="text-center md:text-start">
        Posts
      </Typography>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
