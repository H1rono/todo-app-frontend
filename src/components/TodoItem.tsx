import { ListItem as MListItem, ListItemIcon, ListItemText, Checkbox } from "@mui/material";
import { Todo } from "../model/Todo";
import ChangeTodos, { EditTodo } from "../model/ChangeTodos";

export type TodoItemProps = {
    model: Todo;
    onChange: (event: ChangeTodos) => void;
};

const TodoItem = ({ model, onChange }: TodoItemProps) => (
    <MListItem>
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
    </MListItem>
);

export default TodoItem;
