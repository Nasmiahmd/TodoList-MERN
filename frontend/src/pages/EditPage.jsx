import React, { useEffect, useState } from "react";
import { ArrowLeftIcon } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router";
import api from "../util/axios";
import toast from "react-hot-toast";

const EditPage = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

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

  const handleUpdate = async() => {
    if(!list.title.trim()){
      toast.error("Title Field is Required");
      return;
    }
    setUpdating(true)
    try {
      await api.put(`/todo/edit/${id}`, list)
      toast.success("Successfully Updated.")
      navigate('/')
    } catch (error) {
      toast.error("Failed to Update the TODO");
      console.log(error.message)
    }finally{
      setUpdating(false);
    }
  }

  const handleDelete = async() => {
    if(!window.confirm("Are you sure you want to delete this TODO?")) return;
    try {
      const res = await api.delete(`/todo/${id}`);
      toast.success("Successfully Deleted.")
      navigate('/');
    } catch (error) {
      toast.error("Failed to delete the TODO")
      console.log(error.message);
    }
  }

  // console.log(id)

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
          value={list.title || ""}
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
        <button onClick={() => handleUpdate()} className="min-w-28 min-h-14 bg-edit rounded-xl font-semibold text-2xl hover:ring-2 hover:ring-offset-2 transition-all">
          {updating ? "Updating" : "Update"}
        </button>
        <button onClick={() => handleDelete()} className="min-w-28 min-h-14 bg-delete rounded-xl font-semibold text-2xl hover:ring-2 hover:ring-offset-2 transition-all">
          Delete
        </button>
      </div>
    </div>
  );
};

export default EditPage;
