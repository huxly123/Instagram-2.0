import React from "react";

function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="rounded-full border p-[2px] w-16 h-16"
        src="https://links.papareact.com/ocw"
        alt=""
      />

      <div>
        <h2>huxlyyy</h2>
        <h3>Welcome to istaa</h3>
      </div>
      <button>Sign Out</button>
    </div>
  );
}

export default MiniProfile;
