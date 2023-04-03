import { ListItem as MListItem, ListItemIcon, ListItemText, Checkbox } from "@mui/material";
import { Todo } from "../model/Todo";

export type ListItemProps = {
    key: number;
    model: Todo;
    onChange: (done: boolean) => void;
};

const ListItem = ({ key, model, onChange }: ListItemProps) => (
    <MListItem key={key}>
        <ListItemIcon>
            <Checkbox checked={model.done} onChange={(e) => onChange(e.target.checked)} />
        </ListItemIcon>
        <ListItemText primary={model.title} />
    </MListItem>
);

export default ListItem;
