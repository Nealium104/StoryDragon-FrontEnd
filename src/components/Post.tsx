import { FaBook, FaPerson, FaGlobe } from "react-icons/fa6";

export default function Post({ post }) {
  return (
    <article className="bg-background-secondary">
      {post.PostType == "Story" ? (
        <FaBook />
      ) : post.PostType == "Location" ? (
        <FaGlobe />
      ) : (
        <FaPerson />
      )}
      <p className="">{post.PostText}</p>
      <p>This is also a div</p>
    </article>
  );
}
