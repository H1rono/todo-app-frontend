import axios from "axios";
import { Todo } from "../model/Todo";

const fetchAll = async (): Promise<Todo[]> => {
    const response = await axios.get("/api/todos");
    return response.data;
};

export default fetchAll;
