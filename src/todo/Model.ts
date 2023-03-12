type Todo = {
    id: number;
    title: string;
    note: string;
    done: boolean;
    dueTo: Date;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | undefined;
};

type PartialTodo = {
    title: string;
    note: string;
    done: boolean;
    dueTo: Date;
};

export type { Todo, PartialTodo };
