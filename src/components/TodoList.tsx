/** @jsxImportSource @emotion/react */

import { List as MList } from "@mui/material";
import { Todo } from "../model/Todo";
import TodoItem from "./TodoItem";
import ChangeTodos from "../model/ChangeTodos";

export type TodoListProps = {
    todos: Todo[];
    onChange: (event: ChangeTodos) => void;
};

const TodoList = ({ todos, onChange }: TodoListProps) => (
    <MList>
        {todos.map((todo) => (
            <TodoItem key={todo.id} model={todo} onChange={onChange} />
        ))}
    </MList>
);

export default TodoList;
