import type { StudyItem } from "../../lib/types";

export function item(overrides: Partial<StudyItem>): StudyItem {
  return {
    id: overrides.id ?? `${overrides.course ?? "Course"}-${overrides.chapter ?? 1}`,
    course: "How Solana Works",
    chapter: 1,
    title: "A chapter",
    done: false,
    addedAt: "2026-02-20T15:00:00Z",
    ...overrides,
  };
}
