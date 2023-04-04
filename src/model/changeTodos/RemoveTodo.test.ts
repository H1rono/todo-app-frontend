import { expect, test } from "vitest";
import { isRemoveTodo } from "./RemoveTodo";

test("isRemoveTodo", () => {
    expect(isRemoveTodo(null)).toBe(false);
    expect(isRemoveTodo(undefined)).toBe(false);
    expect(isRemoveTodo(0)).toBe(false);
    expect(isRemoveTodo("")).toBe(false);
    expect(isRemoveTodo({})).toBe(false);
    expect(isRemoveTodo({ id: 0 })).toBe(true);
    expect(isRemoveTodo({ id: 0, title: "title" })).toBe(false);
});
