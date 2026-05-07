import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String
    }
}, {timestamps: true})

const List = mongoose.model("todo", todoSchema);

export default List;