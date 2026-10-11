"use client";

import { useState } from "react";
import { formatAdded } from "@/lib/dates";
import { countDone } from "@/lib/done-count";
import { filterItems } from "@/lib/filter";
import { sortByChapter } from "@/lib/sort";
import { useStudyItems } from "@/lib/use-study-items";
import type { Filter } from "@/lib/types";

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "todo", label: "To do" },
  { value: "done", label: "Done" },
];

export function StudyBoard() {
  const [items, update] = useStudyItems();
  const [filter, setFilter] = useState<Filter>("all");
  const [course, setCourse] = useState("");
  const [chapter, setChapter] = useState("");
  const [title, setTitle] = useState("");

  function add(e: React.FormEvent) {
    e.preventDefault();
    const n = Number(chapter);
    if (!course.trim() || !title.trim() || !Number.isInteger(n) || n < 1) return;
    update([
      ...items,
      {
        id: crypto.randomUUID(),
        course: course.trim(),
        chapter: n,
        title: title.trim(),
        done: false,
        addedAt: new Date().toISOString(),
      },
    ]);
    setChapter("");
    setTitle("");
  }

  function toggle(id: string) {
    update(items.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
  }

  const shown = filterItems(sortByChapter(items), filter);

  return (
    <section className="flex w-full flex-col gap-6">
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {countDone(items)} of {items.length} done
      </p>

      <div role="group" aria-label="Filter" className="flex gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            aria-pressed={filter === f.value}
            className="rounded-full border border-zinc-300 px-3 py-1 text-sm aria-pressed:bg-zinc-900 aria-pressed:text-white dark:border-zinc-700 dark:aria-pressed:bg-zinc-100 dark:aria-pressed:text-black"
          >
            {f.label}
          </button>
        ))}
      </div>

      <ul className="flex flex-col gap-2">
        {shown.map((item) => (
          <li key={item.id} className="flex items-center gap-3 rounded-lg border border-zinc-200 p-3 dark:border-zinc-800">
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => toggle(item.id)}
              aria-label={`Mark ${item.course} chapter ${item.chapter} done`}
              className="h-4 w-4"
            />
            <div className="flex flex-1 flex-col">
              <span className={item.done ? "text-zinc-500 line-through" : ""}>
                {item.course}, chapter {item.chapter}: {item.title}
              </span>
              <span className="text-xs text-zinc-500">Added {formatAdded(item.addedAt)}</span>
            </div>
          </li>
        ))}
      </ul>

      <form onSubmit={add} className="flex flex-col gap-2 sm:flex-row">
        <label className="sr-only" htmlFor="course">Course</label>
        <input id="course" value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Course" className="flex-1 rounded border border-zinc-300 px-2 py-1 dark:border-zinc-700" />
        <label className="sr-only" htmlFor="chapter">Chapter number</label>
        <input id="chapter" value={chapter} onChange={(e) => setChapter(e.target.value)} placeholder="Chapter" inputMode="numeric" className="w-24 rounded border border-zinc-300 px-2 py-1 dark:border-zinc-700" />
        <label className="sr-only" htmlFor="title">Chapter title</label>
        <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Chapter title" className="flex-1 rounded border border-zinc-300 px-2 py-1 dark:border-zinc-700" />
        <button type="submit" className="rounded bg-zinc-900 px-4 py-1 text-white dark:bg-zinc-100 dark:text-black">
          Add
        </button>
      </form>
    </section>
  );
}
