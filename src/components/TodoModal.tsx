/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import { Modal, Box, Checkbox, TextField, Button } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Todo } from "../model/Todo";
import ChangeTodos, { EditTodo, AddTodo } from "../model/ChangeTodos";

export type ModalKind = "ADD" | "EDIT";

export type TodoModalProps = {
    kind: ModalKind;
    open: boolean;
    model?: Todo;
    onChange: (event: ChangeTodos) => void;
    close: () => void;
};

const TodoModal = ({ kind, open, model, onChange, close }: TodoModalProps) => {
    const m = model ?? {
        id: 0,
        title: "",
        note: "",
        dueTo: new Date(),
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: undefined,
    };
    const [localModel, setLocalModel] = useState<Todo>(structuredClone(m));
    const abort = () => {
        setLocalModel(structuredClone(m));
        close();
    };
    const saveOrAdd = () => {
        let event: ChangeTodos;
        if (kind === "EDIT") {
            event = {
                id: localModel.id,
                title: localModel.title,
                note: localModel.note,
                dueTo: localModel.dueTo,
                done: localModel.done,
            } as EditTodo;
        } else {
            /* kind === "ADD" */
            event = {
                title: localModel.title,
                note: localModel.note,
                dueTo: localModel.dueTo,
                done: localModel.done,
            } as AddTodo;
        }
        onChange(event);
        close();
    };
    return (
        <Modal open={open} aria-labelledby="todo modal" onClose={abort}>
            <Box
                css={css({
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    backgroundColor: "white",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    alignItems: "start",
                    padding: "1rem",
                    maxWidth: "100%",
                    width: "800px",
                    maxHeight: "100%",
                    height: "fit-content",
                })}
            >
                <Checkbox
                    checked={localModel.done}
                    css={css({ flex: "0 0 auto" })}
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
                    css={css({ flex: "1 1 auto" })}
                    onChange={(e) => {
                        setLocalModel({
                            ...localModel,
                            title: e.target.value,
                        });
                    }}
                />
                <Box css={css({ width: "100%", padding: "1em 0" })}>
                    <DateTimePicker
                        label="Due to"
                        value={dayjs(localModel.dueTo)}
                        format="YYYY年MM月DD日 HH:mm:ss"
                        onChange={(newValue) => {
                            setLocalModel({
                                ...localModel,
                                dueTo: newValue?.toDate() ?? localModel.dueTo,
                            });
                        }}
                    />
                </Box>
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
                <Box css={css({ justifySelf: "flex-end", alignSelf: "end", marginLeft: "auto", paddingTop: "1rem" })}>
                    <Button variant="contained" color="error" onClick={abort} css={css({ textTransform: "none" })}>
                        cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={saveOrAdd}
                        css={css({ margin: "0 1rem", textTransform: "none" })}
                    >
                        {kind === "EDIT" ? "save" : "add"}
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default TodoModal;
