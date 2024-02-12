import { useState } from "react";
import "./App.css";
import Post from "./components/Post";
import postData from "./Data/postData";

function App() {
  return (
    <div className="bg-background">
      <div className="flex flex-col gap-8">
        {postData.map((post) => (
          <Post key={post.PostId} post={post} />
        ))}
      </div>
    </div>
  );
}

export default App;
