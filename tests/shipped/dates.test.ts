import { describe, expect, it } from "vitest";
import { formatAdded } from "../../lib/dates";

// tests/setup.ts pins the time zone to America/New_York (five hours behind UTC in winter).
describe("formatAdded", () => {
  it("shows the day in the reader's time zone, not in UTC", () => {
    // 02:00 on March 1 in UTC is still the evening of February 28 in New York.
    expect(formatAdded("2026-03-01T02:00:00Z")).toBe("Mar 1, 2026");
  });

  it("shows a midday time on the same day", () => {
    expect(formatAdded("2026-02-20T15:00:00Z")).toBe("Feb 20, 2026");
  });

  it("shows the month and year for a summer date", () => {
    expect(formatAdded("2026-07-04T16:00:00Z")).toBe("Jul 4, 2026");
  });
});
