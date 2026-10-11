"use client";

import { useSyncExternalStore } from "react";
import { loadItems, saveItems, STARTER_ITEMS } from "./storage";
import type { StudyItem } from "./types";

// Browser storage is an outside store, so it is read with useSyncExternalStore:
// the server renders the starter items, the browser then switches to what is
// saved, and the two never disagree during hydration.
const listeners = new Set<() => void>();
let cache: StudyItem[] | null = null;

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  const onStorage = () => {
    cache = null;
    onChange();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot(): StudyItem[] {
  if (cache === null) cache = loadItems();
  return cache;
}

function getServerSnapshot(): StudyItem[] {
  return STARTER_ITEMS;
}

export function useStudyItems(): [StudyItem[], (next: StudyItem[]) => void] {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const setItems = (next: StudyItem[]) => {
    cache = next;
    saveItems(next);
    listeners.forEach((listener) => listener());
  };
  return [items, setItems];
}
