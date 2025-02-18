import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextField, Typography } from "@mui/material";
import { Post } from "../types";

interface PostFormProps {
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const postSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  content: z.string().min(10, "Content must be at least 10 characters long"),
  image: z.string().nullable(),
});

type PostFormData = z.infer<typeof postSchema>;

const PostForm = ({ setPosts }: PostFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: { title: "", content: "", image: null },
  });

  const newPostImage = watch("image");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setValue("image", reader.result as string);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const addPost = (data: PostFormData) => {
    setPosts((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title: data.title,
        content: data.content,
        image: data.image ?? null,
        comments: [],
      },
    ]);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(addPost)} className="flex flex-col gap-2 mb-6">
      <Typography variant="h6">Create a new post</Typography>
      <TextField
        fullWidth
        label="Post Title"
        variant="outlined"
        {...register("title")}
        error={!!errors.title}
        helperText={errors.title?.message}
        className="mb-4"
      />
      <TextField
        fullWidth
        label="Post Content"
        variant="outlined"
        multiline
        rows={4}
        {...register("content")}
        error={!!errors.content}
        helperText={errors.content?.message}
        className="mb-4"
      />
      <div className="mb-4">
        <label
          htmlFor="file-upload"
          className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
        >
          Upload Image
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>

      {newPostImage && (
        <img
          src={newPostImage}
          alt="Preview"
          width={100}
          height={100}
          className="mb-4"
        />
      )}
      <Button variant="contained" color="primary" type="submit">
        Add Post
      </Button>
    </form>
  );
};

export default PostForm;
