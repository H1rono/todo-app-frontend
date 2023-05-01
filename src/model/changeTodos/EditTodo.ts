type EditTodo = {
    id: number;
    title: string;
    note: string;
    done: boolean;
    dueTo: Date;
};

function isEditTodo(arg: any): arg is EditTodo {
    return (
        arg !== null &&
        typeof arg === "object" &&
        Object.keys(arg).length === 5 &&
        typeof arg.id === "number" &&
        typeof arg.title === "string" &&
        typeof arg.note === "string" &&
        typeof arg.done === "boolean" &&
        arg.dueTo instanceof Date
    );
}

export { isEditTodo };
export default EditTodo;
