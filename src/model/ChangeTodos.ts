import EditTodo, { isEditTodo } from "./changeTodos/EditTodo";
import RemoveTodo, { isRemoveTodo } from "./changeTodos/RemoveTodo";
import AddTodo, { isAddTodo } from "./changeTodos/AddTodo";

type ChangeTodos = EditTodo | RemoveTodo | AddTodo;

export { isEditTodo, isRemoveTodo, isAddTodo };

export type { EditTodo, RemoveTodo, AddTodo };
export default ChangeTodos;
