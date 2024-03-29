import { FaBook, FaPerson, FaGlobe, FaHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";
import formatDate from "../helpers/formatDate";

export default function Post({ post }) {
  const [author, setAuthor] = useState();
  const [likes, setLikes] = useState(post.likes);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://localhost:7022/api/User/${post.userId}`
        );
        const data = await response.json();
        setAuthor(data);
      } catch (error) {
        console.log("An error occurred", error);
      }
    };
    fetchData();
  }, []);

  const handleLikes = async () => {
    try {
      const response = await fetch(
        `https://localhost:7022/api/Posts/${post.postId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...post, likes: likes + 1 }),
        }
      );

      if (response.ok) {
        setLikes((prevLikes) => prevLikes + 1);
      } else {
        console.log("Failed to update likes");
      }
    } catch (error) {
      console.log("An error occurred", error);
    }
  };

  return (
    <article className="flex flex-col w-full h-full gap-4 px-8 py-4 bg-background-secondary">
      <div>
        <div className="flex flex-col items-center md:flex-row">
          {/* <div className="flex self-start w-16 h-16">
            {post.PostType == "Story" ? (
              <FaBook className="w-full h-full" />
            ) : post.PostType == "Location" ? (
              <FaGlobe className="" />
            ) : (
              <FaPerson className="w-full h-full" />
            )}
          </div> */}
          <div className="w-[100px] h-[100px] my-4 mr-4 bg-red-500 rounded-full"></div>
          <div className="flex flex-col text-left">
            <h2 className="text-4xl">{post.title}</h2>
            <span className="text-xl">{author && author.userName}</span>
            <time className="text-gray-600 flex-end">{`Created @ ${formatDate(
              post.postDate
            )}`}</time>
          </div>
        </div>
      </div>
      <p className="text-left">{post.postText}</p>
      <div>
        <div className="flex items-center gap-4" onClick={() => handleLikes()}>
          <button className="flex flex-col items-center w-24">
            <FaHeart className="w-12 h-12" />
            <span>{likes}</span>
          </button>
          <a
            className="px-4 py-1 transition duration-150 border-2 border-white rounded bg-gray-300/25 hover:bg-gray-100 hover:text-black"
            href="/"
          >
            Read
          </a>
        </div>
      </div>
    </article>
  );
}
