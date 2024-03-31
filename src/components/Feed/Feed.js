import React from "react";
import "./Feed.css";
import Post from "../Post/Post";

const Feed = () => {
  return (
    <div className="main-container">
      <Post
        content="This is a sample text post."
        embedSrc="https://open.spotify.com/embed/track/2QwZ4Sg3SXyopVMoMOpI71?utm_source=generator"
      />
      <Post
        content="Another text post."
        embedSrc="https://music.apple.com/us/album/sample-album/123456789"
      />
      <Post
        content="Yet another text post with an embedded YouTube video."
        embedSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />
      {/* Add more posts with dummy data as needed */}
    </div>
  );
};

export default Feed;
