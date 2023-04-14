/** @jsxImportSource @emotion/react */
import { Modal, Box } from "@mui/material";
import { css } from "@emotion/react";
import { Todo } from "../model/Todo";
import ChangeTodos from "../model/ChangeTodos";

export type TodoModalProps = {
    open: boolean;
    model: Todo;
    onChange: (event: ChangeTodos) => void;
    close: () => void;
};

const TodoModal = ({ open, close }: TodoModalProps) => {
    return (
        <Modal open={open} aria-labelledby="todo modal" onClose={close}>
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
                {/* TODO */}
            </Box>
        </Modal>
    );
};

export default TodoModal;
