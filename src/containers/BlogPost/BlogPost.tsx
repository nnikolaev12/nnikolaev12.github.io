import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();

  return (
    <>
      <p>{slug}</p>
    </>
  );
};

export default BlogPost;
