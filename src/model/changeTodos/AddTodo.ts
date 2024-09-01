import type { PartialTodo } from "../Todo";

type AddTodo = PartialTodo;

function isAddTodo(arg: unknown): arg is AddTodo {
    if (!arg || typeof arg !== "object") {
        return false;
    }
    const addTodo = arg as Record<keyof AddTodo, unknown>;
    return (
        Object.keys(addTodo).length === 4 &&
        typeof addTodo.title === "string" &&
        typeof addTodo.note === "string" &&
        typeof addTodo.done === "boolean" &&
        addTodo.dueTo instanceof Date
    );
}

export { isAddTodo };
export default AddTodo;
