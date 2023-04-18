/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import { ListItem, ListItemIcon, ListItemText, Checkbox, ListItemButton } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import dayjs from "dayjs";
import { Todo } from "../model/Todo";
import ChangeTodos, { EditTodo } from "../model/ChangeTodos";
import TodoModal from "./TodoModal";

export type TodoItemProps = {
    model: Todo;
    onChange: (event: ChangeTodos) => void;
};

const TodoItem = ({ model, onChange }: TodoItemProps) => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <ListItem css={css({ borderBottom: "1px solid black" })}>
            <ListItemIcon>
                <Checkbox
                    checked={model.done}
                    onChange={(e) => {
                        const event: EditTodo = {
                            id: model.id,
                            done: e.target.checked,
                            title: model.title,
                            note: model.note,
                            due_to: model.due_to,
                        };
                        onChange(event);
                    }}
                />
            </ListItemIcon>
            <ListItemText primary={model.title} css={css({ flex: "0 0 auto", padding: "0 1em 0 0" })} />
            <ListItemButton css={css({ flex: "0 0 auto" })} onClick={() => setModalOpen(true)}>
                <EditNoteIcon />
            </ListItemButton>
            <TodoModal
                kind="EDIT"
                open={modalOpen}
                model={model}
                onChange={onChange}
                close={() => setModalOpen(false)}
            />
            <ListItemText
                primary={dayjs(model.due_to).format("YYYY年MM月DD日 HH:mm:ss")}
                css={css({ display: "flex", justifyContent: "flex-end" })}
                disableTypography
            />
        </ListItem>
    );
};

export default TodoItem;
