import axios from "axios";
import { PartialTodo, Todo } from "../model/Todo";
import { Payload, partialTodo2partialPayload, payload2todo } from "./internal";

const addTodo = async (todo: PartialTodo): Promise<Todo> => {
    const payload = partialTodo2partialPayload(todo);
    const response = await axios.post<Payload>("/api/todos", payload);
    return payload2todo(response.data);
};

export default addTodo;
