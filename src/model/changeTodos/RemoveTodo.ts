type RemoveTodo = {
    id: number;
};

function isRemoveTodo(arg: unknown): arg is RemoveTodo {
    if (!arg || typeof arg !== "object") {
        return false;
    }
    const removeTodo = arg as Record<keyof RemoveTodo, unknown>;
    return Object.keys(removeTodo).length === 1 && typeof removeTodo.id === "number";
}

export { isRemoveTodo };
export default RemoveTodo;
