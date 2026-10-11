export interface StudyItem {
  id: string;
  course: string;
  chapter: number;
  title: string;
  done: boolean;
  /** When the item was added, as an ISO 8601 timestamp in UTC. */
  addedAt: string;
}

export type Filter = "all" | "done" | "todo";
