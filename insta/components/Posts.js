import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { db } from "../firebase";
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
    id: "12",
    username: "huxly",
    userImg: "https://links.papareact.com/jjm",
    img: "https://links.papareact.com/jjm",
    caption: "DOpeee",
  },
  {
    id: "13",
    username: "huxly",
    userImg: "https://links.papareact.com/jjm",
    img: "https://links.papareact.com/jjm",
    caption: "DOpeee",
  },
];

function Posts() {

  const [post, setPost] = useState([])
  
  useEffect(() => {
  const unsubscribe=  onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
    setPost(snapshot.docs)
    })
    
    return unsubscribe

},[db])

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
//4.30 hrs
export default Posts;
