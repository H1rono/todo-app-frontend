import axios from "axios";
import { PartialTodo, Todo } from "../model/Todo";
import { Payload, payload2todo } from "./internal";

const addTodo = async (todo: PartialTodo): Promise<Todo> => {
    const response = await axios.post<Payload>("/api/todos", todo);
    return payload2todo(response.data);
};

export default addTodo;
