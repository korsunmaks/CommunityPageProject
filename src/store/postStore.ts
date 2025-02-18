import { create } from "zustand";
import { Post } from "../types";
import { initialPosts } from "../mocks/mockData";

interface PostState {
  posts: Post[];
}

interface PostActions {
  addPost: (title: string, content: string, image: string | null) => void;
  deletePost: (postId: string) => void;
  addComment: (
    postId: string,
    parentCommentId: string | null,
    text: string
  ) => void;
  deleteComment: (postId: string, commentId: string) => void;
}

const usePostStore = create<PostState & PostActions>((set) => ({
  posts: initialPosts,
  addPost: (title: string, content: string, image: string | null) =>
    set((state: PostState) => ({
      posts: [
        ...state.posts,
        {
          id: crypto.randomUUID(),
          title,
          content,
          image,
          comments: [],
        },
      ],
    })),
  deletePost: (postId: string) =>
    set((state: PostState) => ({
      posts: state.posts.filter((post) => post.id !== postId),
    })),
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
  addComment: (postId: string, parentCommentId: string | null, text: string) =>
    set((state: PostState) => {
      const addCommentRecursively = (
        comments: Post["comments"]
      ): Post["comments"] =>
        comments.map((comment) =>
          comment.id === parentCommentId
            ? {
                ...comment,
                replies: [
                  ...comment.replies,
                  { id: crypto.randomUUID(), text, replies: [] },
                ],
              }
            : { ...comment, replies: addCommentRecursively(comment.replies) }
        );

      return {
        posts: state.posts.map((post) =>
          post.id === postId
            ? {
                ...post,
                comments: parentCommentId
                  ? addCommentRecursively(post.comments)
                  : [
                      ...post.comments,
                      { id: crypto.randomUUID(), text, replies: [] },
                    ],
              }
            : post
        ),
      };
    }),
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
  deleteComment: (postId: string, commentId: string) =>
    set((state: PostState) => {
      const deleteCommentRecursively = (
        comments: Post["comments"]
      ): Post["comments"] =>
        comments
          .filter((comment) => comment.id !== commentId)
          .map((comment) => ({
            ...comment,
            replies: deleteCommentRecursively(comment.replies),
          }));

      return {
        posts: state.posts.map((post) =>
          post.id === postId
            ? { ...post, comments: deleteCommentRecursively(post.comments) }
            : post
        ),
      };
    }),
}));

export default usePostStore;
