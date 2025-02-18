import { Post } from "../types";
import { Typography } from "@mui/material";
import PostItem from "./post-item";

interface PostListProps {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostList = ({ posts, setPosts }: PostListProps) => {
  /**
   * Adds a new comment to a post or as a reply to an existing comment.
   *
   * @param postId - The ID of the post to which the comment belongs.
   * @param parentCommentId - The ID of the parent comment if it's a reply; otherwise, null.
   * @param text - The content of the comment.
   *
   * Workflow:
   * 1. Validates input to ensure the text is not empty.
   * 2. Uses recursion to traverse the comment tree and append the new comment at the correct location.
   * 3. Updates the post state using setPosts, ensuring the correct post and its comment structure are updated.
   *
   * Supports nested replies, allowing for an unlimited depth of comment threads.
   */
  const addComment = (
    postId: string,
    parentCommentId: string | null,
    text: string
  ) => {
    if (!text) return;

    const updateComments = (comments: Post["comments"]): Post["comments"] =>
      comments.map((comment) =>
        comment.id === parentCommentId
          ? {
              ...comment,
              replies: [
                ...comment.replies,
                { id: crypto.randomUUID(), text, replies: [] },
              ],
            }
          : { ...comment, replies: updateComments(comment.replies) }
      );

    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: parentCommentId
                ? updateComments(post.comments)
                : [
                    ...post.comments,
                    { id: crypto.randomUUID(), text, replies: [] },
                  ],
            }
          : post
      )
    );
  };

  const deletePost = (postId: string) => {
    setPosts((prev) => prev.filter((post) => post.id !== postId));
  };

  /**
   * Deletes a comment or reply from a post.
   *
   * @param postId - The ID of the post from which the comment should be deleted.
   * @param commentId - The ID of the comment or reply to be deleted.
   *
   * Workflow:
   * 1. Uses recursion to traverse the comment tree and remove the targeted comment or reply.
   * 2. Filters out the comment or reply with the matching ID.
   * 3. Updates the post state using setPosts to reflect the deletion.
   *
   * Ensures that replies of the deleted comment are also removed.
   */
  const deleteComment = (postId: string, commentId: string) => {
    const removeComment = (comments: Post["comments"]): Post["comments"] =>
      comments
        .filter((comment) => comment.id !== commentId)
        .map((comment) => ({
          ...comment,
          replies: removeComment(comment.replies),
        }));

    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? { ...post, comments: removeComment(post.comments) }
          : post
      )
    );
  };

  if (posts.length === 0) {
    return (
      <Typography variant="h6" className="text-center text-gray-500">
        No posts available
      </Typography>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          deletePost={deletePost}
          addComment={addComment}
          deleteComment={deleteComment}
        />
      ))}
    </div>
  );
};

export default PostList;
