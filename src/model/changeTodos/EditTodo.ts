type EditTodo = {
    id: number;
    title: string;
    note: string;
    done: boolean;
    dueTo: Date;
};

function isEditTodo(arg: unknown): arg is EditTodo {
    if (!arg || typeof arg !== "object") {
        return false;
    }
    const editTodo = arg as Record<keyof EditTodo, unknown>;
    return (
        Object.keys(editTodo).length === 5 &&
        typeof editTodo.id === "number" &&
        typeof editTodo.title === "string" &&
        typeof editTodo.note === "string" &&
        typeof editTodo.done === "boolean" &&
        editTodo.dueTo instanceof Date
    );
}

export { isEditTodo };
export default EditTodo;
