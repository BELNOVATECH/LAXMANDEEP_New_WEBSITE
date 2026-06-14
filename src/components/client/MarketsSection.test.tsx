import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import MarketsSection from "./MarketsSection";

describe("MarketsSection", () => {
  test("renders markets", () => {
    render(
      <MarketsSection
        markets={["Banking", "Healthcare"]}
      />
    );

    expect(screen.getByText("Banking"))
      .toBeInTheDocument();
  });

  // 👇 Add this test here
  test("uses default globe icon for extra markets", () => {
    render(
      <MarketsSection
        markets={[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9", // this triggers fallback 🌍
        ]}
      />
    );

    expect(
      screen.getByText("🌍")
    ).toBeInTheDocument();
  });
});