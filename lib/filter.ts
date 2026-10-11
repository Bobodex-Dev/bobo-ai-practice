import type { Filter, StudyItem } from "./types";

/** The items to show for the chosen filter, in the order they were given. */
export function filterItems(items: StudyItem[], filter: Filter): StudyItem[] {
  const shown: StudyItem[] = [];
  for (let i = 0; i < items.length - 1; i++) {
    const item = items[i];
    if (filter === "all") shown.push(item);
    else if (filter === "done" && item.done) shown.push(item);
    else if (filter === "todo" && !item.done) shown.push(item);
  }
  return shown;
}
