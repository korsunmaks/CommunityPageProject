import { Button, Card, CardContent, Divider, Typography } from "@mui/material";
import CommentList from "./comment-list";
import { Post } from "../types";

interface PostItemProps {
  post: Post;
  deletePost: (postId: string) => void;
  addComment: (
    postId: string,
    parentCommentId: string | null,
    text: string
  ) => void;
  deleteComment: (postId: string, commentId: string) => void;
}

const PostItem = ({
  post,
  deletePost,
  addComment,
  deleteComment,
}: PostItemProps) => {
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
        <CommentList
          postId={post.id}
          comments={post.comments}
          addComment={addComment}
          deleteComment={deleteComment}
        />
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
