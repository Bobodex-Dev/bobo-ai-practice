# Bobo AI Practice

The practice repository for the Bobo University course **Code With an AI Agent: Start Here**.

It is Study Board, a small app for tracking the courses and chapters you are working through, with a few bugs planted on purpose. Each chapter of the course points you at one of them, and you fix it by directing an AI coding agent, one habit at a time.

## Get your own copy

You need git, Node.js 22.13 or newer (the current LTS is best), pnpm 12 or newer and the GitHub CLI (`gh`), set up in chapters 2 and 3 of the course. Check with `node --version` and `pnpm --version`.

    gh repo create bobo-ai-practice --template Bobodex-Dev/bobo-ai-practice --private --clone --include-all-branches
    cd bobo-ai-practice
    pnpm install

## If `pnpm` fails inside this folder

If every `pnpm` command here fails on Windows with an error like this one, your global pnpm is older than the version this project uses:

    '"C:\Users\<you>\AppData\Local\pnpm\.tools\pnpm\12.10.1\bin\\..\node_modules\pnpm\pnpm"' is not recognized as an internal or external command

Reinstall pnpm with the installer from chapter 2, open a new terminal, and check that `pnpm --version` prints 12 or higher.

## Commands

| Command | What it does |
|---|---|
| `pnpm dev` | Runs the app at http://localhost:3000 |
| `pnpm test` | Runs all the tests once |
| `pnpm test:shipped` | Runs only the course's tests in `tests/shipped/` |
| `pnpm typecheck` | Checks the TypeScript types |
| `pnpm lint` | Checks the code for common mistakes |
| `pnpm build` | Builds the app for production |
| `pnpm lab:seed-env` | Writes a fake `.env` for the chapter 8 lab |

## What is broken on purpose

- The list never shows the last item it is given, so a chapter can go missing.
- The done count is wrong.
- A date can show the wrong day, depending on your time zone.
- Chapters are listed in the wrong order.
- On a phone, the page scrolls sideways.

The course fixes them one chapter at a time. Please do not fix them before then.

## Two rules

- **Never edit anything in `tests/shipped/`.** Those tests are how you, and the course, know a bug is really fixed. If an agent changes a test to make it pass, it has not fixed anything.
- **Some tests fail on purpose.** That is the point. Each chapter tells you which one to work on.
