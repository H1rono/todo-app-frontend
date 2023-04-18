import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { LocalizationProvider, jaJP } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Todo } from "./model/Todo";
import TodoList from "./components/TodoList";
import ChangeTodos, { isAddTodo, isEditTodo, isRemoveTodo } from "./model/ChangeTodos";
import fetchAll from "./controller/fetchAll";
import addTodo from "./controller/addTodo";

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
            setTodos(todos.map((todo) => (todo.id === e.id ? { ...todo, ...e } : todo)));
        } else if (isRemoveTodo(e)) {
            setTodos(todos.filter((todo) => todo.id !== e.id));
        }
    };
    return (
        <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={jaJP.components.MuiLocalizationProvider.defaultProps.localeText}
        >
            <Typography variant="h3" component="h1">
                Todo App
            </Typography>
            <TodoList todos={todos} onChange={onChange} />
        </LocalizationProvider>
    );
};

export default App;
