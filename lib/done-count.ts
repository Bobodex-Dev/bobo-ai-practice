import type { StudyItem } from "./types";

/** How many items are marked done. */
export function countDone(items: StudyItem[]): number {
  return items.filter((item) => !item.done).length;
}
