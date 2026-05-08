import express from "express";
import { createTodoList, deleteTodoList, getAllTodoList, getTodoListById, updateTodoList } from "../controllers/todoControllers.js";

const router = express.Router();

router.get('/', getAllTodoList);
router.get('/:id', getTodoListById);
router.post('/create', createTodoList);
router.put('/edit/:id', updateTodoList);
router.delete('/:id', deleteTodoList);

export default router
