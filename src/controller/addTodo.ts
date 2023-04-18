import axios from "axios";
import { PartialTodo, Todo } from "../model/Todo";

const addTodo = async (todo: PartialTodo): Promise<Todo> => {
    const response = await axios.post("/api/todos", todo);
    return response.data;
};

export default addTodo;
