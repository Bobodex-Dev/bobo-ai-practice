import { describe, expect, it } from "vitest";
import { sortByChapter } from "../../lib/sort";
import { item } from "./fixtures";

describe("sortByChapter", () => {
  it("keeps a single chapter as it is", () => {
    expect(sortByChapter([item({ id: "a" })]).map((i) => i.id)).toEqual(["a"]);
  });

  it("orders chapters 1 to 3 within a course", () => {
    const items = [item({ id: "c3", chapter: 3 }), item({ id: "c1", chapter: 1 }), item({ id: "c2", chapter: 2 })];
    expect(sortByChapter(items).map((i) => i.id)).toEqual(["c1", "c2", "c3"]);
  });

  it("puts chapter 10 after chapter 2", () => {
    const items = [item({ id: "c10", chapter: 10 }), item({ id: "c2", chapter: 2 })];
    expect(sortByChapter(items).map((i) => i.id)).toEqual(["c2", "c10"]);
  });
});
