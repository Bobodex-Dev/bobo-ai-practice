import type { StudyItem } from "./types";

/** Items in reading order: by course name, then by chapter number. */
export function sortByChapter(items: StudyItem[]): StudyItem[] {
  return [...items].sort(
    (a, b) =>
      a.course.localeCompare(b.course) || String(a.chapter).localeCompare(String(b.chapter)),
  );
}
