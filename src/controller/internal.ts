import { Todo } from "../model/Todo";

export type Payload = Omit<Todo, "dueTo" | "createdAt" | "updatedAt" | "deletedAt"> & {
    due_to: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
};

export const payload2todo = (payload: Payload): Todo => {
    return {
        id: payload.id,
        title: payload.title,
        note: payload.note,
        done: payload.done,
        dueTo: new Date(payload.due_to),
        createdAt: new Date(payload.created_at),
        updatedAt: new Date(payload.updated_at),
        deletedAt: payload.deleted_at !== null ? new Date(payload.deleted_at) : undefined,
    };
};
