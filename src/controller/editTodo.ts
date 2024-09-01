import axios from "axios";
import type { Todo, PartialTodo } from "../model/Todo";
import { type Payload, partialTodo2partialPayload, payload2todo } from "./internal";

const editTodo = async (id: number, todo: PartialTodo): Promise<Todo> => {
    const payload = partialTodo2partialPayload(todo);
    const response = await axios.patch<Payload>(`/api/todos/${id}`, payload);
    return payload2todo(response.data);
};

export default editTodo;
