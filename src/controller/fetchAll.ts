import axios from "axios";
import type { Todo } from "../model/Todo";
import { type Payload, payload2todo } from "./internal";

const fetchAll = async (): Promise<Todo[]> => {
    const response = await axios.get<Payload[]>("/api/todos");
    return response.data.map(payload2todo);
};

export default fetchAll;
