import { describe, expect, it } from "vitest";
import { countDone } from "../../lib/done-count";
import { item } from "./fixtures";

describe("countDone", () => {
  it("counts only the items marked done", () => {
    expect(countDone([item({ id: "a", done: true }), item({ id: "b", done: false })])).toBe(1);
  });

  it("is 0 when nothing is done", () => {
    expect(countDone([item({ id: "a" }), item({ id: "b" }), item({ id: "c" })])).toBe(0);
  });

  it("counts every item when all are done", () => {
    expect(countDone([item({ id: "a", done: true }), item({ id: "b", done: true })])).toBe(2);
  });
});
