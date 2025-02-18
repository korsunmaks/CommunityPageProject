import { Divider } from "@mui/material";
import PostForm from "../components/post-form";
import PostList from "../components/post-list";
import Navbar from "../components/navbar";

const CommunityPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 mt-6 flex flex-col md:flex-row md:justify-between gap-6">
        <div className="md:w-1/3 w-full">
          <PostForm />
        </div>
        <div className="md:hidden">
          <Divider className="h-1 bg-gray-300" />
        </div>
        <div className="md:w-1/2 w-full">
          <PostList />
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
