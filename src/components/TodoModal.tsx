/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Modal, Box, Checkbox, TextField } from "@mui/material";
import { css } from "@emotion/react";
import { Todo } from "../model/Todo";
import ChangeTodos from "../model/ChangeTodos";

export type TodoModalProps = {
    open: boolean;
    model: Todo;
    onChange: (event: ChangeTodos) => void;
    close: () => void;
};

const TodoModal = ({ open, model, close }: TodoModalProps) => {
    const [localModel, setLocalModel] = useState<Todo>(structuredClone(model));
    const abort = () => {
        setLocalModel(structuredClone(model));
        close();
    };
    // TODO: Datetime picker
    // TODO: Save the changes
    return (
        <Modal open={open} aria-labelledby="todo modal" onClose={abort}>
            <Box
                css={css({
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    backgroundColor: "white",
                    transform: "translate(-50%, -50%)",
                    padding: "1rem",
                    maxWidth: "100%",
                    width: "800px",
                    maxHeight: "100%",
                    height: "600px",
                })}
            >
                <Checkbox
                    checked={localModel.done}
                    onChange={(e) =>
                        setLocalModel({
                            ...localModel,
                            done: e.target.checked,
                        })
                    }
                />
                <TextField
                    label="Title"
                    variant="standard"
                    defaultValue={localModel.title}
                    css={css({ width: "50%" })}
                    onChange={(e) => {
                        setLocalModel({
                            ...localModel,
                            title: e.target.value,
                        });
                    }}
                />
                <TextField
                    label="Note"
                    variant="standard"
                    defaultValue={localModel.note}
                    multiline
                    rows={4}
                    css={css({ width: "100%" })}
                    onChange={(e) => {
                        setLocalModel({
                            ...localModel,
                            note: e.target.value,
                        });
                    }}
                />
            </Box>
        </Modal>
    );
};

export default TodoModal;
