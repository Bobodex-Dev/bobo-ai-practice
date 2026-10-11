import type { StudyItem } from "./types";

const KEY = "study-board:v1";

/** A few items so the board is not empty the first time it opens. */
export const STARTER_ITEMS: StudyItem[] = [
  { id: "s1", course: "How Solana Works", chapter: 1, title: "Everything is an account", done: true, addedAt: "2026-02-20T15:00:00Z" },
  { id: "s2", course: "How Solana Works", chapter: 2, title: "Who may change what", done: false, addedAt: "2026-02-24T15:00:00Z" },
  { id: "s3", course: "How Solana Works", chapter: 10, title: "Tokens", done: false, addedAt: "2026-03-01T02:00:00Z" },
];

/** Read saved items. Browser storage can be missing, blocked or damaged, so fall back safely. */
export function loadItems(): StudyItem[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    const saved: unknown = raw ? JSON.parse(raw) : null;
    return Array.isArray(saved) ? (saved as StudyItem[]) : STARTER_ITEMS;
  } catch {
    return STARTER_ITEMS;
  }
}

export function saveItems(items: StudyItem[]): void {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(items));
  } catch {
    // Storage full or blocked: the board still works for this visit.
  }
}
