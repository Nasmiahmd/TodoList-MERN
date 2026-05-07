import React from "react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <div className="flex items-center justify-center mx-auto pt-4">
        <h1 className="font-bold text-4xl italic text-center font-sans">
          <span className="block">Hey folks,</span>
          <span className="block">
            This is my own Todo List Project with Mern Stack
          </span>
          <div className="max-w-65 bg-navbar min-h-1.5 rounded-4xl mx-auto mt-1" />
        </h1>
      </div>

      <div className="flex items-center justify-center gap-4 pt-6">
        <div>
          <input placeholder="Title" className="bg-textplace min-w-81 rounded-xl min-h-13 pl-4 font-bold text-2xl" />
        </div>
        <div>
          <input placeholder="Write something here..." className="bg-textplace min-w-150 min-h-13 rounded-xl pl-4 font-bold text-2xl"/>
        </div>
        <div>
          <button className="min-w-28 min-h-13 bg-add rounded-xl">Add</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
