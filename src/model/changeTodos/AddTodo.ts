import { PartialTodo } from "../Todo";

type AddTodo = PartialTodo;

function isAddTodo(arg: any): arg is AddTodo {
    return (
        arg !== null &&
        typeof arg === "object" &&
        Object.keys(arg).length === 4 &&
        typeof arg.title === "string" &&
        typeof arg.note === "string" &&
        typeof arg.done === "boolean" &&
        arg.dueTo instanceof Date
    );
}

export { isAddTodo };
export default AddTodo;
