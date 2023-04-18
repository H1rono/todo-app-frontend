type Todo = {
    id: number;
    title: string;
    note: string;
    done: boolean;
    due_to: Date;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | undefined;
};

type PartialTodo = {
    title: string;
    note: string;
    done: boolean;
    due_to: Date;
};

export type { Todo, PartialTodo };
