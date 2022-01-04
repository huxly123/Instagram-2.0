import React, { useEffect, useState } from "react";
import faker from "faker";

function Suggestion() {
  // const [suggestions, setSuggestions] = useState([]);

  // useEffect(() => {
  //   const suggestions = [...Array(5)].map((_, i) => ({
  //     ...faker.helpers.contextualCard(),
  //     id: i,
  //   }));
  //   setSuggestions(suggestions);
  // }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>

        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {
        <div
          key={Math.random()}
          className="flex items-center justify-between mt-3"
        >
          <img
            className="w-10 h-10 rounded-full border p-[2px]"
            src="https://picsum.photos/200/300?random=25"
            alt=""
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">Henry</h2>
            <h3 className="text-xs text-gray-400">Works at Acko</h3>
          </div>
          <button className="text-blue-400 text-sm font-bold">Follow</button>
        </div>
      }
      {
        <div
          key={Math.random()}
          className="flex items-center justify-between mt-3"
        >
          <img
            className="w-10 h-10 rounded-full border p-[2px]"
            src="https://picsum.photos/200/300?random=28"
            alt=""
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">James</h2>
            <h3 className="text-xs text-gray-400">Works at Uber</h3>
          </div>
          <button className="text-blue-400 text-sm font-bold">Follow</button>
        </div>
      }
      {
        <div
          key={Math.random()}
          className="flex items-center justify-between mt-3"
        >
          <img
            className="w-10 h-10 rounded-full border p-[2px]"
            src="https://picsum.photos/200/300?random=21"
            alt=""
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">Patrick</h2>
            <h3 className="text-xs text-gray-400">Works at OLA</h3>
          </div>
          <button className="text-blue-400 text-sm font-bold">Follow</button>
        </div>
      }
      {
        <div
          key={Math.random()}
          className="flex items-center justify-between mt-3"
        >
          <img
            className="w-10 h-10 rounded-full border p-[2px]"
            src="https://picsum.photos/200/300?random=252"
            alt=""
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">Leo</h2>
            <h3 className="text-xs text-gray-400">Works at Disney</h3>
          </div>
          <button className="text-blue-400 text-sm font-bold">Follow</button>
        </div>
      }
      {
        <div
          key={Math.random()}
          className="flex items-center justify-between mt-3"
        >
          <img
            className="w-10 h-10 rounded-full border p-[2px]"
            src="https://picsum.photos/200/300?random=23"
            alt=""
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">Marcus</h2>
            <h3 className="text-xs text-gray-400">Works at Nolan</h3>
          </div>
          <button className="text-blue-400 text-sm font-bold">Follow</button>
        </div>
      }
    </div>
  );
}

export default Suggestion;


//suggestions.map((profile) => (
