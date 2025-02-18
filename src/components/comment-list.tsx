import { useState } from "react";
import { Button, Divider, TextField, Typography } from "@mui/material";
import CommentItem from "./comment-item";
import { Comment } from "../types";

interface CommentListProps {
  postId: string;
  comments: Comment[];
  addComment: (
    postId: string,
    parentCommentId: string | null,
    text: string
  ) => void;
  deleteComment: (postId: string, commentId: string) => void;
}

const CommentList = ({
  postId,
  comments,
  addComment,
  deleteComment,
}: CommentListProps) => {
  const [newComment, setNewComment] = useState("");

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
        <CommentItem
          key={comment.id}
          postId={postId}
          comment={comment}
          addComment={addComment}
          deleteComment={deleteComment}
        />
      ))}
    </div>
  );
};

export default CommentList;
