import { Typography } from "@mui/material";
import { useState } from "react";
import { Todo } from "./model/Todo";
import TodoList from "./components/TodoList";
import ChangeTodos, { isAddTodo, isEditTodo, isRemoveTodo } from "./model/ChangeTodos";

const App = () => {
    const [todos, setTodos] = useState<Todo[]>([
        {
            id: 1,
            title: "todo",
            note: "",
            done: false,
            dueTo: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: undefined,
        },
    ]);
    return (
        <>
            <Typography variant="h3" component="h1">
                Todo App
            </Typography>
            <TodoList
                todos={todos}
                onChange={(e) => {
                    if (isAddTodo(e)) {
                        setTodos([
                            ...todos,
                            {
                                ...e,
                                id: todos.length + 1,
                                createdAt: new Date(),
                                updatedAt: new Date(),
                                deletedAt: undefined,
                            },
                        ]);
                    } else if (isEditTodo(e)) {
                        setTodos(todos.map((todo) => (todo.id === e.id ? { ...todo, ...e } : todo)));
                    } else {
                        setTodos(todos.filter((todo) => todo.id !== e.id));
                    }
                }}
            />
        </>
    );
};

export default App;
