import React, { useState } from "react";
import "./Feed.css";
import Post from "../Post/Post";

const Feed = () => {
  // State to hold comments for each post
  const [comments, setComments] = useState({
    post1: ["Great post!", "Awesome!", "Nice job!"],
    post2: ["Interesting!", "Love this!", "Well done!"],
    post3: ["Cool video!", "Thanks for sharing!", "Amazing!"],
    // Add more posts and their comments state as needed
  });

  // Function to handle adding comments
  const addComment = (postId, comment) => {
    setComments((prevComments) => ({
      ...prevComments,
      [postId]: [...prevComments[postId], comment],
    }));
  };

  return (
    <div className="main-container">
      <Post
        postId="post1"
        content="This is a sample text post."
        embedSrc="https://open.spotify.com/embed/track/2QwZ4Sg3SXyopVMoMOpI71?utm_source=generator"
        comments={comments["post1"]}
        addComment={addComment}
      />
      <Post
        postId="post2"
        content="Another text post."
        embedSrc="https://embed.music.apple.com/us/album/zoom-feat-tinashe/1730963264?i=1730963547"
        comments={comments["post2"]}
        addComment={addComment}
      />
      <Post
        postId="post3"
        content="Yet another text post with an embedded YouTube video."
        embedSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
        comments={comments["post3"]}
        addComment={addComment}
      />
      {/* Add more posts with dummy data as needed */}
    </div>
  );
};

export default Feed;
