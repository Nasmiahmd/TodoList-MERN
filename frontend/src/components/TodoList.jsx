import React, { useState } from "react";
import { Link, useParams } from "react-router";
import toast from "react-hot-toast";
import api from "../util/axios";

const TodoList = ({ list, setLists }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this Todo?")) return;
    console.log(id);
    try {
      const response = await api.delete(`/todo/${id}`);
      toast.success("SuccessFully Deleted the TODO");
      setLists((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      toast.error("Failed to delete this Todo.");
      console.log(error.message);
    }
  };

  return (
    <div className="w-full min-w-full flex justify-center items-center pt-3 px-3">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col items-center justify-between p-4 bg-textplace w-full max-w-5xl rounded-xl shadow-md"
      >
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex-1 px-4">
            <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl text-left">
              {list.title}
            </h1>
          </div>

          <div className="flex gap-4">
            <Link to={`/edit/${list._id}`} onClick={(e) => e.stopPropagation()}>
              <button className="w-24 md:w-28 h-12 bg-edit rounded-xl font-semibold text-lg md:text-xl hover:ring-1 hover:ring-offset-2 transition-all">
                Edit
              </button>
            </Link>
            <button
              onClick={(e) => {
                (e.stopPropagation(), handleDelete(list._id));
              }}
              className="w-24 md:w-28 h-12 bg-delete rounded-xl font-semibold text-lg md:text-xl hover:ring-1 hover:ring-offset-2 transition-all"
            >
              Delete
            </button>
          </div>
        </div>

        <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 w-full opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="px-4 pt-4 mt-4 border-t border-grey-300 animate-in fade-in slide-in-from-top-2">
            <p className="text-grey-700 text-xl text-center">
              {list.description || "No description provided."}
            </p>
            <div className="text-sm text-gray-500 mt-2 italic text-center">
              created: {new Date(list.createdAt).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
