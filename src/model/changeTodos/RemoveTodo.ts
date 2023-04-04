type RemoveTodo = {
    id: number;
};

function isRemoveTodo(arg: any): arg is RemoveTodo {
    return arg !== null && typeof arg === "object" && Object.keys(arg).length === 1 && typeof arg.id === "number";
}

export { isRemoveTodo };
export default RemoveTodo;
