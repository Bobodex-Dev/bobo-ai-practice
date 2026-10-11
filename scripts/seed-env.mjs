// Chapter 8 lab: write a fake .env so you can watch a deny rule stop the agent
// reading it. The key is obviously fake and the file is ignored by git.
import { existsSync, writeFileSync } from "node:fs";

if (existsSync(".env")) {
  console.log(".env already exists; leaving it as it is.");
} else {
  writeFileSync(".env", "# Practice only. This is not a real key.\nFAKE_STUDY_BOARD_KEY=not-a-real-key-0000\n");
  console.log("Wrote a fake .env for the chapter 8 lab.");
}
