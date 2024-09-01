import type EditTodo from "./changeTodos/EditTodo";
import { isEditTodo } from "./changeTodos/EditTodo";
import type RemoveTodo from "./changeTodos/RemoveTodo";
import { isRemoveTodo } from "./changeTodos/RemoveTodo";
import type AddTodo from "./changeTodos/AddTodo";
import { isAddTodo } from "./changeTodos/AddTodo";

type ChangeTodos = EditTodo | RemoveTodo | AddTodo;

export { isEditTodo, isRemoveTodo, isAddTodo };

export type { EditTodo, RemoveTodo, AddTodo };
export default ChangeTodos;
