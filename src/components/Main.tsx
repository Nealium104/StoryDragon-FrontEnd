import { useState, useEffect } from "react";
import "../App.css";
import Post from "../components/Post";
import { BASE_URL } from "../config.ts";
import Submit from "../components/Submit.tsx";
import Nav from "../components/Nav.tsx";
import Registration from "../Registration.tsx";

interface PostInterface {
  postId: string;
  postText: string;
  likes: number;
  stories: string[];
  userId: string;
  editDate: Date;
  characters: string[];
  title: string;
}

export default function Main() {
  const [postData, setPostData] = useState<PostInterface[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/Posts`);
        const data = await response.json();
        setPostData(data);
      } catch (error) {
        console.log("An error occurred", error);
      }
    };
    fetchData();
  }, []);
  console.log(postData);
  return (
    <main>
      <div className="flex flex-col gap-8 p-8 bg-background">
        <Submit />
        <div className="flex flex-col gap-8">
          {postData &&
            postData.map((post: PostInterface) => (
              <Post key={post.postId} post={post} />
            ))}
        </div>
        <h1>This is an example</h1>
      </div>
    </main>
  );
}
