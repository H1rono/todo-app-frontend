import { Typography } from "@mui/material";
import { useState } from "react";
import { Todo } from "./model/Todo";
import TodoList from "./components/TodoList";

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
                onChange={(id, done) => setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done } : todo)))}
            />
        </>
    );
};

export default App;
