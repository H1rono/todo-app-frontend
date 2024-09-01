/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import { List, ListItem, ListItemButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Todo } from "../model/Todo";
import TodoItem from "./TodoItem";
import ChangeTodos from "../model/ChangeTodos";
import TodoModal from "./TodoModal";

export type TodoListProps = {
    todos: Todo[];
    onChange: (event: ChangeTodos) => void;
};

const TodoList = ({ todos, onChange }: TodoListProps) => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <List>
            {todos.map((todo) => (
                <TodoItem key={todo.id} model={todo} onChange={onChange} />
            ))}
            <ListItem>
                <ListItemButton
                    onClick={() => setModalOpen(true)}
                    css={css({ justifyContent: "center" })}
                >
                    <AddIcon />
                </ListItemButton>
                <TodoModal
                    kind="ADD"
                    open={modalOpen}
                    onChange={onChange}
                    close={() => setModalOpen(false)}
                />
            </ListItem>
        </List>
    );
};

export default TodoList;
