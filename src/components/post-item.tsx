import { Button, Card, CardContent, Divider, Typography } from "@mui/material";
import CommentList from "./comment-list";
import { Post } from "../types";
import usePostStore from "../store/postStore";

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  const { deletePost } = usePostStore();
  return (
    <Card key={post.id} className="mb-4">
      <CardContent className="flex flex-col gap-4">
        <Typography variant="h6" className="m-12">
          {post.title}
        </Typography>
        <Divider />
        <Typography variant="body1" className="mb-2">
          {post.content}
        </Typography>
        {post.image && (
          <img
            src={post.image}
            alt="Post Image"
            className="mb-4 max-w-full h-auto rounded-lg"
          />
        )}
        <CommentList postId={post.id} comments={post.comments} />
      </CardContent>
      <div className="m-2 flex justify-end">
        <Button
          size="small"
          variant="outlined"
          color="error"
          onClick={() => deletePost(post.id)}
        >
          Delete Post
        </Button>
      </div>
    </Card>
  );
};

export default PostItem;
