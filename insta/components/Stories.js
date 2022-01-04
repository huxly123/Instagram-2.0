import React, { useEffect, useState } from "react";
import faker from "faker";
import Story from "./Story";
import { useSession } from "next-auth/react"
import axios from "axios";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);

  const {data:session}=useSession()

  useEffect(async () => {
     const { data } = await axios.get("https://randomuser.me/api/");
    // const suggestions = [...Array(20)].map((_, i) => ({
    //   ...data,
    //   id:i
    // }))
  // console.log(suggestions);
    setSuggestions(data.results);
  }, []);
console.log(suggestions);
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}

      {suggestions.map((profile) => (
        <Story
          key="puyol"
          img="https://picsum.photos/200/300?random=1"
          username="puyol"
        />
      ))}

      {suggestions.map((profile) => (
        <Story
          key={profile.phone}
          img="https://picsum.photos/200/300?random=2"
          username="messi"
        />
      ))}
      {suggestions.map((profile) => (
        <Story
          key={profile.phone}
          img="https://picsum.photos/200/300?random=3"
          username="david"
        />
      ))}
      {suggestions.map((profile) => (
        <Story
          key={profile.phone}
          img="https://picsum.photos/200/300?random=4"
          username="cristiano"
        />
      ))}
      {suggestions.map((profile) => (
        <Story
          key={profile.phone}
          img="https://picsum.photos/200/300?random=5"
          username="beckham"
        />
      ))}
      {suggestions.map((profile) => (
        <Story
          key={profile.phone}
          img="https://picsum.photos/200/300?random=6"
          username="valdamort"
        />
      ))}
      {suggestions.map((profile) => (
        <Story
          key={profile.phone}
          img="https://picsum.photos/200/300?random=7"
          username="saurez"
        />
      ))}
      {suggestions.map((profile) => (
        <Story
          key={profile.phone}
          img="https://picsum.photos/200/300?random=8"
          username="holland"
        />
      ))}
      {suggestions.map((profile) => (
        <Story
          key={profile.phone}
          img="https://picsum.photos/200/300?random=9"
          username="pichai"
        />
      ))}
      {suggestions.map((profile) => (
        <Story
          key={profile.phone}
          img="https://picsum.photos/200/300?random=10"
          username="ronaldinho"
        />
      ))}
      {suggestions.map((profile) => (
        <Story
          key={profile.phone}
          img="https://picsum.photos/200/300?random=11"
          username="harry"
        />
      ))}
    </div>
  );
}

export default Stories;

//e=>e.picture.medium
