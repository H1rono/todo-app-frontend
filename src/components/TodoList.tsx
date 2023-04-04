/** @jsxImportSource @emotion/react */

import { List as MList } from "@mui/material";
import { Todo } from "../model/Todo";
import ListItem from "./TodoItem";
import ChangeTodos from "../model/ChangeTodos";

export type ListProps = {
    todos: Todo[];
    onChange: (event: ChangeTodos) => void;
};

const List = ({ todos, onChange }: ListProps) => (
    <MList>
        {todos.map((todo) => (
            <ListItem key={todo.id} model={todo} onChange={onChange} />
        ))}
    </MList>
);

export default List;
