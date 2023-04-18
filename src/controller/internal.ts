import { Todo } from "../model/Todo";

export type Payload = Omit<Todo, "due_to" | "created_at" | "updated_at" | "deleted_at"> & {
    due_to: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
};

export const payload2todo = (payload: Payload): Todo => {
    return {
        ...payload,
        due_to: new Date(payload.due_to),
        created_at: new Date(payload.created_at),
        updated_at: new Date(payload.updated_at),
        deleted_at: payload.deleted_at !== null ? new Date(payload.deleted_at) : undefined,
    };
};
