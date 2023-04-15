import { Typography } from "@mui/material";
import { useState } from "react";
import { Todo } from "./model/Todo";
import TodoList from "./components/TodoList";
import { isAddTodo, isEditTodo, isRemoveTodo } from "./model/ChangeTodos";
import { LocalizationProvider, jaJP } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

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
        <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={jaJP.components.MuiLocalizationProvider.defaultProps.localeText}
        >
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
                    } else if (isRemoveTodo(e)) {
                        setTodos(todos.filter((todo) => todo.id !== e.id));
                    }
                }}
            />
        </LocalizationProvider>
    );
};

export default App;
