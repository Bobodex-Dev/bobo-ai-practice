import { describe, expect, it } from "vitest";
import { filterItems } from "../../lib/filter";
import { item } from "./fixtures";

const items = [
  item({ id: "a", chapter: 1, done: true }),
  item({ id: "b", chapter: 2, done: false }),
  item({ id: "c", chapter: 3, done: true }),
];

describe("filterItems", () => {
  it("shows every item for All", () => {
    expect(filterItems(items, "all").map((i) => i.id)).toEqual(["a", "b", "c"]);
  });

  it("shows only done items for Done", () => {
    expect(filterItems(items, "done").map((i) => i.id)).toEqual(["a", "c"]);
  });

  it("shows only items still to do for To do", () => {
    expect(filterItems(items, "todo").map((i) => i.id)).toEqual(["b"]);
  });

  it("returns an empty list when there are no items", () => {
    expect(filterItems([], "all")).toEqual([]);
  });
});
