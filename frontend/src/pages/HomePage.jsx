import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TodoList from "../components/TodoList";
import toast from "react-hot-toast";
import api from "../util/axios.js";
import { create } from "axios";

const HomePage = () => {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchList = async () => {
      try {
        const todo = await api.get("/todo");
        console.log(todo.data);
        setLists(todo.data);
      } catch (error) {
        console.log(error.message);
        toast.error("Failed to load the TODO List :(");
      } finally {
        setLoading(false);
      }
    };
    fetchList();
  }, []);

  const handleSubmit = async(id) => {
    if (!title.trim()) {
      toast.error("Title field is Required");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post("/todo/create", {
        title,
        description,
      });
      setLists((prev) => [response.data, ...prev])

      setTitle("");
      setDescription("");
      toast.success("Successfully added the TODO");
    } catch (error) {
      toast.error("Failed to Add the TODO");
    } finally {
      setLoading(false);
    }
  };


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

      <div className="flex items-center justify-center gap-4 pt-6 pb-8">
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="bg-textplace min-w-81 rounded-xl min-h-14 pl-4 font-bold text-2xl"
          />
        </div>
        <div>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write something here..."
            className="bg-textplace min-w-150 min-h-14 rounded-xl pl-4 font-bold text-2xl"
          />
        </div>
        <div>
          <button
            onClick={() => handleSubmit(lists._id)}
            className="min-w-30 min-h-14 bg-add rounded-xl font-semibold text-3xl hover:ring-2 hover:ring-offset-2 transition-all"
          >
            Add
          </button>
        </div>
      </div>

      <div>
        {loading && (
          <div className="text-center font-bold text-2xl text-add">
            TODO List are Loading...{" "}
          </div>
        )}

        {lists.length > 0 && (
          <div>
            {lists.map((list) => (
              <TodoList key={list._id} list={list} setLists={setLists} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
