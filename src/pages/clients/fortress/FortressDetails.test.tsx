import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import FortressDetails from "./FortressDetails";

test("fortress back button click", async () => {
  render(
    <MemoryRouter>
      <FortressDetails />
    </MemoryRouter>
  );

  const button = screen.getByRole("button", {
    name: /back/i,
  });

  await userEvent.click(button);

  expect(button).toBeInTheDocument();
});