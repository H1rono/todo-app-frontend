/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ListItem, ListItemIcon, ListItemText, Checkbox } from "@mui/material";
import { Todo } from "../model/Todo";
import ChangeTodos, { EditTodo } from "../model/ChangeTodos";

export type TodoItemProps = {
    model: Todo;
    onChange: (event: ChangeTodos) => void;
};

const TodoItem = ({ model, onChange }: TodoItemProps) => (
    <ListItem
        css={css({
            borderBottom: "1px solid black",
        })}
    >
        <ListItemIcon>
            <Checkbox
                checked={model.done}
                onChange={(e) => {
                    const event: EditTodo = {
                        id: model.id,
                        done: e.target.checked,
                        title: model.title,
                        note: model.note,
                        dueTo: model.dueTo,
                    };
                    onChange(event);
                }}
            />
        </ListItemIcon>
        <ListItemText primary={model.title} />
        <ListItemText
            primary={model.dueTo.toLocaleString("ja-JP")}
            css={css({ display: "flex", justifyContent: "flex-end" })}
            disableTypography
        />
    </ListItem>
);

export default TodoItem;
