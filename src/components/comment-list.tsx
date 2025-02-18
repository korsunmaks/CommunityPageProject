import { useState } from "react";
import { Button, Divider, TextField, Typography } from "@mui/material";
import CommentItem from "./comment-item";
import { Comment } from "../types";
import usePostStore from "../store/postStore";

interface CommentListProps {
  postId: string;
  comments: Comment[];
}

const CommentList = ({ postId, comments }: CommentListProps) => {
  const [newComment, setNewComment] = useState("");

  const { addComment } = usePostStore();

  return (
    <div className="mt-4 flex flex-col gap-2">
      <Typography variant="h6">Comments</Typography>
      <Divider />
      <TextField
        fullWidth
        label="Write a comment..."
        variant="outlined"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        className="mb-2"
      />
      <Button
        size="small"
        variant="contained"
        onClick={() => {
          addComment(postId, null, newComment);
          setNewComment("");
        }}
        className="w-1/4"
      >
        Comment
      </Button>
      {comments.map((comment) => (
        <CommentItem key={comment.id} postId={postId} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
