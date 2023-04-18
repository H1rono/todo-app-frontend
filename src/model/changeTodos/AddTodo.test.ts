import { expect, test } from "vitest";
import { isAddTodo } from "./AddTodo";

test("isAddTodo", () => {
    expect(isAddTodo(null)).toBe(false);
    expect(isAddTodo(undefined)).toBe(false);
    expect(isAddTodo(0)).toBe(false);
    expect(isAddTodo("")).toBe(false);
    expect(isAddTodo({})).toBe(false);
    expect(isAddTodo({ title: "title", note: "note", done: true })).toBe(false);
    expect(isAddTodo({ title: "title", note: "note", done: true, due_to: new Date() })).toBe(true);
    expect(isAddTodo({ id: 0, title: "title", note: "note", done: true, due_to: new Date() })).toBe(false);
});
