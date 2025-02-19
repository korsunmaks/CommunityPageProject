import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Comment } from "../types";
import usePostStore from "../store/postStore";

interface CommentItemProps {
  postId: string;
  comment: Comment;
}

const CommentItem = ({ postId, comment }: CommentItemProps) => {
  const [reply, setReply] = useState("");
  const [showReply, setShowReply] = useState(false);

  const { deleteComment, addComment } = usePostStore();

  return (
    <div className="ml-4 mt-2 p-2 border-l-2 border-gray-300">
      <Typography variant="body2">{comment.text}</Typography>
      <div className="flex gap-2 justify-between mt-1">
        <Button size="small" onClick={() => setShowReply(!showReply)}>
          Reply
        </Button>
        <Button
          size="small"
          color="error"
          onClick={() => deleteComment(postId, comment.id)}
        >
          Delete
        </Button>
      </div>
      {showReply && (
        <div className="mt-2 flex flex-col gap-2">
          <TextField
            fullWidth
            label="Reply..."
            variant="outlined"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            className="mb-2"
          />
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              addComment(postId, comment.id, reply);
              setReply("");
              setShowReply(false);
            }}
            className="w-1/4"
          >
            Reply
          </Button>
        </div>
      )}
      {comment.replies.map((subComment) => (
        <CommentItem key={subComment.id} postId={postId} comment={subComment} />
      ))}
    </div>
  );
};

export default CommentItem;
