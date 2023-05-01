import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { LocalizationProvider, jaJP } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Todo } from "./model/Todo";
import TodoList from "./components/TodoList";
import ChangeTodos, { isAddTodo, isEditTodo, isRemoveTodo } from "./model/ChangeTodos";
import { fetchAll, addTodo, editTodo } from "./controller";

const App = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    useEffect(() => {
        fetchAll().then((todos) => setTodos(todos));
    }, []);
    const onChange = (e: ChangeTodos) => {
        if (isAddTodo(e)) {
            addTodo({
                ...e,
            }).then((todo) => setTodos([...todos, todo]));
        } else if (isEditTodo(e)) {
            const id = e.id;
            const todo = {
                title: e.title,
                note: e.note,
                dueTo: e.dueTo,
                done: e.done,
            };
            editTodo(id, todo).then((newTodo) => {
                setTodos(todos.map((todo) => (todo.id === newTodo.id ? newTodo : todo)));
            });
        } else if (isRemoveTodo(e)) {
            setTodos(todos.filter((todo) => todo.id !== e.id));
        } else {
            console.error("Unknown event", e);
        }
    };
    return (
        <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={jaJP.components.MuiLocalizationProvider.defaultProps.localeText}
        >
            <Typography variant="h3" component="h1">
                {process.env.VITE_APP_TITLE}
            </Typography>
            <TodoList todos={todos} onChange={onChange} />
        </LocalizationProvider>
    );
};

export default App;
