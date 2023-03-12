/** @jsxImportSource @emotion/react */

import { CheckBoxOutlineBlank } from "@mui/icons-material";
import { Checkbox, List as MList, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { css } from "@emotion/react";
import { Todo } from "./Model";

export type ListProps = {
    todos: Todo[];
    onChange: (id: number, done: boolean) => void;
};

const List = ({ todos, onChange }: ListProps) => (
    <MList>
        {todos.map((todo) => (
            // TODO: export ListItem
            <ListItem>
                <Checkbox checked={todo.done} onChange={(e) => onChange(todo.id, e.target.checked)} />
                <ListItemText primary={todo.title} />
            </ListItem>
        ))}
    </MList>
);

export default List;
