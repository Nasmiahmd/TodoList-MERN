import List from "../model/todo.js";

export const getAllTodoList = async(req, res) => {
    try {
        const list = await List.find().sort({createdAt: -1});
        res.status(200).json(list);
    } catch (error) {
        console.log("Error in getAllTodoList Controller", error.message);
        res.status(500).json({message: "Internal server error"})
    } 
}

export const getTodoListById = async(req, res) => {
    try {
        const list = await List.findById(req.params.id);
        if(!list) return res.status(404).json({message: "TodoList not found"});
        res.status(200).json(list);
    } catch (error) {
        console.log("Error in getTodoListById Controller", error.message);
        res.status(500).json({message: "Internal server error"})
    }
}

export const createTodoList = async(req, res) => {
    try {
        const {title, description} = req.body
        const list = new List({title, description})
        const savedList = await list.save()
        res.status(201).json(savedList);
    } catch (error) {
        console.log("Error in CreateTodoList Controller", error.message);
        res.status(500).json({message: "Internal server error"})
    }
}

export const updateTodoList = async(req, res) => {
    try {
        const {title, description} = req.body;

        const UpdateTodoList = await List.findByIdAndUpdate(req.params.id, {title, description}, {new: true});

        if(!UpdateTodoList) return res.status(404).json({message: "TodoList not found"});

        res.status(200).json(UpdateTodoList);
    } catch (error) {
        console.log("Error in UpdateTodoList Controller", error.message);
        res.status(500).json({message: "Internal server error"})
    }
}

export const deleteTodoList = async(req, res) => {
    try {
        const deleteTodoList = await List.findByIdAndDelete(req.params.id);

        if(!deleteTodoList) return res.status(404).json({message: "TodoList not found"});

        res.status(200).json(deleteTodoList);
    } catch (error) {
        console.log("Error in DeleteTodoList Controller", error.message);
        res.status(500).json({message: "Internal server error"})
    }
}