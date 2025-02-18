export type Comment = {
  id: string;
  text: string;
  replies: Comment[];
};

export type Post = {
  id: string;
  title: string;
  content: string;
  image?: string | null;
  comments: Comment[];
};
