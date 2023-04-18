import axios from "axios";
import { Todo, PartialTodo } from "../model/Todo";
import { Payload, payload2todo } from "./internal";

const editTodo = async (id: number, todo: PartialTodo): Promise<Todo> => {
    const response = await axios.patch<Payload>(`/api/todos/${id}`, todo);
    return payload2todo(response.data);
};

export default editTodo;
