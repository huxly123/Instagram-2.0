import React from "react";
import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "huxly",
    userImg: "https://links.papareact.com/jjm",
    img: "https://links.papareact.com/jjm",
    caption: "DOpeee",
  },
  {
    id: "123",
    username: "huxly",
    userImg: "https://links.papareact.com/jjm",
    img: "https://links.papareact.com/jjm",
    caption: "DOpeee",
  },
  {
    id: "123",
    username: "huxly",
    userImg: "https://links.papareact.com/jjm",
    img: "https://links.papareact.com/jjm",
    caption: "DOpeee",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
