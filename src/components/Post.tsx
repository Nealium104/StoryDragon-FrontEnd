import { FaBook, FaPerson, FaGlobe } from "react-icons/fa6";

export default function Post({ post }) {
  return (
    <article className="bg-background-secondary">
      <div className="flex">
        <div className="w-12 h-12 m-4">
          {post.PostType == "Story" ? (
            <FaBook className="w-full h-full" />
          ) : post.PostType == "Location" ? (
            <FaGlobe className="w-full h-full" />
          ) : (
            <FaPerson className="w-full h-full" />
          )}
        </div>
        <div>
          <div className="w-24 h-24 m-4 rounded-full bg-red-500"></div>
        </div>
      </div>
      <p className="">{post.PostText}</p>
      <p>This is also a div</p>
    </article>
  );
}
