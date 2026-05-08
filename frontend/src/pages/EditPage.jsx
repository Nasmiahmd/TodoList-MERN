import React, { useEffect, useState } from "react";
import { ArrowLeftIcon } from "lucide-react";
import { Link, useParams } from "react-router";
import api from "../util/axios";
import toast from "react-hot-toast";

const EditPage = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchList = async () => {
      try {
        const res = await api.get(`/todo/${id}`);
        setList(res.data);
        console.log(res.data);
      } catch (error) {
        toast.error("Can't get the TODO");
        console.log(error.message);
      }
    };

    fetchList();
  }, []);

  // console.log(list.title)

  return (
    <div>
      <div className="w-full flex justify-center pt-10">
        <div className="container flex max-w-5/12 mx-auto">
          <Link to={"/"} className="justify-self-start">
            <div className="flex items-center gap-1 hover:text-navbar transition-colors">
              <ArrowLeftIcon />
              <span className="font-semibold">Back to List</span>
            </div>
          </Link>

          <div className="mx-auto justify-center pr-20">
            <h2 className="font-bold text-2xl italic font-sans">
              Edit To-Do List
            </h2>
            <div className="max-w-32 bg-navbar min-h-1.5 rounded-4xl mx-auto mt-1" />
          </div>
        </div>
      </div>
      <div className="flex mx-auto justify-center pt-10">
        <input
          placeholder="Title"
          className="bg-textplace min-w-5/12 rounded-xl min-h-14 font-bold text-2xl px-4"
          value={list.title || " "}
          onChange={(e) => setList({ ...list, title: e.target.value })}
        />
      </div>
      <div className="flex mx-auto justify-center pt-7">
        <textarea
          placeholder="Description"
          className="bg-textplace min-w-5/12 rounded-xl textarea textarea-bordered h-52 px-4 pt-3 font-bold text-2xl"
          value={list.description || ""}
          onChange={(e) => setList({ ...list, description: e.target.value })}
        />
      </div>
      <div className="flex mx-auto justify-end w-5/12 gap-4 pt-6">
        <button className="min-w-28 min-h-14 bg-edit rounded-xl font-semibold text-2xl hover:ring-2 hover:ring-offset-2 transition-all">
          Update
        </button>
        <button className="min-w-28 min-h-14 bg-delete rounded-xl font-semibold text-2xl hover:ring-2 hover:ring-offset-2 transition-all">
          Delete
        </button>
      </div>
    </div>
  );
};

export default EditPage;
