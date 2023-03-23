/** @jsxImportSource @emotion/react */

import { List as MList } from "@mui/material";
import { Todo } from "./Model";
import ListItem from "./ListItem";

export type ListProps = {
    todos: Todo[];
    onChange: (id: number, done: boolean) => void;
};

const List = ({ todos, onChange }: ListProps) => (
    <MList>
        {todos.map((todo) => (
            <ListItem key={todo.id} model={todo} onChange={(done) => onChange(todo.id, done)} />
        ))}
    </MList>
);

export default List;
