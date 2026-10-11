import { StudyBoard } from "@/components/StudyBoard";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col gap-8 px-6 py-16">
        <header className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">Study Board</h1>
          <p className="text-zinc-600 dark:text-zinc-400">The courses and chapters you are working through.</p>
          <div className="w-[640px] rounded-full bg-zinc-200 px-4 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
            Tip: mark a chapter done once you pass its quiz.
          </div>
        </header>
        <StudyBoard />
      </main>
    </div>
  );
}
