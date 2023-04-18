import { expect, test } from "vitest";
import { isEditTodo } from "./EditTodo";

test("isEditTodo", () => {
    expect(isEditTodo(null)).toBe(false);
    expect(isEditTodo(undefined)).toBe(false);
    expect(isEditTodo(0)).toBe(false);
    expect(isEditTodo("")).toBe(false);
    expect(isEditTodo({})).toBe(false);
    expect(isEditTodo({ title: "title", note: "note", done: true, due_to: new Date() })).toBe(false);
    expect(isEditTodo({ id: 0, title: "title", note: "note", done: true, due_to: new Date() })).toBe(true);
    expect(
        isEditTodo({ id: 0, title: "title", note: "note", done: true, due_to: new Date(), created_at: new Date() })
    ).toBe(false);
});
